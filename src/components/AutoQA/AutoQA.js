import React, { useEffect, useRef, useState } from 'react'
import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Box, Card, CardContent, List, ListItem, ListItemText, Paper, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { MdQuestionAnswer } from 'react-icons/md';
import { FcAnswers, FcQuestions } from 'react-icons/fc';
import { FaArrowCircleRight } from 'react-icons/fa';


import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const AutoQA = () => {
    const passageRef = useRef(null);
    // const questionRef = useRef(null);
    const [questionVal, setQuestionVal] = useState(null)
    const [answer, setAnswer] = useState();
    const [model, setModel] = useState(null);
    const [openBackDrop, setopenBackDrop] = useState(false);
    const classes = useStyles();
    // Load Tensorflow Model
    const loadModel = async () => {
        const loadedModel = await qna.load()
        setModel(loadedModel);
        console.log('Model loaded.')
    }
    const answerQuestion = async (e) => {
        debugger;
        if (e.which === 13 && model !== null) {
            setopenBackDrop(true)
            console.log('Question submitted.')
            const passage = passageRef.current.value
            const question = questionVal

            const answers = await model.findAnswers(question, passage)
            setAnswer(answers);
            console.log(answers)
            setTimeout(() => {

                setopenBackDrop(false)
            }, 1000);

        }
    }
    const loadQuestion = (e) => {
        setQuestionVal(e?.currentTarget?.value)
    }

    useEffect(() => { loadModel() }, [])

    return (
        <div style={{ alignItems: 'center' }}>
            <Backdrop  open={openBackDrop} >
                <CircularProgress color="inherit" />
            </Backdrop>
             
            {model == null ?
                 <Box p={2}  m={2} justifyContent='center' flexDirection='column' display='flex' alignItems='center'>
                    <Typography  color='gray'>Model Loading ... </Typography>

                    <div></div>
                    <Loader type="BallTriangle"  color="#00BFFF" height={80} width={80} />
                </Box>
                :
                <>
                    <Paper >
                        <Box p={2} m={2} justifyContent='center' alignItems='center'>
                            <Typography component="h6" variant="h6">Paste your content below and ask questions </Typography>


                            <TextareaAutosize fullWidth cols={158} ref={passageRef} aria-label="minimum height"
                                rowsMin={15} placeholder="Paste your content" />
                            {/* <Typography component="h6" variant="h6"></Typography> */}
                            {/* <input ref={questionRef} size="80"></input> */}
                            <br />
                            <FcQuestions title='Type a Question and press enter' cursor='pointer' fontSize={30} />
                            <TextField value={questionVal} onChange={loadQuestion} fullWidth onKeyPress={answerQuestion}
                                id="outlined-basic" label="Ask a Question" variant="outlined" />
                            <Card style={{ marginTop: '20px' }}>
                                <CardContent>
                                    <Typography component="h6" variant="h6"> <FcAnswers /> Answers  </Typography>
                                    <List component="nav" aria-label="main mailbox folders">
                                        {answer ?
                                            answer.map((ans, idx) =>
                                                <ListItem button key={idx + 1}>
                                                    <ListItemIcon > </ListItemIcon>
                                                    <ListItemText>
                                                        <FaArrowCircleRight color='#3f51b5' />  {idx + 1}   {ans.text} ({Math.floor(ans.score * 100) / 100})
                                                    </ListItemText>
                                                </ListItem>
                                            )
                                            :
                                            <ListItem button>
                                                <ListItemText primary="No data" />
                                            </ListItem>
                                        }
                                    </List>

                                </CardContent>
                            </Card>

                        </Box>

                    </Paper>

                    {/* 
                    
                        
                   
                    <br />
                    Answers
                    {answer ? answer.map((ans, idx) => <div><b>Answer {idx + 1} - </b> {ans.text} ({Math.floor(ans.score * 100) / 100})</div>) : ""} */}
                </>
            }
        </div>
    )
}

export default AutoQA

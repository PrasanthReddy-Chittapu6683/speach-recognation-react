import React, { useEffect, useRef, useState } from 'react'
import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {
    Box, Card, CardContent, FilledInput, IconButton, InputAdornment, InputBase, List, ListItem, ListItemText, Paper,
    TextareaAutosize, TextField, Typography
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { MdAccountCircle, MdQuestionAnswer } from 'react-icons/md';
import { FcAnswers, FcQuestions, FcSpeaker } from 'react-icons/fc';
import { FaArrowCircleRight, FaDirections, FaMicrophoneAlt, FaPause, FaPauseCircle, FaRegPauseCircle, FaSearch, FaStop, FaStopCircle } from 'react-icons/fa';
import { GrResume } from 'react-icons/gr';

// import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { AiFillPlayCircle } from 'react-icons/ai';





const useStyles = makeStyles((theme) => ({
    // backdrop: {
    //     zIndex: 1,
    //     color: '#fff',
    // },
    root: {
        padding: '2px 4px',
        marginTop: '2px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
        cursor: 'pointer'
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();
mic.lang = "en-US";
let synth = speechSynthesis;
if (synth.speaking) { /* stop narration */
    /* for safari  flag = false;*/
    debugger;
    synth.cancel();
}
const AutoQA = () => {
    const passageRef = useRef(null);
    const [questionVal, setQuestionVal] = useState(null)
    const [answer, setAnswer] = useState();
    const [model, setModel] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false)
    const [isResumePlaying, setisResumePlaying] = useState(false)
    const classes = useStyles();
    const [note, setNote] = useState("");
    const [isListening, setIsListening] = useState(true);
    const [isLoading, setIsLoading] = useState(false)
    // Load Tensorflow Model
    const loadModel = async () => {
        const loadedModel = await qna.load()
        setModel(loadedModel);
        console.log('Model loaded.')
    }
    const answerQuestion = async (e, questionData = null) => {
        if ((model !== null && (questionVal || questionData) && passageRef?.current?.value)) {
            setIsLoading(true);
            setAnswer(null)
            const passage = passageRef.current.value
            const question = questionVal || questionData;
            const answers = await model.findAnswers(question, passage)
            setTimeout(() => {
                console.log('Question submitted.')
                setAnswer(answers);
                console.log(answers)
                setIsLoading(false);
            }, 1000);
        }
    }
    const loadQuestion = (e) => {
        setQuestionVal(e?.currentTarget?.value)
    }

    useEffect(() => { loadModel() }, [])

    const handleListen = () => {
        if (true) {
            mic.start();
            mic.onend = () => {
                mic.stop();
            };
        } else {
            mic.stop();
        }

        // This runs when the speech recognition service starts
        mic.onstart = function () {
            console.log("We are listening. Try speaking into the microphone.");
        };

        mic.onspeechend = function () {
            // when user is done speaking
            mic.stop();
            console.log("Speaking ends");

        }

        mic.onresult = event => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join("");

            setNote(transcript);
            console.log(transcript)
            setQuestionVal(transcript)
            setTimeout(() => {
                answerQuestion(null, transcript)
            }, 500);
            // 


            //Speech utterance library. Will pseak for you
            // let speech = new SpeechSynthesisUtterance();

            // speech.lang = "en-US";
            // speech.text = transcript;
            // speech.volume = 1;
            // speech.rate = 1;
            // speech.pitch = 1;

            // window.speechSynthesis.speak(speech);
            // if (isSearched) {

            // updateInput(transcript);
            // }
        };
    };
    const readLoud = () => {
        //Speech utterance library. Will pseak for you
        if (passageRef?.current?.value) {
            setIsPlaying(true)
            console.log('Start in Speaking');
            let speech = new SpeechSynthesisUtterance();
            var voices = window.speechSynthesis.getVoices();
            console.log(voices)
            speech.lang = "en-US";
            speech.text = passageRef?.current?.value;
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;
            speech.voice = voices[3];
            window.speechSynthesis.speak(speech);
            speech.onend = function (e) {
                setIsPlaying(false)
                console.log('Finished in Speaking');
            };
        } else {
            alert('No Content placed')
        }
    }

    const pauseVoice = () => {
        window.speechSynthesis.pause()
        
        setisResumePlaying(true)
        setIsPlaying(true)
    }
    const resumeVoice = () => {
        window.speechSynthesis.resume()
        setIsPlaying(true)
        setisResumePlaying(false)
    }
    const stopVoice = () => {
        window.speechSynthesis.cancel()
        setIsPlaying(false)
        setisResumePlaying(false)
    }
   
    return (
        <div style={{ alignItems: 'center' }}>
            {/* <Backdrop open={openBackDrop} >
                <CircularProgress color="inherit" />
            </Backdrop> */}

            {model == null ?
                <Box p={2} m={2} justifyContent='center' flexDirection='column' display='flex' alignItems='center'>
                    <Typography color='secondary'>Model Loading ... </Typography>
                    <div></div>
                    <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
                </Box>
                :
                <>
                    < >
                        <Divider style={{ marginTop: '10px' }} orientation="horizontal" />
                        <Box p={2} m={2} justifyContent='center' alignItems='center'>
                            <Typography style={{ display: 'flex', alignItems: 'center' }} component="h6" variant="h6">Paste your content below and ask questions
                              {
                                    !isPlaying ?
                                        <IconButton title='Read the content loud' style={{ cursor: 'pointer' }} onClick={readLoud}
                                            className={classes.iconButton} >
                                            <FcSpeaker />
                                        </IconButton>
                                        :
                                        <>
                                            {
                                                isResumePlaying ?
                                                    <IconButton title='Resume' style={{ cursor: 'pointer' }} onClick={resumeVoice}
                                                        className={classes.iconButton} >
                                                        <AiFillPlayCircle color='#329060'/>
                                                    </IconButton> : <>
                                                        <IconButton title='Pause' style={{ cursor: 'pointer' }} onClick={pauseVoice}
                                                            className={classes.iconButton} >
                                                            <FaRegPauseCircle   />
                                                        </IconButton>
                                                    </>
                                            }

                                            <IconButton title='Pause' style={{ cursor: 'pointer' }} onClick={stopVoice}
                                                className={classes.iconButton} >
                                                <FaStopCircle color='#b93838' />
                                            </IconButton>
                                        </>
                                }
                            </Typography>


                            <TextareaAutosize fullWidth cols={158} ref={passageRef} aria-label="minimum height"
                                rowsMin={15} placeholder="Paste your content" />

                            {/* <Typography component="h6" variant="h6"></Typography> */}
                            {/* <input ref={questionRef} size="80"></input> */}
                            <br />


                            <Paper component="form" className={classes.root}>
                                <IconButton className={classes.iconButton} aria-label="menu">
                                    <FcQuestions title='Type a Question and press enter' cursor='pointer' fontSize={30} />
                                </IconButton>
                                <InputBase value={questionVal} onChange={loadQuestion}
                                    className={classes.input}
                                    placeholder="Type your question here"
                                    inputProps={{ 'aria-label': '' }}
                                />
                                <IconButton onClick={answerQuestion} className={classes.iconButton} aria-label="search">
                                    <FaSearch />
                                </IconButton>
                                <Divider className={classes.divider} orientation="vertical" />
                                <IconButton color="primary" onClick={handleListen} className={classes.iconButton} aria-label="directions">
                                    <FaMicrophoneAlt />
                                </IconButton>
                            </Paper>

                            {/* <FilledInput
                                 id="standard-adornment-amount"
                                type='text'
                                value={questionVal} onChange={loadQuestion} onKeyPress={answerQuestion}
                                fullWidth
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleListen}
                                            edge="end"
                                        >
                                            <FaMicrophoneAlt />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            /> */}
                            {/* <TextField
                                value={questionVal} onChange={loadQuestion}  onKeyPress={answerQuestion}
                                id="input-with-icon-textfield"
                                label="Ask a Question"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                        >
                                            <FaMicrophoneAlt />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            /> */}
                            {/* <TextField value={questionVal} onChange={loadQuestion} fullWidth onKeyPress={answerQuestion}
                                id="outlined-basic" label="Ask a Question" variant="outlined" /> */}
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
                                        {
                                            isLoading ?
                                                <Box p={2} m={2} justifyContent='center' flexDirection='column' display='flex' alignItems='center'>
                                                    <Typography color='gray'>Model Loading ... </Typography>

                                                    <div></div>
                                                    <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
                                                </Box>
                                                : <></>
                                        }

                                    </List>

                                </CardContent>
                            </Card>

                        </Box>

                    </>

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

import React, { useEffect, useRef, useState } from 'react'
import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Typography } from '@material-ui/core';



const AutoQA = () => {
    const passageRef = useRef(null);
    const questionRef = useRef(null);
    const [answer, setAnswer] = useState();
    const [model, setModel] = useState(null);


    // Load Tensorflow Model
    const loadModel = async () => {
        const loadedModel = await qna.load()
        setModel(loadedModel);
        console.log('Model loaded.')
    }
    const answerQuestion = async (e) => {
        if (e.which === 13 && model !== null) {
            console.log('Question submitted.')
            const passage = passageRef.current.value
            const question = questionRef.current.value

            const answers = await model.findAnswers(question, passage)
            setAnswer(answers);
            console.log(answers)

        }
    }

    useEffect(() => { loadModel() }, [])

    return (
        <div style={{alignItems:'center'}}>
            {model == null ?
                <div>
                     <Typography component="h3" variant="h5">Model Loading ... </Typography>
                                
                    <div></div>
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100} />
                </div>
                :
                <>
                    Passage
                    <textarea ref={passageRef} rows="30" cols="100"></textarea>
                        Ask a Question
                    <input ref={questionRef} onKeyPress={answerQuestion} size="80"></input>
                    <br />
                    Answers
                    {answer ? answer.map((ans, idx) => <div><b>Answer {idx + 1} - </b> {ans.text} ({Math.floor(ans.score * 100) / 100})</div>) : ""}
                </>
            }
        </div>
    )
}

export default AutoQA

import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";

// import { nextFrame } from "@tensorflow/tfjs";
// 2. TODO - Import drawing utility here
import { drawRect } from "./utilities";
// import Button from '@material-ui/core/Button';

import { GiHandOk } from "react-icons/gi";
import { FaHandPointRight, FaHandPointLeft } from "react-icons/fa";
import { ImHappy2, ImSad2 } from "react-icons/im";
import { firebaseApp } from "../../firebase";
import { useErrorHandler } from "react-error-boundary";

function CustomObjectDetectionTF({ userName }) {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const db = firebaseApp.firestore();
    // const [users, setUsers] = useState([])
    const handleErrors = useErrorHandler()
    // Main function
    const runCoco = async () => {

        const net = await tf.loadGraphModel('https://tensorflowobjectdetectionui.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json')


        setInterval(() => {
            detect(net);
        }, 16.7);
    };

    const [guestureName, setGuestureName] = useState("")
    const detect = async (net) => {
        try {


            // Check data is available
            if (
                typeof webcamRef.current !== "undefined" &&
                webcamRef.current !== null &&
                webcamRef.current.video.readyState === 4
            ) {
                // Get Video Properties
                const video = webcamRef.current.video;
                const videoWidth = webcamRef.current.video.videoWidth;
                const videoHeight = webcamRef.current.video.videoHeight;

                // Set video width
                webcamRef.current.video.width = videoWidth;
                webcamRef.current.video.height = videoHeight;

                // Set canvas height and width
                canvasRef.current.width = videoWidth;
                canvasRef.current.height = videoHeight;

                // 4. TODO - Make Detections
                const img = tf.browser.fromPixels(video)
                const resized = tf.image.resizeBilinear(img, [640, 480])
                const casted = resized.cast('int32')
                const expanded = casted.expandDims(0)
                const obj = await net.executeAsync(expanded)


                const boxes = await obj[1].array()
                const classes = await obj[2].array()
                const scores = await obj[4].array()

                const ctx = canvasRef?.current?.getContext("2d");
                // drawSomething(obj, ctx)  
                requestAnimationFrame(() => { drawRect(boxes[0], classes[0], scores[0], 0.9, videoWidth, videoHeight, ctx) });
                setGuestureName(ctx?.gustureNamess);

                tf.dispose(img)
                tf.dispose(resized)
                tf.dispose(casted)
                tf.dispose(expanded)
                tf.dispose(obj)

            }
        }
        catch (e) {
            handleErrors(e)
        }
    };

    useEffect(() => {
        runCoco();
        const captureInterval = setInterval(() => {
            capture();
        }, 20000);
        // const fetchUsers = async () => {

        //     // const userCollections = await db.collection('users').get();
        //     // const asd = await db.collection('users').doc(userName).collection('avatarurls').onSnapshot(snapShot => (
        //     //     console.log(snapShot.docs.map(doc => doc.data()))
        //     // ))

        //     const userCollections = await db.collection('users').doc(userName).collection('avatarurls').get();

        //     setUsers(userCollections.docs.map(doc => {
        //         return doc.data();
        //     }))
        // }
        // fetchUsers()
        // setTimeout(() => {

        //     capture()
        // }, 1000);
        return () => {
            clearInterval(captureInterval);
        }
    }, []);


    const capture = React.useCallback(() => {
        const imageSrc = webcamRef?.current?.getScreenshot();
        db.collection("users").doc(userName).set({
            name: userName,
            avatar: imageSrc
        })
        db.collection('users').doc(userName).collection('avatarurls').add(
            {
                url: imageSrc
            }
        )
        // saveImage(imageSrc)
    }, [webcamRef]);
    // }, [webcamRef, setImgSrc]);




    return (
        <div>
            {/* <button onClick={capture}>Capture photo</button> */} 
            {/* <ul>
                {
                    users.map((usr, i) => {
                        return (
                            <li key={userName + i}>
                                <img width='100' height='100' src={usr.url} />
                                <p>{userName + i}</p>
                            </li>
                        )
                    })
                }
            </ul> */}

            <div style={{ marginTop: '-50px', alignItems: 'flex-start', justifyContent: 'center', display: 'flex' }}>

                <h1> Hey {userName.toUpperCase()}</h1>
                {
                    guestureName === 'Super' ?
                        <h1> Hey {userName} you are saying "{guestureName}"
                            <GiHandOk style={{ fontSize: '50px', marginBottom: '-20px', color: 'lime' }} />
                        </h1>
                        :
                        guestureName === 'ThumbsUp' ?
                            <h1> Hey {userName} you are showing "{guestureName}"
                                <img alt="" height="30px" width="30px" src="./images/thumbs_up.png" />
                            </h1>
                            : guestureName === 'ThumbsDown' ?
                                <h1> Hey {userName} you are showing "{guestureName}"
                                    <img  alt="" height="30px" width="30px" style={{ transform: 'rotate( 180deg )' }} src="./images/thumbs_up.png" />
                                </h1>
                                : guestureName === 'Left' ?
                                    <h1> Hey {userName} you are showing "{guestureName}"
                                        <FaHandPointRight style={{ fontSize: '50px', marginBottom: '-20px', color: 'orange' }} />
                                    </h1>
                                    : guestureName === 'Right' ?
                                        <h1> Hey {userName} you are showing "{guestureName}"
                                            <FaHandPointLeft style={{ fontSize: '50px', marginBottom: '-20px', color: 'yellow' }} />
                                        </h1>
                                        : guestureName === 'happy' ?
                                            <h1> Hey {userName} you look so "{guestureName}"
                                                <ImHappy2 style={{ fontSize: '50px', marginBottom: '-20px', color: 'purple' }} />
                                            </h1>
                                            : guestureName === 'sad' ?
                                                <h1> Hey {userName} you look soo "{guestureName}"
                                                    <ImSad2 style={{ fontSize: '50px', marginBottom: '-20px', color: 'red' }} />
                                                </h1>
                                                : <></>

                }
            </div>
            <div className="App-header">

                <Webcam
                    ref={webcamRef}
                    muted={true}
                    mirrored={false}
                    screenshotFormat="image/jpeg"

                    imageSmoothing={true}

                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 9,
                        width: 640,
                        height: 480,
                        boxShadow: '10px 20px 11px 21px rgb(0 0 0 / 20%), 10px 21px 11px 20px rgb(0 0 0 / 14%), 10px 21px 13px 20px rgb(0 0 0 / 12%)'
                    }}
                />
                <div  >
                    <canvas
                        ref={canvasRef}
                        style={{
                            position: "absolute",
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: 0,
                            right: 0,
                            textAlign: "center",
                            zindex: 8,
                            width: 640,
                            height: 480,
                        }}
                    />
                </div>



            </div>

        </div>
    );
}


export default CustomObjectDetectionTF

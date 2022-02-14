// 1. Install dependencies DONE
// 2. Import dependencies DONE
// 3. Setup webcam and canvas DONE
// 4. Define references to those DONE
// 5. Load posenet DONE
// 6. Detect function DONE
// 7. Drawing utilities from tensorflow DONE
// 8. Draw functions DONE

// Face Mesh - https://github.com/tensorflow/tfjs-models/tree/master/facemesh

import React, { useRef, useEffect } from "react";
import "../../App.css";
// import * as tf from "@tensorflow/tfjs";
// OLD MODEL
//import * as facemesh from "@tensorflow-models/facemesh";

// NEW MODEL
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
import { drawMesh } from "./utilities";
import { useErrorHandler } from "react-error-boundary";
import { Typography, Box } from '@material-ui/core';


function FaceDetection() {
  const webcamRef1 = useRef(null);
  const canvasRef1 = useRef(null);
  const handleErrors = useErrorHandler()
  //  Load posenet
  const runFacemesh = async () => {
    // OLD MODEL
    // const net = await facemesh.load({
    //   inputResolution: { width: 640, height: 480 },
    //   scale: 0.8,
    // });
    // NEW MODEL
    const net = await facemesh.load(facemesh.SupportedPackages.mediapipeFacemesh);
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    try {


      if (
        typeof webcamRef1.current !== "undefined" &&
        webcamRef1.current !== null &&
        webcamRef1.current.video.readyState === 4
      ) {
        // Get Video Properties
        const video1 = webcamRef1.current.video;
        const videoWidth1 = webcamRef1.current.video.videoWidth;
        const videoHeight1 = webcamRef1.current.video.videoHeight;

        // Set video width
        webcamRef1.current.video.width = videoWidth1;
        webcamRef1.current.video.height = videoHeight1;

        // Set canvas width
        canvasRef1.current.width = videoWidth1;
        canvasRef1.current.height = videoHeight1;

        // Make Detections
        // OLD MODEL
        //       const face = await net.estimateFaces(video);
        // NEW MODEL
        const face1 = await net.estimateFaces({ input: video1 });
        //console.log(face);

        // Get canvas context
        const ctx1 = canvasRef1.current.getContext("2d");
        requestAnimationFrame(() => { drawMesh(face1, ctx1) });
      }
    }
    catch (e) {

      handleErrors(e)
      // console.log("FaceDetection:: " + e)
    }
  };

  useEffect(() => { runFacemesh() }, []);

  return (
    <Box className="App" display={'flex'} justifyContent={'center'} flex={1} alignItems={'center'}>
      <header className="App-header">
        <Box display={'flex'} justifyContent={'center'} flex={1} alignItems={'center'} color={'#14a37f'}
          m={5}>

          <Typography variant="h3">Face Detection</Typography>
        </Box>

        <Webcam
          ref={webcamRef1}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 540,
            height: 380,
          }}
        />

        <canvas
          ref={canvasRef1}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 540,
            height: 380,
          }}
        />
      </header>
    </Box>
  );
}

export default FaceDetection;

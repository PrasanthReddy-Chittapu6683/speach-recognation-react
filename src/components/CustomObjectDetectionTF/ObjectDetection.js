import React, { useState } from "react";
import CustomObjectDetectionTF from "./CustomObjectDetectionTF";
import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
import { Typography } from "@material-ui/core";
import { FiCameraOff, FiCamera } from "react-icons/fi";
// import ImageSlider from "./ImageSlider";
import { firebaseApp } from "../../firebase";
import TextField from "@material-ui/core/TextField";
// import CollectedImages from "./CollectedImages";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ObjectDetection.css";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//         overflow: 'hidden',
//         backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//         width: 500,
//         height: 'auto',
//         justifyContent: 'center',
//         borderRadius: '10px',
//         boxShadow: '10px 10px 11px 21px rgb(0 0 0 / 20%), 10px 21px 11px 20px rgb(0 0 0 / 14%), 10px 21px 13px 20px rgb(0 0 0 / 12%)'
//     },

// }));

function ObjectDetection() {
    const db = firebaseApp.firestore();
    // const [autoplay, setAutoplay] = useState(true);
    // const style = {
    //     textAlign: "center",
    //     background: "teal",
    //     padding: "20px 0",
    //     fontSize: "30px"
    // }
    const fadeProperties = {
        duration: 3000,
        canSwipe: false
    };
    const tileData = [
        {
            img: "./images/super.jpg",
            title: " ",
            author: " ",
            cols: 2,
            featured: true
        },
        {
            img: "./images/thumbsup.jpg",
            title: "   ",
            author: " "
        },
        {
            img: "./images/thumbsdown.jpg",
            title: " ",
            author: " "
        },
        {
            img: "./images/left.jpg",
            title: " ",
            author: " "
        },
        {
            img: "./images/right.jpg",
            title: " ",
            author: " "
        },
        {
            img: "./images/happy.jpg",
            title: " ",
            author: " "
        },
        {
            img: "./images/sad.jpg",
            title: " ",
            author: " "
        }
    ];
    // const classes = useStyles();
    const [activateCamera, setActivateCamera] = useState(false);

    const startDetection = () => {
        if (!activateCamera) {
            db.collection("users").doc(userName).set({
                name: userName,
                avatar: ""
            });
        } else {
            setUserName(null);
        }
        setActivateCamera(!activateCamera);
    };

    const [userName, setUserName] = useState("");
    const onChangeUserName = (e) => {
        e.preventDefault();
        if (e.target.value) {
            if (e.target.value.trim()) {
                setUserName(e.target.value.trim());
            } else {
                setUserName(e.target.value.trim());
            }
        } else {
            setUserName("");
        }
    };
    return (
        <div>
            {/* <CollectedImages /> */}
            {activateCamera && (
                <>
                    <Button
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        startIcon={<FiCameraOff />}
                        onClick={startDetection}
                        variant="contained"
                        color="secondary"
                    >
                        OFF
                    </Button>
                    <CustomObjectDetectionTF userName={userName} />
                </>
            )}
            {!activateCamera && (
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            marginBottom: "10px"
                        }}
                    >
                        {/* <TextField id="outlined-search" label="Search field" type="search" variant="outlined" /> */}
                        <TextField
                            onChange={onChangeUserName}
                            id="outlined-helperText"
                            label="Your Name"
                            defaultValue=""
                            helperText="Please enter your name to ON the camera"
                            variant="outlined"
                        />

                        {/* <input type='text' name="username" placeholder="NAME"></input> */}
                        <Button
                            startIcon={<FiCamera />}
                            disabled={!userName}
                            onClick={startDetection}
                            variant="contained"
                            color="secondary"
                        >
                            ON
                        </Button>
                        <Typography color="secondary" style={{}}>
                            {" "}
                            * Show the below gestures after turn on the camera
                        </Typography>
                    </div>
                    {/* <ImageSlider /> */}
                    <div style={{ margin: "10px", padding: "10px" }}>
                        <div className="slide-container">
                            <Slide {...fadeProperties}>
                                <div className="each-fade">
                                    <div>
                                        <img alt="" src={tileData[0].img} />
                                    </div>
                                    {/* <p>First Slide</p> */}
                                </div>
                                <div className="each-fade">
                                    {/* <p>Second Slide</p> */}
                                    <div>
                                        <img alt="" src={tileData[1].img} />
                                    </div>
                                </div>
                                <div className="each-fade">
                                    <div>
                                        <img alt="" src={tileData[2].img} />
                                    </div>
                                    {/* <p>Third Slide</p> */}
                                </div>
                            </Slide>
                        </div>

                        {/* <GridList cellHeight={200} className={classes.gridList} cols={3}>
                            {tileData.map((tile) => (
                                <GridListTile key={tile.img} cols={tile.cols || 1}>
                                    <img className='gridImages' src={tile.img} alt={tile.title} />
                                </GridListTile>
                            ))}
                        </GridList> */}

                        {/* {
                            usersList.length > 0 &&
                            <ul>
                                {usersList.map((usr, i) => {
                                    return (
                                        <li key={i}>
                                            <img width='100' height='100' src={usr} />
                                            
                                        </li>
                                    )
                                })
                                }
                            </ul>

                             }*/}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ObjectDetection;

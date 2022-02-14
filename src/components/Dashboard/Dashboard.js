import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { SiTeamspeak, SiTensorflow } from 'react-icons/si';
// import { blue, green } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
import { GiBodyBalance, GiCyborgFace } from 'react-icons/gi';
import {
    NavLink
} from "react-router-dom";
import { RiBodyScanFill } from 'react-icons/ri';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(5),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(33, 43, 54)',
        transition: 'transform .55s ease',
        // transition: 'boxShadow 300ms cubic- bezier(0.4, 0, 0.2, 1) 0ms',
        backgroundImage: 'none',
        overflow: 'hidden',
        boxShadow: 'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px',
        borderRadius: '16px',
        position: 'relative',
        zIndex: '0',

        paddingTop: '0px',
        "&:hover": {
            transform: 'scale(1.09) ',
            opacity: '1'
        }
    },

    avatar: {
        width: '144px',
        height: '62px',
        zIndex: '10',
        bottom: '-26px',
        position: 'absolute',
    },
    commingSoonBorder: {
        color: 'black', zIndex: '11', position: 'absolute',
        marginTop: '10px', marginLeft: 270
    },
    commingSoon: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        zIndex: 11,
        top: theme.spacing(3)
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        zIndex: 11,
        color: '#fff',
        backgroundColor: '#14a37f',
        top: theme.spacing(3)
    },
    paperHeader: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        paddingTop: 'calc(56.25 %)'
    },
    paperBanner: {
        top: '0px',
        zIndex: '8',
        // width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        // left: '0px',
        // filter: ' blur(8px)'
    },
    paperTop: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        paddingTop: 'calc(56.25%)'
    },
    paperTitle: {
        margin: '48px 0px 0px',
        fontFamily: '"Be Vietnam", sans-serif',
        fontWeight: '600',
        fontSize: '1rem',
        lineHeight: '1.5',
        textAlign: 'center',
        color: '#3f4b58'
    },
    paperDescription: {
        margin: '0px',
        fontFamily: '"Be Vietnam", sans-serif',
        fontWeight: '500',
        fontSize: '0.875rem',
        lineHeight: ' 1.57143',
        textAlign: 'center',
        color: 'rgb(99, 115, 129)',
    }
}));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                {/* <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid> */}
                <Grid item md={4} xs={12} sm={6}>
                    <Paper className={classes.paper} >
                        <NavLink to="/customobjectdetection">
                            <div className={classes.paperTop}>
                                {/* <span style={classes.avatar}>
                            </span> */}
                                <span class="css-1t1wgur" style={{
                                    width: '144px', height: '62px', backgroundColor: '#ffffff', zIndex: '10',
                                    bottom: '-26px', position: 'absolute', WebkitMask: 'url("./images/shape-avatar.svg") center center / contain no-repeat'
                                }}></span>

                                <Avatar className={classes.large}>
                                    <SiTensorflow />
                                </Avatar>
                                <img alt="cover" src="./images/Tensorflow-Object-Detection.jpg" className={classes.paperBanner} />
                            </div>
                            <Typography variant="h6" className={classes.paperTitle} gutterBottom>
                                Custom Object Detection
                            </Typography>
                            <Typography variant="p" className={classes.paperDescription} gutterBottom>
                                Detection and tracking of objects in video in a single pipeline
                            </Typography>
                        </NavLink>
                    </Paper>
                </Grid>

                <Grid item md={4} xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <NavLink to="/AutoQA">
                            <div className={classes.paperTop}>
                                {/* <span style={classes.avatar}>
                            </span> */}
                                <span class="css-1t1wgur" style={{
                                    width: '144px', height: '62px', backgroundColor: '#ffffff', zIndex: '10',
                                    bottom: '-26px', position: 'absolute', WebkitMask: 'url("./images/shape-avatar.svg") center center / contain no-repeat'
                                }}></span>

                                <Avatar className={classes.large}>
                                    <SiTeamspeak />
                                </Avatar>
                                <img alt="cover" src="./images/nlp.jpg" className={classes.paperBanner} />
                            </div>
                            <Typography variant="h6" className={classes.paperTitle} gutterBottom>
                                Speech Recognition
                            </Typography>
                            <Typography variant="p" className={classes.paperDescription} gutterBottom>
                                Answer questions based on the content of a given passage of text using BERT.
                            </Typography>
                        </NavLink>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <NavLink to="/facedetection">
                            <div className={classes.paperTop}>
                                {/* <span style={classes.avatar}>
                            </span> */}
                                <span class="css-1t1wgur" style={{
                                    width: '144px', height: '62px', backgroundColor: '#ffffff', zIndex: '10',
                                    bottom: '-26px', position: 'absolute', WebkitMask: 'url("./images/shape-avatar.svg") center center / contain no-repeat'
                                }}></span>

                                <Avatar className={classes.large}>
                                    <GiCyborgFace />
                                </Avatar>
                                <img alt="cover" src="./images/face_mesh_ar_effects.gif" className={classes.paperBanner} />
                            </div>
                            <Typography variant="h6" className={classes.paperTitle} gutterBottom>
                                Face Mesh
                            </Typography>
                            <Typography variant="p" className={classes.paperDescription} gutterBottom>
                                Face Mesh is a face geometry solution that estimates 468 3D face landmarks in real-time even on mobile devices. It employs machine learning (ML) to infer the 3D surface geometry,
                                requiring only a single camera input without the need for a dedicated depth sensor
                            </Typography>
                        </NavLink>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12} sm={6}>
                    <Paper className={classes.paper} >
                        <NavLink to="/customobjectdetection">
                            <div className={classes.paperTop}>
                                <span class="css-1t1wgur" style={{
                                    width: '144px', height: '62px', backgroundColor: '#ffffff', zIndex: '10',
                                    bottom: '-26px', position: 'absolute', WebkitMask: 'url("./images/shape-avatar.svg") center center / contain no-repeat'
                                }}></span>

                                <Avatar className={classes.large}>
                                    <RiBodyScanFill />
                                </Avatar>
                                <img alt="cover" src="./images/pose_tracking.gif" className={classes.paperBanner} />
                            </div>
                            <Typography variant="h6" className={classes.paperTitle} gutterBottom>
                                Human Pose Detection and Tracking
                            </Typography>

                            <Typography variant="p" className={classes.paperDescription} gutterBottom>
                                High-fidelity human body pose tracking, inferring up to 33 3D full-body landmarks from RGB video frames
                            </Typography>
                        </NavLink>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12} sm={6}>
                    <Paper className={classes.paper} >
                        <a  target='_blank' href="https://voice-assist-faq-ai-app.web.app/">
                            <div className={classes.paperTop}>
                                {/* <span style={classes.avatar}>
                            </span> */}
                                <span class="css-1t1wgur" style={{
                                    width: '144px', height: '62px', backgroundColor: '#ffffff', zIndex: '10',
                                    bottom: '-26px', position: 'absolute', WebkitMask: 'url("./images/alanaiani.svg") center center / contain no-repeat'
                                }}></span>

                                {/* <Avatar className={classes.large}>
                                    <RiBodyScanFill />
                                </Avatar> */}
                                <Avatar className={classes.large} alt="Remy Sharp" src="./images/alanLogo.jpg" />
                                {/* <span class="css-1t1wgur" style={{
                                    width: '144px', height: '62px', backgroundColor: '#ffffff', zIndex: '10',
                                    bottom: '-26px', position: 'absolute', WebkitMask: 'url("./images/alanaiani.svg") center center / contain no-repeat'
                                }}></span> */}
                                <img alt="cover" src="./images/alanaiani.svg" className={classes.paperBanner} />
                            </div>
                            {/* <div className={classes.commingSoonBorder} >
                                <img alt="cover" src="./images/coming-soon.png" className={classes.commingSoon} />
                            </div> */}
                            <Typography variant="h6" className={classes.paperTitle} gutterBottom>
                                Conversational Voice AI for Discory, Engagement & Customer Support
                            </Typography>
                            <Typography variant="p" className={classes.paperDescription} gutterBottom>
                                Alan Platform provides an AI backend for your application to create conversational experiences.
                                Recognizes user context.
                                Works with any Domain.
                                Easily innovate and iterate.
                            </Typography>

                            {/* <p class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter css-1j1nf4i-MuiTypography-root">Front End Developer</p> */}
                        </a>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12} sm={6}>
                    <Paper className={classes.paper} >
                        {/* <NavLink to="/customobjectdetection"> */}
                        <div className={classes.paperTop}>


                            <span class="css-1t1wgur" style={{
                                width: '144px', height: '62px', backgroundColor: '#ffffff', zIndex: '10',
                                bottom: '-26px', position: 'absolute', WebkitMask: 'url("./images/shape-avatar.svg") center center / contain no-repeat'
                            }}></span>
                            <Avatar className={classes.large}>
                                <GiBodyBalance />
                            </Avatar>
                            <img alt="cover" src="./images/holistic_sports.gif" className={classes.paperBanner} />

                        </div>
                        <div className={classes.commingSoonBorder} >
                            <img alt="cover" src="./images/coming-soon.png" className={classes.commingSoon} />
                        </div>
                        <Typography variant="h6" className={classes.paperTitle} gutterBottom>
                            Holistic Tracking
                        </Typography>
                        <Typography variant="p" className={classes.paperDescription} gutterBottom>
                            Live perception of simultaneous human pose, face landmarks, and hand tracking in real-time on mobile devices can enable various modern life applications: fitness and sport analysis, gesture control and sign language recognition, augmented reality try-on and effects
                        </Typography>
                        {/* </NavLink> */}
                    </Paper>
                </Grid>
                {/* <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid> */}
            </Grid>
        </div>
    );
}

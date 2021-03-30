import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
// import Menu from '@material-ui/icons/Menu';
import { MdChevronLeft, MdMenu, MdNotifications, MdQuestionAnswer } from 'react-icons/md';
import { mainListItems, secondaryListItems } from '../menus/Menu';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { FaReact } from 'react-icons/fa';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import TermsAndCondition from '../speechRecognition/termsAndCondition';
import AutoQA from '../AutoQA/AutoQA';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

import FingerHandpose from "../fingerhandpose/FingerHandpose"; 
import FaceDetection from "../FaceDetection/FaceDetection";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 'auto',
    },
}));

const Layout = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MdMenu />
                    </IconButton>

                    <Box p={2} display='flex' alignItems='center' >

                        <FaReact style={{ fontSize: '35px' }} />
                        <RiArrowLeftRightFill style={{ fontSize: '15px' }} />
                        <GiArtificialIntelligence style={{ fontSize: '35px' }} />

                    </Box>

                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>

                        Power of React with AI
                    </Typography>

                    <IconButton color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <MdNotifications />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }} open={open} >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <MdChevronLeft />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={fixedHeightPaper} >
                                <Switch>
                                    <Route path="/speechrecognition">
                                        <TermsAndCondition />
                                    </Route>
                                    <Route path="/handfingerpose">
                                        <Box p={2} m={2} justifyContent='center' alignItems='center'>
                                            <Box p={2} display='flex' flex='1'  >
                                                <FingerHandpose />
                                            </Box>
                                        </Box>
                                    </Route>
                                    <Route path="/facedetection">
                                        <Box p={2} m={2} justifyContent='center' alignItems='center'>
                                            <Box p={2} display='flex' flex='1'  >
                                                <FaceDetection />
                                            </Box>
                                        </Box>
                                    </Route>
                                    <Route path="/">
                                        <Typography component="h1" variant="h4" style={{display:'flex', justifyContent:'center' , alignContent:'center'}}><MdQuestionAnswer/> Have content and ask Quetions : </Typography>
                                        {/* <TermsAndCondition /> */}
                                        <AutoQA />
                                    </Route>
                                </Switch>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    )
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" target='_blank' href="https://github.com/PrasanthReddy-Chittapu6683">
                Prasanth CV  <AiFillGithub fontSize={15} style={{ color: '#3f51b5' }} />
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default Layout





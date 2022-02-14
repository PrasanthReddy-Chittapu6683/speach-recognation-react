import React from 'react'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
// import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import PeopleIcon from '@material-ui/icons/People';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import LayersIcon from '@material-ui/icons/Layers';
// import AssignmentIcon from '@material-ui/icons/Assignment';

// import { MdDashboard, MdShoppingCart, MdPeople, MdLayers, MdAssessment } from 'react-icons/md'

import { GiMetalHand } from 'react-icons/gi'
import { RiUserVoiceFill } from 'react-icons/ri'

import { SiTeamspeak, SiTensorflow } from 'react-icons/si'
// import { RiBarChartGroupedLine } from 'react-icons/ri'
import { GiCyborgFace } from "react-icons/gi";


// import FingerHandpose from "../fingerhandpose/FingerHandpose";
// import FaceDetection from "../FaceDetection/FaceDetection";

import {
    NavLink
} from "react-router-dom";
// import { FiHome } from 'react-icons/fi';
import { AiFillHome } from 'react-icons/ai';

export const mainListItems = (
    <div>
        <NavLink to="/" >
            <ListItem button title="Speech Recognition" >
                <ListItemIcon >
                    <AiFillHome style={{ color: '#14a37f' }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </NavLink>
        <NavLink to="/customobjectdetection">
            <ListItem button title="Custom Object Detection" >
                <ListItemIcon  >
                    <SiTensorflow style={{ color: '#14a37f' }}> </SiTensorflow>
                    {/* // <ImUserCheck /> */}
                </ListItemIcon>
                <ListItemText primary="Custom Object Detection" />
            </ListItem>
        </NavLink>
        <NavLink to="/facedetection">
            <ListItem button title="Face Detection" >
                <ListItemIcon  >
                    <GiCyborgFace style={{ color: '#14a37f' }}> </GiCyborgFace>
                    {/* // <ImUserCheck /> */}
                </ListItemIcon>
                <ListItemText primary="Face Detection" />
            </ListItem>
        </NavLink>
        <NavLink to="/AutoQA">
            <ListItem button title="Speech Recognition"  >
                <ListItemIcon >
                    <SiTeamspeak style={{ color: '#14a37f' }} />
                </ListItemIcon>
                <ListItemText primary="Speech Recognition" />
            </ListItem>
        </NavLink>
        <NavLink to="/handfingerpose">
            <ListItem button title="Hand Detection" >
                <ListItemIcon  >
                    <GiMetalHand style={{ color: '#14a37f' }} />
                </ListItemIcon>
                <ListItemText primary="Hand Detection" />
            </ListItem>
        </NavLink>
        <a target='_blank' href="https://voice-assist-faq-ai-app.web.app/">
            <ListItem button title="Voice AI" >
                <ListItemIcon>
                    <RiUserVoiceFill style={{ color: '#14a37f' }} />
                </ListItemIcon>
                <ListItemText primary="Voice AI" />
            </ListItem>
        </a>

        {/* <NavLink to="/speechrecognition">
            <ListItem button>
                <ListItemIcon>
                    <MdPeople style={{ color: '#14a37f' }}/>
                </ListItemIcon>
                <ListItemText primary="Content Reading" />
            </ListItem>
        </NavLink> */}
        {/* <ListItem button>
                <ListItemIcon>
                    <RiBarChartGroupedLine />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <MdLayers />
                </ListItemIcon>
                <ListItemText primary="Integrations" />
            </ListItem> */}
    </div>
);

export const secondaryListItems = (
    <div>
        {/* <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <MdAssessment />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <MdAssessment />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <MdAssessment />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem> */}
    </div>
);

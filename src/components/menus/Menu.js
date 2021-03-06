import React from 'react'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import PeopleIcon from '@material-ui/icons/People';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import LayersIcon from '@material-ui/icons/Layers';
// import AssignmentIcon from '@material-ui/icons/Assignment';

import { MdDashboard, MdShoppingCart, MdPeople, MdLayers, MdAssessment } from 'react-icons/md'

import { GiMetalHand } from 'react-icons/gi'
import { SiTeamspeak } from 'react-icons/si'
import { RiBarChartGroupedLine } from 'react-icons/ri'
import { GiCyborgFace } from "react-icons/gi";


import FingerHandpose from "../fingerhandpose/FingerHandpose";
import FaceDetection from "../FaceDetection/FaceDetection";

import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

export const mainListItems = (
    <div>
        <NavLink to="/" >
            <ListItem button title="Speech Recognition"s >
                <ListItemIcon >
                    <SiTeamspeak  style={{ color: '#3f51b5' }} />
                </ListItemIcon>
                <ListItemText primary="Speech Recognition" />
            </ListItem>
        </NavLink>
        <NavLink to="/handfingerpose">
            <ListItem button title="Hand Detection" >
                <ListItemIcon  >
                    <GiMetalHand  style={{ color: '#3f51b5' }} />
                </ListItemIcon>
                <ListItemText primary="Hand Detection" />
            </ListItem>
        </NavLink>
        <NavLink to="/facedetection">
            <ListItem button   title="Face Detection" >
                <ListItemIcon  >
                <GiCyborgFace   style={{ color: '#3f51b5' }}> </GiCyborgFace>
                    {/* // <ImUserCheck /> */}
                </ListItemIcon>
                <ListItemText primary="Face Detection" />
            </ListItem>
        </NavLink>
        {/* <NavLink to="/speechrecognition">
            <ListItem button>
                <ListItemIcon>
                    <MdPeople style={{ color: '#3f51b5' }}/>
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

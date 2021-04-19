
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../../assets/logo/seagate-logo2.jpg'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from '../pages/Main';
import Home from '../pages/Home';
import Flow from '../pages/Flow';
import FlowChengai from '../pages/FlowChengai';
import FlowRO from '../pages/FlowRO';
import FlowROSkybolt from '../pages/FlowROSkybolt';
import Footer from './Footer';
import { Button } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('lg')]: {
            width: drawerWidth,
            flexShrink: 3,

        },
    },
    appBar: {
        backgroundColor: '#212121',
        [theme.breakpoints.up('lg')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            backgroundColor: '#212121'
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(0),
    },
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left">
                <a href="https://www.seagate.com/as/en/" style={{ height: '60px' }}>
                    <img src={logo} alt="www.google.com" style={{ height: '65px' }} />
                </a>
                <Divider />
                <Divider />
                <List>
                    <ListItemText>
                        <strong>Report</strong>
                    </ListItemText>
                    <ListItem button component="a" href="/flow">
                        <a>Create Build Flow</a>
                    </ListItem>
                    <ListItem button component="a" href="/chengai">
                        <a>Create Build Flow Chengai</a>
                    </ListItem>
                    <ListItem button component="a" href="/ro">
                        <a>Create Build Flow RO</a>
                    </ListItem>
                    <ListItem button component="a" href="/skybolt">
                        <a>Create Build Flow RO Skybolt</a>
                    </ListItem>
                </List>

            </Drawer>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                    
                        <Button href="/home">
                            <Typography type='button' href="/home" variant="h6" style={{color: 'white'}}>
                                FTD Automated Buildflow
                            </Typography>
                        </Button>
                    

                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">

                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden mdDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/home' exact component={Home}></Route>
                    <Route path='/flow' exact component={Flow}></Route>
                    <Route path='/chengai' exact component={FlowChengai}></Route>
                    <Route path='/ro' exact component={FlowRO}></Route>
                    <Route path='/skybolt' exact component={FlowROSkybolt}></Route>
                </Switch>

                <Footer />
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};

export default ResponsiveDrawer;



// import React from 'react'
// import {  Nav, Navbar } from 'react-bootstrap'

// import './Navbars.css'

// export default function Navbars() {
//     return (
// <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//     <Navbar.Brand href="/home" style={{ fontSize: 'auto' }}><strong>FTD Automated Buildflow</strong></Navbar.Brand>
//     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//     <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="mr-auto">
//             <Nav.Link href="/home" style={{ fontSize: '20px' }}>Home</Nav.Link>
//             <Nav.Link href="/" style={{ fontSize: '20px' }}>Main</Nav.Link>
//         </Nav>
//         <Nav>
//             <Nav.Link href="#deets">More deets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//                 Dank memes
//             </Nav.Link>
//         </Nav>
//     </Navbar.Collapse>
// </Navbar>

//     )
// }

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../../assets/logo/seagate-logo2.jpg'




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));


export default function Tabbar() {

    const classes = useStyles();

    return (
        <div >

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
    )
}

import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {
    
    var sideDrawerClass = [classes.SideDrawer, classes.Close].join(' ');
    if (props.open)
    {
        sideDrawerClass = [classes.SideDrawer, classes.Open].join(' ');
    }    

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={sideDrawerClass}>
                <div className={classes.Logo}><Logo /></div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
)};

export default sideDrawer;
import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../../../components/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle drawerToggleClicked={props.drawerToggleClicked} />
        <div className={classes.Logo}><Logo /></div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
class Layout extends Component {    
    state = {
        showSideDrawer : false
    };
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer : false});
    };

    drawerToggleClickHandler = () => {
        var prevState = this.state.showSideDrawer;
        this.setState({showSideDrawer : !prevState});
    };

    render() {
        return (
            <Auxiliary>
                <Toolbar drawerToggleClicked={this.drawerToggleClickHandler}  />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )    
    } 
    
}

export default Layout;

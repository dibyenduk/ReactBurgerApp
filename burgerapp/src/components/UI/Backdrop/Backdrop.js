import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => (
    <div 
        className={classes.Backdrop} 
        style={{visibility:props.show ? 'visible' : 'hidden'}}
        onClick={props.clicked}>        
    </div>
);

export default backdrop;
import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: "Salad", type : "salad"},
    {label: "Bacon", type : "bacon"},
    {label: "Cheese", type : "cheese"},
    {label: "Meat", type: "meat"}
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price : <strong>{props.Price.toFixed(2)}</strong></p> 
            { controls.map(ctrl => (
                <BuildControl Label={ctrl.label} key={ctrl.label} 
                    added = {() => props.IngredientsAdded(ctrl.type)}
                    removed = {() => props.IngredientsRemoved(ctrl.type)} />
            ))}
            <button 
            className={classes.OrderButton} 
            disabled={!props.Purchasable}
            onClick={props.Ordered}>ORDER NOW></button>
        </div>
    );
};

export default buildControls;
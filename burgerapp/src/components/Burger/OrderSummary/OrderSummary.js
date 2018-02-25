import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../../components/UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map((igKey) => ( 
            <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}:{props.ingredients[igKey]}</span></li>
        ));
    return (
        <Aux>
            <h3>Your Order:</h3>
            <p>A delicious burger with your ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout ?</p>
            <Button btnType="Danger" Clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" Clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )};

export default orderSummary;
import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
//import axios from '../../axios-order';

const INGREDIENT_PRICES = {
        salad : 0.5,
        bacon : 0.6,
        cheese : 0.1,
        meat : 0.8    
    };

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 4,
        purchasable: false,
        purchasing: false
        }; 

    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
                .map( igKey => {
                    return ingredients[igKey];
                } )
                .reduce( ( sum, el ) => {
                    return sum + el;
                }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    purchaseHandler = () =>
    {
        this.setState({purchasing: true});
    }

    cancelPurchaseHandler = () =>
    {
        this.setState({purchasing: false});
    }

    continuePurchaseHandler = () =>
    {
        // Enable authorization in firebase to post the data.
        // const order = {
        //     ingredients : this.state.ingredients,
        //     customer : 'Dibyendu Kankalia',
        //     address : 'TestStreet',
        //     country : 'USA',
        //     price : this.state.totalPrice

        // };
        
        // axios.post('orders.json', order)
        //     .then(response => console.log(response))
        //     .catch(error => console.log(error));          
        this.setState({purchasing: false});   
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];        
        const updatedCount = oldCount + 1;        
        const updatedIngredients = {
            ...this.state.ingredients
        };        
        updatedIngredients[type] = updatedCount;        
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState({
            totalPrice : newPrice,
            ingredients : updatedIngredients
        }); 
        this.updatePurchaseState(updatedIngredients);       
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];  
        if (oldCount <= 0)
            return;
        const updatedCount = oldCount - 1;        
        const updatedIngredients = {
            ...this.state.ingredients
        };        
        updatedIngredients[type] = updatedCount;        
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICES[type];
        this.setState({
            totalPrice : newPrice,
            ingredients : updatedIngredients
        }); 
        this.updatePurchaseState(updatedIngredients);
    }; 

    render() {
        return (      
        <Auxiliary>  
            <Backdrop show={this.state.purchasing} clicked={this.cancelPurchaseHandler} />          
            <Modal show={this.state.purchasing} modalClosed={this.cancelPurchaseHandler} >
                <OrderSummary 
                    ingredients = {this.state.ingredients}
                    purchaseCancelled = {this.cancelPurchaseHandler}
                    purchaseContinued = {this.continuePurchaseHandler}
                    price = {this.state.totalPrice} />
            </Modal>
            <Burger ingredients = {this.state.ingredients} />            
            <BuildControls 
                IngredientsAdded = {this.addIngredientHandler}
                IngredientsRemoved = {this.removeIngredientHandler} 
                Price = {this.state.totalPrice}
                Purchasable = {this.state.purchasable}
                Ordered = {this.purchaseHandler} />
        </Auxiliary>
        );
    }
}

export default BurgerBuilder;
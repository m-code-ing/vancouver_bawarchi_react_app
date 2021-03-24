import React from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'

import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';

export default function Cart(props) {

    const cartOrder = props.cartOrder;
    let itemQty;
    let itemPrice;
    let cartPrice = 0;
    let itemName;

    let orderSummaryClasses = [classes.Cart_container];
    let itemSum = 0;
    
    const orderItems = Object.keys(props.cartOrder).map((item, index) => {
        if (cartOrder[item] > 0) {
            itemSum = itemSum + cartOrder[item];
            switch (item) {
                case 'vb':
                    itemQty = cartOrder[item];
                    itemPrice = 13;
                    cartPrice = cartPrice + (itemPrice * itemQty);
                    return <CartItem
                        item={item}
                        itemQty={itemQty}
                        itemPrice={itemPrice * itemQty}
                        removeItem={(cartItem) => props.removeItem(cartItem)}
                        addItem={(cartItem) => props.addItem(cartItem)}
                        cancelItem={(item) => props.cancelItem(item)}></CartItem>
                case 'cb':
                    itemQty = cartOrder[item];
                    itemPrice = 15;
                    cartPrice = cartPrice + (itemPrice * itemQty);
                    return <CartItem
                        item={item}
                        itemQty={itemQty}
                        itemPrice={itemPrice * itemQty}
                        removeItem={(cartItem) => props.removeItem(cartItem)}
                        addItem={(cartItem) => props.addItem(cartItem)}
                        cancelItem={(item) => props.cancelItem(item)}></CartItem>
                case 'mb':
                    itemQty = cartOrder[item];
                    itemPrice = 17;
                    cartPrice = cartPrice + (itemPrice * itemQty);
                    return <CartItem
                        item={item}
                        itemQty={itemQty}
                        itemPrice={itemPrice * itemQty}
                        removeItem={(cartItem) => props.removeItem(cartItem)}
                        addItem={(cartItem) => props.addItem(cartItem)}
                        cancelItem={(item) => props.cancelItem(item)}></CartItem>
                default:
                    break;
            }
        }
    });

    if(props.orderSummaryState || itemSum <1){
        orderSummaryClasses.push(classes.Hide)
    }

    return (
        <Aux>
            <div className={orderSummaryClasses.join(' ')}>
                <h3 className={classes.Cart_title}>Order Summary: </h3>
                <p>Total Price : $ {cartPrice}</p>
                <div>
                    {orderItems}
                </div>
            </div>
        </Aux>
    )
}

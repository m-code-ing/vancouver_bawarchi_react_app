import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';


import classes from './CartQty.module.css';

export default function Cart(props) {
    let cartOrder = props.cartOrder;    
    let totalItems = 0;
    
    for (const key in cartOrder) {
        totalItems = totalItems + cartOrder[key];
    }
    let cartClasses = [classes.Center, classes.Cart];
    let cartQtyClasses = [classes.Center, classes.Cart_qty]

    return (
        <div className={classes.Cart_container}>
            <p className={cartQtyClasses.join(' ')}>{totalItems}</p>
        </div>
    )
}

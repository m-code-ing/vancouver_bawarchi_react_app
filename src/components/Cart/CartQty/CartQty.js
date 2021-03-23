import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';


import classes from './CartQty.module.css';

export default function Cart(props) {
    let cartQty = props.cartQty;
    let totalItems = 0;
    
    for (const key in cartQty) {
        totalItems = totalItems + cartQty[key];
    }
    let cartClasses = [classes.Center, classes.Cart];
    let cartQtyClasses = [classes.Center, classes.Cart_qty]

    return (
        <div className={classes.Cart_container}>
            <p className={cartQtyClasses.join(' ')}>{totalItems}</p>
        </div>
    )
}

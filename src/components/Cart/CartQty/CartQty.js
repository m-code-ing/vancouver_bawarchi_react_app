import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';


import classes from './CartQty.module.css';

export default function Cart(props) {
    let cartQty = props.cartQty;
    let totalItems = 0;
    
    for (const key in cartQty) {
        totalItems = totalItems + cartQty[key];
    }
    
    let showCartClasses = [classes.Cart_container];

    if (totalItems < 1){ showCartClasses.push(classes.Hide) };

    let cartQtyClasses = [classes.Center, classes.Cart_qty];

    return (
        <div className={showCartClasses.join(' ')} onClick={props.toggleOrderSummary}>
            <p className={cartQtyClasses.join(' ')}>{totalItems}</p>
        </div>
    )
}

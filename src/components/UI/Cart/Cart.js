import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';


import classes from './Cart.module.css';

export default function Cart(props) {

    console.log('props.cartOrder : ', props.cartOrder);

    let cartClasses = [classes.Center, classes.Cart];
    let cartQtyClasses = [classes.Center, classes.Cart_qty]

    return (
        <div className={classes.Cart_container}>
            <p className={cartQtyClasses.join(' ')}>{null}</p>
        </div>
    )
}

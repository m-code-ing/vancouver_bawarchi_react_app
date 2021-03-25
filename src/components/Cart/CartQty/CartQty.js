import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa';

import { OrderContext } from '../../../context/order_context'

import classes from './CartQty.module.css';

export default function Cart(props) {
    const orderList = useContext(OrderContext).order;
    let cartQty = props.cartQty;
    let totalItems = 0;
    
    for (const key in orderList) {
        totalItems = totalItems + orderList[key].qty;
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

import React from 'react'
import classes from './AddRemoveItem.module.css'

export default function AddRemoveItem(props) {
    let qty = props.qty;
    return (
        <div>
            <div className={classes.order_qty_div}>
                <button className={classes.add_to_btn} onClick={() => props.removeItem(props.itemName)}>-</button>
                <p className={classes.Order_qty}>{qty}</p>
                <button className={classes.add_to_btn} onClick={() => props.addItem(props.itemName)}>+</button>
            </div>
        </div>
    )
}

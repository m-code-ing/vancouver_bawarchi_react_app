import classes from './CartItem.module.css'
import React from 'react'
import AddRemoveItem from '../../UI/AddRemoveItem/AddRemoveItem'

export default function CartItem(props) {
    let itemQty = props.itemQty;
    return (
        <div className={classes.Item_container}>
            <div className={classes.Item_name_price_div}>
                <p>{props.itemName}</p>
                <p>${props.itemPrice}</p>
            </div>
            <div className={classes.Item_qty_div}>
                <button className={classes.Remove_btn}>Remove</button>
                <div>
                    <p>Quantity: </p>
                    <AddRemoveItem qty={itemQty}></AddRemoveItem>
                </div>
            </div>
        </div>
    )
}

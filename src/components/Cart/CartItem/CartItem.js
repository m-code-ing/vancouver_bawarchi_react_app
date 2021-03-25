import React, { useContext } from 'react'
import AddRemoveItem from '../../UI/AddRemoveItem/AddRemoveItem'
import classes from './CartItem.module.css'

import { OrderContext } from '../../../context/order_context'

export default function CartItem(props) {
    let qty = props.itemQty;

    const handleAddItem = useContext(OrderContext).addItem;
    const handleRemoveItem = useContext(OrderContext).removeItem;
    const handleCancelItem = useContext(OrderContext).cancelItem;

    const addItem = (item) => {
        handleAddItem((item));
    }
    const removeItem = (item) => {
        handleRemoveItem((item));
    }

    const cancelItem = (item) => {
        handleCancelItem(item)
    }
    
    let itemName = '';
    switch (props.item) {
        case 'vb':
            itemName = "Veg Biryani";
            break;
        case 'cb':
            itemName = "Chicken Biryani";
            break;
        case 'mb':
            itemName = "Mutton Biryani";
            break;

        default:
            break;
    }

    return (
        <div className={classes.Item_container}>
            <div className={classes.Item_name_price_div}>
                <p>{itemName}</p>
                <p>${props.itemPrice}</p>
            </div>
            <div className={classes.Item_qty_div}>
                <button 
                    className={classes.Remove_btn} 
                    onClick={() => cancelItem(props.item)}>Remove</button>
                <div className={classes.AddRemoveItem}>
                    <p>Quantity: </p>
                    <AddRemoveItem
                        itemName={props.item_name}
                        qty={qty}
                        addItem={() => addItem(props.item)}
                        removeItem={() => removeItem(props.item)}
                    ></AddRemoveItem>
                </div>
            </div>
        </div>
    )
}

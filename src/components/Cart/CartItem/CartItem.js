import classes from './CartItem.module.css'
import React from 'react'
import AddRemoveItem from '../../UI/AddRemoveItem/AddRemoveItem'

export default function CartItem(props) {
    let qty = props.itemQty;

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

    const removeItem = (item) => {
        console.log(item);
    }

    return (
        <div className={classes.Item_container}>
            <div className={classes.Item_name_price_div}>
                <p>{itemName}</p>
                <p>${props.itemPrice}</p>
            </div>
            <div className={classes.Item_qty_div}>
                <button className={classes.Remove_btn}>Remove</button>
                <div>
                    <p>Quantity: </p>
                    <AddRemoveItem
                        itemName={props.item_name}
                        qty={qty}
                        addItem={() => props.addItem(props.item)}
                        removeItem={() => props.removeItem(props.item)}
                        // removeItem={() => removeItem(props.item)}
                    ></AddRemoveItem>
                </div>
            </div>
        </div>
    )
}

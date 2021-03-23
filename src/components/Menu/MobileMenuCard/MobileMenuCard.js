import React, { useState, useEffect } from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary'

import classes from './MobileMenuCard.module.css';

// importing images
import imgVegBiryani from '../../../resources/images/veg_biryani.jpg';
import AddRemoveItem from '../../UI/AddRemoveItem/AddRemoveItem';

export default function MenuCard(props) {
    let itemName = '';
    switch (props.item_name) {
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

    const [order, setOrder] = useState({ item: props.item_name, qty: 0 });

    // const removeItem = (item) => {
    //     console.log("i was clicked");
    //     console.log(item);
    // }
    return (
        <Aux>
            <div className={classes.menu_card}>
                <div className={classes.menu_card_left}>
                    <img className={classes.menu_card_left_img} src={imgVegBiryani} alt="" />
                </div>
                <div className={classes.menu_card_right}>
                    <h2 className={classes.menu_item_title}>{itemName} <span>$(Item Price)</span></h2>
                    <p className={classes.menu_item_description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Doloribus perferendis nostrum hic quae dolore natus odio assumenda repellendus qui ex?</p>
                    <div className={classes.menu_item_order_div}>
                        <div className={classes.order_qty_div}>
                            {/* <button className={classes.add_to_btn} onClick={() => props.removeItem(props.item_name)}>-</button>
                            <p>{props.qty}</p>
                            <button className={classes.add_to_btn} onClick={() => props.addItem(props.item_name)}>+</button> */}
                            <AddRemoveItem
                                itemName={props.item_name}
                                qty={props.qty}
                                addItem={(item) => props.addItem(item)}
                                removeItem={(item) => props.removeItem(item)}
                            ></AddRemoveItem>
                        </div>
                    </div>
                    <div className={classes.menu_item_description_div}>
                        <p className={classes.see_description_button}>Ingredients</p>
                        <p className={classes.see_description_button}>Description</p>
                    </div>

                </div>
            </div>

        </Aux>
    )
}

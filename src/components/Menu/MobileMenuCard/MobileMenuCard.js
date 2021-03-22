import React, { useState } from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary'

import classes from './MobileMenuCard.module.css';

// importing images
import imgVegBiryani from '../../../resources/images/veg_biryani.jpg';

export default function MenuCard(props) {

    const [orderQty, setOrderQty] = useState(0);

    const addOrderQtyHandler = () => {
        if(orderQty<10){
            setOrderQty(prevOrderQty => (
                prevOrderQty + 1
            ));
            props.cartQty(1);
        }else{
            alert('Maximum Order Qty Reached');
        }
    }

    const removeOrderQtyHandler = () => {
        if(orderQty>0){
            setOrderQty(prevOrderQty => (
                prevOrderQty - 1
            ));
            props.cartQty(-1);
        }
        else{
            alert('Order qty cannot be less than zero')
        }
        
    }

    return (
        <Aux>
            <div className={classes.menu_card}>
                <div className={classes.menu_card_left}>
                    <img className={classes.menu_card_left_img} src={imgVegBiryani} alt="" />
                </div>
                <div className={classes.menu_card_right}>
                    <h2 className={classes.menu_item_title}>{props.item_name} <span>$14</span></h2>
                    <p className={classes.menu_item_description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Doloribus perferendis nostrum hic quae dolore natus odio assumenda repellendus qui ex?</p>
                    <div className={classes.menu_item_order_div}>
                        <div className={classes.order_qty_div}>
                            <button className={classes.add_to_btn} onClick={removeOrderQtyHandler}>-</button>
                            <p>{orderQty}</p>
                            <button className={classes.add_to_btn} onClick={addOrderQtyHandler}>+</button>
                        </div>
                        {/* <div className={classes.menu_card_order_qty_div}>
                            <button>-</button>
                            <select name="select_order_qty" id="select_order_qty">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button>+</button>
                        </div> */}
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

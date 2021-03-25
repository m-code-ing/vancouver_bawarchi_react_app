import React, { useState, useEffect, useContext } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import classes from './Menu.module.css';

import MenuCard from './MenuCard/MenuCard';
import MobileMenuCard from './MobileMenuCard/MobileMenuCard';
import { OrderContext } from '../../context/order_context'

export default function Menu(props) {
    const orderList = useContext(OrderContext).order;

    let menuCard;

    if (window.innerWidth <= 500) {
        const menuItems = Object.keys(orderList).map((item, index) => {
            let itemQty = props.menuOrder[item];
            return <MobileMenuCard
                key={index}
                item_name={item}
                qty={orderList[item].qty}
                removeItem={(item) => props.removeItem(item)}
                addItem={(item) => props.addItem(item)}
            ></MobileMenuCard>
        });

        menuCard = (
            <Aux>
                {menuItems}
            </Aux>
        )
    }
    return (
        <Aux>
            <div className={classes.menu_wrapper}>
                <h2 className={classes.section_title}>Biryanis</h2>
                <div className={classes.menu_container}>
                    {menuCard}
                </div>
            </div>

        </Aux>
    )
}

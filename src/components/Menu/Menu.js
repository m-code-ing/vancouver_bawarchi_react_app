import { queryByTestId } from '@testing-library/dom';
import React, { useState, useEffect } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import classes from './Menu.module.css';

import MenuCard from './MenuCard/MenuCard';
import MobileMenuCard from './MobileMenuCard/MobileMenuCard';

export default function Menu(props) {
    let menuCard;

    if (window.innerWidth <= 500) {
        const menuItems = Object.keys(props.menuOrder).map((item, index) => {
            let itemQty = props.menuOrder[item];
            return <MobileMenuCard
                key={index}
                item_name={item}
                qty={itemQty}
                removeItem={(item) => props.removeItem(item)}
                addItem={(item) => props.addItem(item)}
            // addItem={(item) => addItem(item)}
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

import { queryByTestId } from '@testing-library/dom';
import React, { useState, useEffect } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import classes from './Menu.module.css';

import MenuCard from './MenuCard/MenuCard';
import MobileMenuCard from './MobileMenuCard/MobileMenuCard';

export default function Menu(props) {

    const [menuOrder, setMenuOrder] = useState({
        'vb': 0,
        'cb': 0,
        'mb': 0
    });

    const handleRemoveItem = (item) => {
        setMenuOrder(prevMenuOrder => {
            if (menuOrder[item] < 0) {
                alert('Item qty cannot be negative');
            } else {
                return {
                    ...prevMenuOrder,
                    [item]: prevMenuOrder[item] - 1
                }
            }
        });
    }

    const handleAddItem = (item) => {
        setMenuOrder(prevMenuOrder => {
            return {
                ...prevMenuOrder,
                [item]: prevMenuOrder[item] + 1
            }

        });
    }

    useEffect(() => {
        for (const key in menuOrder) {
            if(menuOrder[key]<0){
                setMenuOrder((prevMenuOrder) => {
                    return{
                        ...prevMenuOrder,
                        [key]: 0
                    }
                });
                alert('Order quantity cannot be less than zero');
            }
        }
        props.passCartQty(menuOrder);
        
    }, [menuOrder])

    let menuCard = (
        <MenuCard item_name="Veg Biryani"></MenuCard>
    )
    if (window.innerWidth <= 500) {
        const menuItems = Object.keys(menuOrder).map((item, index) => {
            let itemQty = menuOrder[item];
            return <MobileMenuCard
                key={index}
                item_name={item}
                qty={itemQty}
                removeItem={handleRemoveItem}
                addItem={handleAddItem}></MobileMenuCard>
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
                    {/* {cartQty} */}
                    {menuCard}
                </div>
            </div>

        </Aux>
    )
}

import { queryByTestId } from '@testing-library/dom';
import React, { useState, useEffect } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import classes from './Menu.module.css';

import MenuCard from './MenuCard/MenuCard';
import MobileMenuCard from './MobileMenuCard/MobileMenuCard';

export default function Menu(props) {

    const [menuOrder, setMenuOrder] = useState({
        vb: 0,
        cb: 0,
        mb: 0
    });

    const receiveOrderHandler = (order) => {
        console.log('order : ', order);
        const newOrder = {};

        switch (order.item) {
            case "Veg Biryani":
                setMenuOrder(prevMenuOrder => {
                    return {
                        ...prevMenuOrder,
                        vb: prevMenuOrder.vb + order.qty
                    }
                })
                break;
            case "Chicken Biryani":
                setMenuOrder(prevMenuOrder => {
                    return {
                        ...prevMenuOrder,
                        vb: prevMenuOrder.vb + order.qty
                    }
                })
                break;
            case "Mutton Biryani":
                setMenuOrder(prevMenuOrder => {
                    return {
                        ...prevMenuOrder,
                        vb: prevMenuOrder.vb + order.qty
                    }
                })
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        console.log('menuOrder: ', menuOrder);
    }, [menuOrder])

    let menuCard = (
        <MenuCard item_name="Veg Biryani"></MenuCard>
    )
    if (window.innerWidth <= 500) {
        menuCard = (
            <Aux>
                <MobileMenuCard item_name="Veg Biryani" passOrder={receiveOrderHandler}></MobileMenuCard>
                <MobileMenuCard item_name="Chicken Biryani" passOrder={receiveOrderHandler}></MobileMenuCard>
                <MobileMenuCard item_name="Mutton Biryani" passOrder={receiveOrderHandler}></MobileMenuCard>
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

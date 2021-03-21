import React from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import classes from './Menu.module.css';

import MenuCard from './MenuCard/MenuCard';
import MobileMenuCard from './MobileMenuCard/MobileMenuCard';

export default function Menu() {
    let menuCard = (
        <MenuCard item_name="Veg Biryani"></MenuCard>
    )
    if (window.innerWidth <= 500) {
        menuCard = (
            <Aux>
                <MobileMenuCard item_name="Veg Biryani"></MobileMenuCard>
                <MobileMenuCard item_name="Chicken Biryani"></MobileMenuCard>
                <MobileMenuCard item_name="Mutton Biryani"></MobileMenuCard>
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

import React from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'

import classes from './Cart.module.css';

export default function Cart() {
    return (
        <Aux>
            <div className={classes.Cart_container}>
                <h3 className={classes.Cart_title}>Order Summary: </h3>
                <div>
                    <p>Veg Biryani: 3</p>
                    <p>Chicken Biryani: 1</p>
                    <p>Mutton Biryani: 2</p>
                </div>
            </div>
        </Aux>
    )
}

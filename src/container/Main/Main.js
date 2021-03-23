import React, { useEffect, useState } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import Menu from '../../components/Menu/Menu';

import classes from './Main.module.css';
import CartQty from '../../components/Cart/CartQty/CartQty';
import Cart from '../../components/Cart/Cart';

export default function Main(props) {
    const [cartOrderList, setCartOrderList] = useState({});

    let cart='';

    const passCartQty = (cartOrder) => {
        // console.log(cartOrder);
        setCartOrderList({...cartOrderList, ...cartOrder});
    }

    useEffect(() => {
        console.log('cartOrderList : ', cartOrderList);
    }, [cartOrderList])

    return (
        <Aux>
            {/* <!-- Menu Style 2 --> */}
            <Menu passCartQty={passCartQty}></Menu>
            <CartQty cartQty={cartOrderList}></CartQty>
            <Cart cartOrder={cartOrderList}/>
        </Aux>
    )
}
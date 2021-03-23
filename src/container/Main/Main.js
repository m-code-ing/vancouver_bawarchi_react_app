import React, { useEffect, useState } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import Menu from '../../components/Menu/Menu';

import classes from './Main.module.css';
import Cart from '../../components/UI/Cart/Cart';

export default function Main(props) {
    const [cartOrderList, setCartOrderList] = useState({});

    let cart='';

    const passCartQty = (cartOrder) => {
        // console.log(cartOrder);
        setCartOrderList({...cartOrderList, ...cartOrder});
        cart = (<Cart cartOrder={cartOrderList}></Cart>);
    }

    useEffect(() => {
        console.log('cartOrderList : ', cartOrderList);
    }, [cartOrderList])

    return (
        <Aux>
            {/* <!-- Menu Style 2 --> */}
            <Menu passCartQty={passCartQty}></Menu>
            <Cart cartOrder={cartOrderList}></Cart>
        </Aux>
    )
}
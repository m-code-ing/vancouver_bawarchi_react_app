import React, { useState } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import Menu from '../../components/Menu/Menu';

import classes from './Main.module.css';
import Cart from '../../components/UI/Cart/Cart';

export default function Main(props) {
    const [totalQty, setTotalQty] = useState(0);

    const passCartQty = (qty) => {
        console.log(qty);
        setTotalQty(prevTotalQty => (
            prevTotalQty = qty
        ));
    }
    return (
        <Aux>
            {/* <!-- Menu Style 2 --> */}
            <Menu passCartQty={passCartQty}></Menu>
            <Cart cartQty={totalQty}></Cart>
        </Aux>
    )
}
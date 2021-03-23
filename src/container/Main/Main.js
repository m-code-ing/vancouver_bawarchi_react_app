import React, { useEffect, useState } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import Menu from '../../components/Menu/Menu';

import classes from './Main.module.css';
import CartQty from '../../components/Cart/CartQty/CartQty';
import Cart from '../../components/Cart/Cart';

export default function Main(props) {
    const [cartOrderList, setCartOrderList] = useState({});

    let cart = '';

    const passCartQty = (cartOrder) => {
        // console.log(cartOrder);
        setCartOrderList({ ...cartOrderList, ...cartOrder });
    }

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
            if (menuOrder[key] < 0) {
                setMenuOrder((prevMenuOrder) => {
                    return {
                        ...prevMenuOrder,
                        [key]: 0
                    }
                });
                alert('Order quantity cannot be less than zero');
            }
        }
    }, [cartOrderList, menuOrder])

    return (
        <Aux>
            {/* <!-- Menu Style 2 --> */}
            <Menu
                passCartQty={passCartQty}
                menuOrder={menuOrder}
                removeItem={(item) => handleRemoveItem(item)}
                addItem={(item) => handleAddItem(item)}
            ></Menu>
            <CartQty cartQty={menuOrder}></CartQty>
            <Cart
                cartOrder={menuOrder}
                removeItem={(item) => handleRemoveItem(item)}
                addItem={(item) => handleAddItem(item)}
            />
        </Aux>
    )
}
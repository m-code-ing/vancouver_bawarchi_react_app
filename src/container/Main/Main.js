import React, { useEffect, useState, useContext } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import Menu from '../../components/Menu/Menu';

import classes from './Main.module.css';
import CartQty from '../../components/Cart/CartQty/CartQty';
import Cart from '../../components/Cart/Cart';
import OrderForm from '../../components/OrderForm/OrderForm';

export default function Main(props) {
    
    const [menuOrder, setMenuOrder] = useState({
        'vb': 0,
        'cb': 0,
        'mb': 0
    });

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
    },[menuOrder])

    const [orderSummaryState, setOrderSummaryState] = useState(true)

    const toggleOrderSUmmary = () => {
        setOrderSummaryState((prevOrderSummaryState) => !prevOrderSummaryState);
    }

    useEffect(() => {
    }, [orderSummaryState])

    return (
        <Aux>
            {/* <!-- Menu Style 2 --> */}
            <Menu
                menuOrder={menuOrder}
                // removeItem={(item) => handleRemoveItem(item)}
                // addItem={(item) => handleAddItem(item)}
            ></Menu>
            <CartQty
                cartQty={menuOrder}
                toggleOrderSummary={toggleOrderSUmmary}></CartQty>
            <Cart
                cartOrder={menuOrder}
                // removeItem={(item) => handleRemoveItem(item)}
                // addItem={(item) => handleAddItem(item)}
                orderSummaryState={orderSummaryState}
                // cancelItem={(orderItem) => removeItem(orderItem)} 
                />
            <OrderForm></OrderForm>
        </Aux>
    )
}
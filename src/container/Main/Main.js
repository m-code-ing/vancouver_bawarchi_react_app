import React, { useEffect, useState, useContext } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import Menu from '../../components/Menu/Menu';

import classes from './Main.module.css';
import CartQty from '../../components/Cart/CartQty/CartQty';
import Cart from '../../components/Cart/Cart';
import OrderForm from '../../components/OrderForm/OrderForm';

import { Route, Link } from 'react-router-dom';
import CartItem from '../../components/Cart/CartItem/CartItem';

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
    }, [menuOrder])

    const [orderSummaryState, setOrderSummaryState] = useState(true)

    const toggleOrderSUmmary = () => {
        setOrderSummaryState((prevOrderSummaryState) => !prevOrderSummaryState);
    }

    useEffect(() => {
    }, [orderSummaryState])

    return (
        <Aux>
            {/* <!-- Menu Style 2 --> */}            
            <Route path='/' exact component={Menu}></Route>
            <Route path='/order-summary' component={Cart}></Route>
            


            {/* <Menu
                menuOrder={menuOrder}
            // removeItem={(item) => handleRemoveItem(item)}
            // addItem={(item) => handleAddItem(item)}
            ></Menu> */}

            <Link to="/order-summary">
                <CartQty
                    cartQty={menuOrder}
                    toggleOrderSummary={toggleOrderSUmmary}></CartQty>
            </Link>

            {/* <Cart
                cartOrder={menuOrder}
                // removeItem={(item) => handleRemoveItem(item)}
                // addItem={(item) => handleAddItem(item)}
                orderSummaryState={orderSummaryState}
                // cancelItem={(orderItem) => removeItem(orderItem)} 
                /> */}
            <OrderForm></OrderForm>
        </Aux>
    )
}
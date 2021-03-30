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

    const [orderSummaryState, setOrderSummaryState] = useState(true)

    const toggleOrderSUmmary = () => {
        setOrderSummaryState((prevOrderSummaryState) => !prevOrderSummaryState);
    }

    useEffect(() => {
    }, [orderSummaryState])
    

    return (
        <Aux>
            <Link to="/order-summary">
                <CartQty
                    toggleOrderSummary={toggleOrderSUmmary}></CartQty>
            </Link>
            <Route path='/vancouver_bawarchi_react_app/' exact component={Menu}></Route>
            <Route path='/order-summary' component={Cart}></Route>
            <Route path='/order-form' component={OrderForm}></Route>
        </Aux>
    )
}
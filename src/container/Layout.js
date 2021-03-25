import React from 'react'
import Header from './Header/Header';
import Main from './Main/Main';

import OrderContext from '../context/order_context'

const Layout = (props) => {
    return(
        <OrderContext>
            <Header></Header>
            <Main></Main>
        </OrderContext>
    )
}

export default Layout;
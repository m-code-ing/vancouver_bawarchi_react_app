import React, { useContext, useEffect, useRef } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'

import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';

import { OrderContext } from '../../context/order_context'
import { Link } from 'react-router-dom';

export default function Cart(props) {

    const orderList = useContext(OrderContext).order;
    const cartOrder = props.cartOrder;
    let itemQty;
    let itemPrice;
    let cartPrice = 0;
    let itemName;

    let orderSummaryClasses = [classes.Cart_container];
    let itemSum = 0;

    const orderItems = Object.keys(orderList).map((item, index) => {
        if (orderList[item].qty > 0) {
            itemSum = itemSum + orderList[item].qty;
            switch (item) {
                case 'vb':
                    itemQty = orderList[item].qty;
                    itemPrice = orderList[item].price;
                    cartPrice = cartPrice + (itemPrice * itemQty);
                    return <CartItem
                        key={index}
                        item={item}
                        itemQty ={itemQty}
                        itemPrice={itemPrice * itemQty}
                        removeItem={(cartItem) => props.removeItem(cartItem)}
                        addItem={(cartItem) => props.addItem(cartItem)}
                        cancelItem={(item) => props.cancelItem(item)}></CartItem>
                case 'cb':
                    itemQty = orderList[item].qty;
                    itemPrice = orderList[item].price;
                    cartPrice = cartPrice + (itemPrice * itemQty);
                    console.log('itemQty : ', itemQty);
                    return <CartItem
                        key={index}
                        item={item}
                        itemQty ={itemQty}
                        itemPrice={itemPrice * itemQty}
                        removeItem={(cartItem) => props.removeItem(cartItem)}
                        addItem={(cartItem) => props.addItem(cartItem)}
                        cancelItem={(item) => props.cancelItem(item)}></CartItem>
                case 'mb':
                    itemQty = orderList[item].qty;
                    itemPrice = orderList[item].price;
                    cartPrice = cartPrice + (itemPrice * itemQty);
                    return <CartItem
                        key={index}
                        item={item}
                        itemQty ={itemQty}
                        itemPrice={itemPrice * itemQty}
                        removeItem={(cartItem) => props.removeItem(cartItem)}
                        addItem={(cartItem) => props.addItem(cartItem)}
                        cancelItem={(item) => props.cancelItem(item)}></CartItem>
                default:
                    break;
            }
        }
    });

    if (props.orderSummaryState || itemSum < 1) {
        orderSummaryClasses.push(classes.Hide)
    }

    const myRef = useRef(null)

    useEffect(() => {
        console.log(myRef.current);
        myRef.current.scrollIntoView(40);
    },[])

    return (
        <Aux>
            <div ref={myRef} className={orderSummaryClasses.join(' ')}>
                <h3 className={classes.Cart_title}>Order Summary</h3>
                <em className={classes.Cart_price}>Total Price : $ {cartPrice}</em>
                <div>
                    {orderItems}
                </div>
                <div className={classes.Place_order_div}>
                    <Link to="/order-form" className={classes.Place_order_btn}>Place Order</Link>
                    
                </div>
                <Link to="/" className={classes.Cancel_order_btn}><em>Cancel Order</em></Link>
            </div>
        </Aux>
    )
}

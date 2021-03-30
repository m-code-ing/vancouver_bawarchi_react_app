import React, { useState, useEffect } from 'react';

export const OrderContext = React.createContext({
    order: {},
    menuItems: {},
    handleRemoveItem: (item) => { },
    handleAddItem: (item) => { },
    handleCancelItem: (item) => { },
});

export default props => {

    const [menuItems, setMenuItems] = useState({
        vb: {
            price: 13,
        },
        cb: {
            price: 15,
        },
        mb: {
            price: 17,
        }
    })

    const [orderList, setOrderList] = useState({
        vb: {
            qty: 0
        },
        cb: {
            qty: 0
        },
        mb: {
            qty: 0
        }
    });

    const handleRemoveItem = (item) => {
        setOrderList(currentOrderList => {
            return {
                ...currentOrderList,
                [item]: {
                    ...currentOrderList[item],
                    qty: currentOrderList[item].qty - 1
                }
            }
        });
    }

    const handleAddItem = (item) => {
        setOrderList(currentOrderList => {
            return {
                ...currentOrderList,
                [item]: {
                    ...currentOrderList[item],
                    qty: currentOrderList[item].qty + 1
                }
            }
        });
    }

    const handleCancelItem = (item) => {
        setOrderList(currentOrderList => {
            return {
                ...currentOrderList,
                [item]: {
                    ...currentOrderList[item],
                    qty: 0
                }
            }
        })        
    }

    useEffect(() => {
        for (const key in orderList) {
            if (orderList[key].qty < 0) {
                setOrderList((currentOrderList) => {
                    return {
                        ...currentOrderList,
                        [key]: {
                            ...currentOrderList[key],
                            qty: 0
                        }
                    }
                });
                alert('Order quantity cannot be less than zero');
            }
        }
    }, [orderList])


    return (
        <OrderContext.Provider value={
            {
                orderList: orderList,
                menuItems: menuItems,
                removeItem: handleRemoveItem,
                addItem: handleAddItem,
                cancelItem: handleCancelItem
            }
        }>
            {props.children}
        </OrderContext.Provider>
    )
}

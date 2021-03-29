import React, { useReducer } from 'react';
import menuContext from './menuContext';
import menuReducer from './menuReducer';

const MenuProvider = props => {

    const initialState = {
        menuItems: {
            vb: {
                price: 13,
                qty: 0
            },
            cb: {
                price: 15,
                qty: 0
            },
            mb: {
                price: 17,
                qty: 0
            }
        }
    }

    const [state, dispatch] = useReducer(menuReducer, initialState);

    return (
        <BlogContext.Provider value={{
            menuItems: state.menuItems
        }}>
            {props.children}
        </BlogContext.Provider>
    )
}
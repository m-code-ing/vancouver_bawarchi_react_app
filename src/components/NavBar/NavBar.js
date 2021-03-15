import React from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'

import classes from './NavBar.module.css'

const NavBar = (props) => {

    return (
        <Aux>
            <nav className={classes.nav_bar}>
                <h3 className={classes.logo}>Vancouver Bawarchi</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Food for Thought</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <div className={classes.nav_hamburger}></div>
            </nav>
        </Aux>
    )
}

export default NavBar;
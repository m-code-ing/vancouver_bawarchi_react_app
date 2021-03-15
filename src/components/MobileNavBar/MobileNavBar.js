import React from 'react';
import classes from './MobileNavBar.module.css';

const mobileNavBar = (props) => {
    return (
        <div className={classes.mobile_nav_bar}>
            <p className={classes.mobile_nav_bar_close}>X</p>
            <h3 className={classes.logo}>Vancouver Bawarchi Mobile</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Food for Thought</a></li>
            </ul>
        </div>
    )
}

export default mobileNavBar;
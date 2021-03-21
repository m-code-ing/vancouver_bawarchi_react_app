import React from 'react';
import classes from './MobileNavBar.module.css';


const mobileNavBar = (props) => {
    
    let attachedClasses = [classes.mobile_nav_bar];

    if(!props.open){
        attachedClasses = [classes.mobile_nav_bar, classes.hide];
    }
    
    return (
        <div className={attachedClasses.join(' ')}>
            <p className={classes.mobile_nav_bar_close} onClick={props.clicked}>X</p>
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
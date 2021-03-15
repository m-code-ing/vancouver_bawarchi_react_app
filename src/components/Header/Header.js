import React from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import MobileNavBar from '../MobileNavBar/MobileNavBar'
import NavBar from '../NavBar/NavBar'

import classes from './Header.module.css'

const Header = (props) => {

    return (
        <Aux>
            <div>
                <header>
                    {/* <!-- Navigation Bar --> */}
                    <NavBar></NavBar>
                    <MobileNavBar></MobileNavBar>
                    {/* <!-- Banner --> */}
                    <section className={classes.hide} id="banner" >
                        <div className={classes.overlay}></div>
                        <div className={classes.banner_heading_div}>
                            <h1 id="banner_heading">Vancouver Bawarchi</h1>
                            <hr id="banner_heading_hr" />
                            <p id="banner_tagline">Where taste meets divinity</p>
                        </div>
                        <div id="banner_button_div">
                            <button className={classes.banner_button}>View Menu</button>
                            <button className={classes.banner_button}>Order Now</button>
                        </div>
                    </section>
                </header>
            </div>
        </Aux>
    )
}

export default Header;
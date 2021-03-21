import React, { Component } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import MobileNavBar from '../../components/MobileNavBar/MobileNavBar'
import NavBar from '../../components/NavBar/NavBar'
import Banner from '../../components/Banner/Banner';

import classes from './Header.module.css'


class Header extends Component {
    state = {
        showMobileNav: false
    };
    mobileNavToggle = () => {
        this.setState((prevState) => {
            return { showMobileNav: !prevState.showMobileNav };
        });
    }

    render() {
        return (
            <Aux>
                <div>
                    <header>
                        {/* <!-- Navigation Bar --> */}
                        <NavBar mobileNavToggle={this.mobileNavToggle}></NavBar>
                        <MobileNavBar open={this.state.showMobileNav} clicked={this.mobileNavToggle}></MobileNavBar>                        
                        {/* <!-- Banner --> */}
                        <Banner></Banner>
                    </header>
                </div>
            </Aux>
        )
    }
}

export default Header;
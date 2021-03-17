import React from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'

// importing images
import bg_img from '../../resources/images/banner_img.jpg';

import classes from './Banner.module.css';

const banner = (props) => {
    let style = {
        backgroundImage: `url(${bg_img})`
    }
    return (
        <Aux>
            <section className={classes.banner} style={style}>
                <div className={classes.overlay}></div>
                <div className={classes.banner_heading_div}>
                    <h1 className={classes.banner_heading}>Vancouver Bawarchi</h1>
                    <hr className={classes.banner_heading_hr} />
                    <p className={classes.banner_tagline}>Where taste meets divinity</p>
                </div>
                <div className={classes.banner_button_div}>
                    <button className={classes.banner_button}>View Menu</button>
                    <button className={classes.banner_button}>Order Now</button>
                </div>
            </section>
        </Aux>
    )
}

export default banner;
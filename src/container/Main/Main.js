import React, { Component } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary'
import Menu from '../../components/Menu/Menu';

import classes from './Main.module.css';

export default class Main extends Component {
    render() {
        return (
            <Aux>
                {/* <!-- Menu Style 2 --> */}
                <Menu></Menu>
            </Aux>
        )
    }
}

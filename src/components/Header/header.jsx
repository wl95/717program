import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './header.less'
class Header extends Component {
    render() {
        let { letfCont, title, rightCont , leftHistory,rightHistory } = this.props;
        return (
            <header>
                <NavLink to={leftHistory} className="header_left">{letfCont}</NavLink>
                <NavLink to={rightHistory} className="header_right">{rightCont}</NavLink>
                <h4>{title}</h4>
            </header>
        )
    }
}

export default Header;
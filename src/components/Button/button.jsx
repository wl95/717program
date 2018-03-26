import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import './button.less'

class Button extends Component {
    render() {
        let { buttonText, Icon, style, onClick } = this.props;
        return (
            <div className="buttons" onClick={onClick || null} style={style}>
                { Icon || '' }
                {buttonText}
            </div>
        );
    }
}

class NavLinkButton extends Component {
    render() {
        let { buttonText, history, Icon, style, onClick } = this.props;
        return (
            <Fragment>
                {
                    history ? <NavLink to={history} className="Button">
                        <Button buttonText={buttonText} Icon={Icon || ''} onClick={onClick || null} style={style}></Button>
                    </NavLink> : <Button buttonText={buttonText} Icon={Icon || ''} onClick={onClick || null} style={style}></Button>
                }
            </Fragment>
        )
    }
}

export default NavLinkButton;
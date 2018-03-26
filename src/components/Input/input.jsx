import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './input.less'
class Input extends Component {
    constructor() {
        super();
        this.state = {
            defaultValue:''
        }
        this.onGain = this.onGain.bind(this)
    }
    render() {
        let { inputType, placeholder, onChange, defaultValue } = this.props;
        return <input type={inputType} value={this.state.defaultValue || (defaultValue || '')} onChange={(e) => { this.setState({ defaultValue: e.target.value });  this.onGain(e) }} placeholder={placeholder} className="plug_in_input"/>
    }
    onGain(e) {
        this.props.onChang && this.props.onChang(e.target.value)
    }
}

export default Input;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const choice = {
    width: ".45rem",
    height: ".45rem",
    borderRadius: "50%",
    marginRight:".1rem",
    border: ".02rem solid #aaa",
    color: "#fff",
    lineHeight: ".45rem",
    textAlign: "center",
    display: "inline-block",
    fontSize: ".26rem"
}

const choice_checked = {
    background: "#fc4141",
    border: "none",
    color:"#fff"
}


class Radio extends Component {
    constructor() {
        super();
    }
    render() {
        let { trigger, isCheckAll } = this.props; 
        return <span className="choice iconfont icon-check " style={ isCheckAll ? choice_checked : {} } onClick={trigger}></span>
    }
}

export default Radio;
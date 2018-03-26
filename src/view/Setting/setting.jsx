import React, { Component ,Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import ActionSheet from '../../components/ActionSheet'
import Cookies from 'js-cookie'

class Setting extends Component {
    constructor() {
        super();
        this.state = {
            agreeNot:false
        }
        this.onQuit = this.onQuit.bind(this);
        this.agreeQuit = this.agreeQuit.bind(this);
    }
    render() {
        return (
            <Fragment>
                <header className="settingHeader">
                    <NavLink to="/homepage/mine"><i className="iconfont icon-back"></i></NavLink>
                    <h3>设置</h3>
                    <i className="iconfont icon-back" style={{visibility: "hidden"}}></i>
                </header>
                <div className="fromBtn">
                    <button onClick={this.onQuit}>退出</button>
                </div>
               { /* 是否登陆 */ }
                <ActionSheet
                    agreeNot={this.state.agreeNot}
                    agreeQuit={this.agreeQuit}                
                    onQuit={this.onQuit}       
                    title="确定要退出登陆吗?"
                    agree="确定"
                    not="取消"
                    />
            </Fragment>
        )
    }
    onQuit() {
        this.setState({
            agreeNot:!this.state.agreeNot
        })
    }
    agreeQuit() {
        this.setState({
            agreeNot:!this.state.agreeNot
        })
        Cookies.remove('userInfo');
        this.props.location.state ? this.props.history.push(this.props.location.state.form) : this.props.history.push('/homepage/home');
    }
}

export default Setting;
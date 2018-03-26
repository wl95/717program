import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import $http from '../../utils/http'
import Cookies from 'js-cookie'
import mapDispatchToProps from './setDispatch';
import './login.less'

class Login extends Component {
    constructor() {
        super()
        this.onLogin = this.onLogin.bind(this);
        this.retreat = this.retreat.bind(this);
    }
    render() {
        return (<Fragment>
            <header className="loginHeader">
                <i className="iconfont icon-back" onClick={this.retreat}></i>
                <h4>会员登陆</h4>
                <NavLink to="/register">注册</NavLink>
            </header>
            <div className="userInfoline">
                <i className="iconfont icon-account"></i><input type="text" placeholder="请输入账号" ref="username" />
            </div>
            <div className="userInfoline">
                <i className="iconfont icon-lock"></i><input type="password" placeholder="请输入密码" ref="password"/>
            </div>
            <div className="fromBtn">
                <button onClick={this.onLogin}>登录</button>
            </div>
        </Fragment>)
    }
    retreat() {
        if (this.props.location.state) {
            this.props.history.push(this.props.location.state.form)
        } else {
            this.props.history.push('/homepage/home');
        }
    }
    onLogin() {
        let { username, password } = this.refs;
        let toFrom = this.props.location.state ? this.props.location.state.form : '/homepage/home'
        $http.post('/users/user/login',{ username:username.value,password:password.value }).then(result => {
            if (!result.code) {
                Cookies.set('userInfo', result.token);
                this.props.setUserInfo(result.username);
                this.props.history.push(toFrom);
            } else {
                alert('请注册后登陆')
            }
        })
    }
}

export default connect(null,mapDispatchToProps)(Login);
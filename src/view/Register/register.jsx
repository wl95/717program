import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import $http from '../../utils/http'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            registerTip:''
        }
        this.onRegister = this.onRegister.bind(this);
    }
    render() {
        return (<div>
            <header className="loginHeader">
                <i className="iconfont icon-back"></i>
                <h4>会员注册</h4>
                <NavLink to="/login">登陆</NavLink>
            </header>
            <div className="userInfoline">
                <i className="iconfont icon-account"></i><input type="text" placeholder="请输入账号" ref="username" />
            </div>
            <div className="userInfoline">
                <i className="iconfont icon-lock"></i><input type="password" placeholder="请输入密码" ref="password"/>
            </div>
            <div className="register_tip">{this.state.registerTip}</div>
            <div className="fromBtn">
                <button onClick={this.onRegister}>注册</button>
            </div>
        </div>)
    }
    onRegister() {
        let { username, password } = this.refs;
        $http.post('/users/user/register',{username:username.value,password:password.value}).then(result => {
            console.log(result)
            if (!result.code) {
                setTimeout(() => {
                    this.props.history.push('/login');
                },1000)
                this.setState({
                    registerTip:result.msg
                })
            }
        })
    }
}

export default Register;
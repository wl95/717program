import React, { Component } from 'react';
import { Route ,Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

class RouterWraper extends Component{
    render() {
        let userInfo = Cookies.get('userInfo') || ''
        let { routers } = this.props;
        return routers.map(value => {
            return <Route key={value.name} path={value.path} render={localhost => {
                if (value.authorization) {
                    return userInfo ? <value.component {...localhost} routers={value.children}/> : <Redirect from="/" to="/login"/> 
                }
                return <value.component {...localhost} routers={value.children}/>
            }}/>
        })
    }
}

export default RouterWraper; 
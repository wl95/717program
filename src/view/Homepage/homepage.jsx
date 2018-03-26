import React, { Component ,Fragment } from 'react'
import { Switch, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import RouterWraper from '../../components/Router'
import mapStateToProps from './getState'
import mapDispatchToProps from './setDispatch'
import './homepage.less'

class HomePage extends Component{
    render() {
        let { routers, sum } = this.props;
        sum = Cookies.get('userInfo') ? sum : 0;
        return (
            <Fragment>
                <div className="section">
                    <Switch>
                        <RouterWraper routers={routers}/>
                    </Switch>
                </div>    
                <footer>
                    <NavLink to="/homepage/home" activeClassName="Bott_active">
                        <i className="iconfont">&#xe783;</i>    
                        <span>首页</span>
                    </NavLink>
                    <NavLink to="/homepage/catagory" activeClassName="Bott_active">
                        <i className="iconfont">&#xe696;</i>    
                        <span>分类</span>
                    </NavLink>
                    <NavLink to="/homepage/community" activeClassName="Bott_active">
                        <i className="iconfont">&#xe952;</i>        
                        <span>社区</span>
                    </NavLink>
                    <NavLink to="/homepage/cart" activeClassName="Bott_active">
                        <div className="tipNum">{sum}</div>    
                        <i className="iconfont">&#xe698;</i>        
                        <span>购物车</span>
                    </NavLink>
                    <NavLink to="/homepage/mine" activeClassName="Bott_active">
                        <i className="iconfont">&#xe6b8;</i>        
                        <span>我的</span>
                    </NavLink>
                </footer>
            </Fragment>    
        )
    }
    componentDidMount() {
        this.props.getTip();
    }
}

export default connect(mapStateToProps,mapDispatchToProps,null,{pure:false})(HomePage);
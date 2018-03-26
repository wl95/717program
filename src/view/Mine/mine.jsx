import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import mapStateToProps from './getState'
import mapDispatchToProps from './setDispatch.js'
import './mine.less'


class Mine extends Component {
    render() {
        return (
            <Fragment>
                <header className="mineHeader">
                    <NavLink to="/setting"><i className="iconfont icon-settings"></i></NavLink>
                    <h3>我的717商城 </h3>
                    <i className="iconfont icon-settings" style={{visibility: "hidden"}}></i>
                </header>
                <div className="main">
                    <div className="information">
                        <NavLink to="/setting">    
                            <img src="http://www.lb717.com/static/mobile/images/default_avatar.png" />
                            <p>{this.props.userInfo}</p>
                        </NavLink>    
                    </div>
                    <ul className="mine_list">
                        <li className="mine_listLine">
                            <NavLink to="http://www.lb717.com/site/index/index">
                                <div className="Line_left">
                                    <i className="iconfont icon-fangdichan"></i>
                                    我的社区
                                </div>
                                <i className="iconfont icon-more"></i>
                            </NavLink>
                        </li>
                        <li className="mine_listLine">
                            <NavLink to="http://www.lb717.com/site/index/index">
                                <div className="Line_left">
                                    <i className="iconfont icon-imagetext"></i>
                                    账户余额
                                </div>
                                <i className="iconfont icon-more"></i>
                            </NavLink>
                        </li>
                        <li className="mine_listLine">
                            <NavLink to="/address">
                                <div className="Line_left">
                                    <i className="iconfont icon-map2"></i>
                                    地址管理
                                </div>
                                <i className="iconfont icon-more"></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.getUserInfo();
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Mine);
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Button from '../../components/Button'
import mapStateToProps from './getState'
import mapDispatchToProps from './setDispatch'

class Address extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Header
                    letfCont={<i className="iconfont icon-back"></i>}
                    title="收货地址"
                    rightCont={<i className="iconfont icon-homeline"></i>}
                    leftHistory="/homepage/mine"
                    rightHistory="/homepage/home"
                />  
                
                <Button
                    Icon={<span className="iconfont icon-add1"></span>}    
                    buttonText="新增收货地址"
                    history="/addAddress"
                    style={{marginTop:".8rem"}}
                />
            </div>
        )
    }
    componentDidMount() {
        this.props.getAddress();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Address);
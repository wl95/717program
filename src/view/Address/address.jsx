import React, { Component } from 'react';
import Header from '../../components/Header'
import Button from '../../components/Button'

class Address extends Component {
    render() {
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
}

export default Address;
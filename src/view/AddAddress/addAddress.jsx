import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header, Input, Select, Radio, Button } from '../../components'
import mapStateToProps from './getState'
import mapDispatchToProps from './setDIspatch'
import $http from '../../utils/http'
import './addAddress.less'
class AddAddress extends Component {
    constructor() {
        super();
        this.state = {
            isDefaultSite:false
        }
        this.setDefault = this.setDefault.bind(this);
        this.onProvince = this.onProvince.bind(this);
        this.onMunicipality = this.onMunicipality.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onGain = this.onGain.bind(this);
        this.userName = '';
        this.userPhone = '';
        this.province = '';
        this.municipality = '';
        this.dstrict = '';
        this.dadd = ''      // 详细地址
    }
    render() {
        let { buttonText, history, province, municipality_list, dstrict_list } = this.props;
        let { isDefaultSite } = this.state;
        return (
            <Fragment>
                <Header
                    letfCont={<i className="iconfont icon-back"></i>}
                    title="新建收货人地址"
                    rightCont={<i className="iconfont icon-homeline"></i>}
                    leftHistory="/address"
                    rightHistory="/homepage/home"
                />
                <div className="add_address_form">
                    <Input placeholder="收货人姓名" onChang={(value) => {this.onGain('userName',value)}}/>
                    <Input placeholder="手机号" />
                    <div className="form_line">
                        <Select selectDefault="请输入省" options={province} defaultValue="山西省" onChang={this.onProvince} onGiveGain={(value) => {this.onGain('province',value)}}/>
                        <Select selectDefault="请输入市" options={municipality_list} style={{float:"right"}} onChang={this.onMunicipality}/>
                    </div>
                    <Select selectDefault="请输入区" options={dstrict_list} />
                    <Input placeholder="详细地址" />
                    <div className="form_line mt02 disF aiT" onClick={this.setDefault}><Radio isCheckAll={isDefaultSite}></Radio>设为默认地址</div>
                    <div className="form_line mt02 tc"><Button buttonText="保存" onClick={this.onSave}></Button></div>
                </div>
            </Fragment>
        )
    }
    // 选省获取市
    onProvince(district_id) {
        this.props.getMunicipality(district_id);
    }
    // 获取区
    onMunicipality(district_id) {
        this.props.getDistrict(district_id);
    }
    onSave() {
        //console.log(this.userName)
        console.log(this.province)
    }
    onGain(a, b) {
        this[a] = b;
    }
    setDefault() {
        this.setState({
            isDefaultSite:!this.state.isDefaultSite
        })
    }
    componentDidMount() {
        // 获取省
        this.props.getAddAddressIndex();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress)

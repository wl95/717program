import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './select.less'

const selectStyle = {
    color: "#333",
    border: "none",
    width: "100%",
    marginTop: ".2rem",
    fontSize: ".26rem",
    paddingLeft:".2rem",
    height: ".75rem"
}

class Select extends Component {
    constructor() {
        super();
        this.state = {
            defaultValue:''
        }
    }
    render() {
        let { selectDefault, style, options, defaultValue } = this.props;
        let  newSelectStyle =  Object.assign({},selectStyle,style); 
        return <select style={newSelectStyle} value={this.state.defaultValue || (defaultValue || '')} onChange={(e) => { this.setState({ defaultValue: e.target.value });  this.onGain(e) }}>
            <option>{selectDefault || '请选择'}</option>
            {
                 (options && options instanceof Array ) && options.map(value => {
                    return <option key={value.district_id} data-address={value.region_name} value={value.district_id}>{value.region_name}</option>
                }) 
            }
        </select>
    }
    onGain(e) {
       this.props.onChang && this.props.onChang(e.target.value);
       this.props.onGiveGain && this.props.onGiveGain(e.target.value);
    }
}

export default Select;
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Radio } from '../index'
import mapDispatchToProps from './setDispatch'

class EveryCart extends Component {
    constructor() {
        super();
        this.state = {
            isDefaultSite:false
        }
        this.onChoiceChecked = this.onChoiceChecked.bind(this);
    }
    render() {
        let { carts, setCount } = this.props;
        //console.log(carts)
        return (<dl className="every_cart">
            <span className={"choice iconfont icon-check " + (carts.choiceChecked ? "choice_checked" : '')} onClick={() => { this.onChoiceChecked(carts.goods_id, carts.choiceChecked) }}></span> 
            <dt>
                <img src={"http://www.lb717.com/" + carts.obj_data}/>
            </dt>
            <dd>
                <p className="every_cart_title">{carts.goods_name}</p>
                <div className="quantity_price">
                    <p>
                        <span>X{carts.count}</span>
                        <span className="every_cart_price">￥{carts.discount_price}</span>
                    </p>    
                    <b className="control">
                        <span className="cancel" onClick={() => { setCount(carts.count > 2 ? --carts.count : 1, carts.goods_id)}}>-</span>
                        <span className="num">{carts.count}</span>
                        <span className="add" onClick={() => { setCount(++carts.count, carts.goods_id)}}>+</span>
                    </b>
                </div>
            </dd>
        </dl>)
    }
    onChoiceChecked(goodsId,choiceChecked) {
        this.props.selectChecked(goodsId,choiceChecked);
    }
}

export default connect(null,mapDispatchToProps,null,{pure:false})(EveryCart);
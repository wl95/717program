import React, { Component } from 'react'
import { Toast, WhiteSpace, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux'
import LazyLoad from 'react-lazyload';
import $http from '../../utils/http'
import Cookies from 'js-cookie'
import './productList.less'
import mapDispatchToProps from './setDispatch';
import mapStateToProps from './getState';

class Timg extends Component{
    render() {
        return <img src={require('../../images/timg.gif')}/>
    }
} 
// 添加购物车提示语
function showToast(showToastMsg) {
    Toast.info(showToastMsg, 1);
}

class ProductList extends Component{
    constructor() {
        super()
        setTimeout(() => {
            Toast.hide();
        }, 3000);
        this.shoppingTrolley = this.shoppingTrolley.bind(this)
        this.toDetail = this.toDetail.bind(this)
    }
    render() {
        let { obj_data, goods_name, discount_price, goods_id } = this.props.productList;
        return (<dl className="productLists" onClick={() => { this.toDetail(goods_id) }}>
            <dt><img style={{width:"100%",height:"100%"}} src={"http://www.lb717.com/" + obj_data}/></dt>
            <dd>
                <p>{goods_name}</p>
                <div className="discount_price">
                    <span>￥{discount_price}</span>
                    <WingBlank>
                        <WhiteSpace />
                            <i className="iconfont icon-cart" onClick={(e) => { e.stopPropagation(); this.shoppingTrolley();}}></i>
                        <WhiteSpace />
                    </WingBlank>
                </div>
            </dd>
        </dl>)
    }
    shoppingTrolley() {
        //console.log( this.props.location.pathname)
        //console.log(Cookies.get('userInfo'))
        let { productList } = this.props;
        if (!Cookies.get('userInfo')) {
            this.props.history.push('/login', {
                form: this.props.location.pathname
            })
            return;
        }

        this.props.onAddCart(productList);
        
        $http.post('/commodity/user/Cart/addCart', {
            token: Cookies.get('userInfo') || '',
            productList
        }).then(result => {
            showToast(result.message);
        })
        
    }
    toDetail(goods_id) {
        this.props.history.push('/detail', {
            form: this.props.location.pathname,
            goods_id
        });
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);
import React, { Component, Fragment } from 'react';
import { Toast, WhiteSpace, WingBlank } from 'antd-mobile';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import mapStateToProps from './getState'
import mapDispatchToProps from './setDispatch';
import EveryCart from '../../components/EveryCart'
import './cart.less'

// 添加购物车提示语
function showToast(showToastMsg) {
    Toast.info(showToastMsg, 1);
}
function loadingToast() {
    Toast.loading('Loading...', 0, () => {
      console.log('Load complete !!!');
    },true);
}

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            EditorFinish: false,
            Editor: {
                editor: "编辑",
                account:"结算"
            },
            Finish: {
                editor: "完成",
                account:"删除"
            }
        }
        this.ShoppingCartEditor = this.ShoppingCartEditor.bind(this);
        this.onEditor = this.onEditor.bind(this);
        this.onCheckAll = this.onCheckAll.bind(this);
    }
    render() {
        let { cartList , isCheckAll } = this.props;
        let EditorFinish = this.state.EditorFinish ? this.state.Finish :this.state.Editor
        return (
            <Fragment>
                <WhiteSpace />    
                <header className="headerCart">
                    {
                        cartList.length ? <span onClick={this.ShoppingCartEditor}>{EditorFinish.editor}</span> : ''
                    }    
                    <h4>购物车</h4>    
                </header>
                <div className="cart_commodity">
                {
                    !cartList.length ? <div className="carts">
                    <div className="shopIcon"></div>    
                        <ul className="carts_hint">
                            <li>购物车为空</li>
                            <li><NavLink to="/homepage/home">去逛逛</NavLink></li>
                        </ul>
                    </div> : <div className="carts_list">
                        {cartList.map((carts,index) => {
                            return <EveryCart key={"carts" + index} carts={carts} />
                        })}
                    </div>
                }
                </div>
                {
                    !cartList.length || <div className="total_prices">
                        <div className="check_all"><span className={"choice iconfont icon-check " + (isCheckAll ? "choice_checked" : '')} onClick={() => { this.onCheckAll(isCheckAll) }}></span>全选</div>
                            <div className="clac">
                            <div className="total">合计:<span>¥{this.props.total}</span></div>
                                <div className="account" onClick={() =>this.onEditor(this.state.EditorFinish)}>{EditorFinish.account}</div>
                            </div>
                        </div>
                }
                <WhiteSpace />
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.getCartLists(() => {
            Toast.hide();
        });
        loadingToast();
    }
    // 全选
    onCheckAll(isCheckAll) {
        this.props.CheckedAll(isCheckAll);
    }
    // 购物车编辑
    ShoppingCartEditor() {
        this.setState({
            EditorFinish: !this.state.EditorFinish
        })
    }
    // 结算与提交
    onEditor(EditorFinish) {
        if (EditorFinish) {
            loadingToast();
            let EditorGoodId = [];
            this.props.cartList.forEach(value => {
                if (value.choiceChecked) {
                    EditorGoodId.push(value.goods_id);
                }
            })
            this.props.onEditor(EditorGoodId, () => {
                console.log(1)
                Toast.hide();
            });
            showToast("宝贝删除成功");
        } else {
            showToast("正在跳转支付");
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
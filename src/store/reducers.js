import { combineReducers } from 'redux'
import {
    ADD_CART, REMOVE_CART, CHANGE_QUANTITY,
    CHOICE_CHECKED, ISCHECK_ALL,
    GET_GART_LISTS, TIP_NUM,
    USER_INFO,
    GET_ADDADDRES_INDEX,
    GET_ADDADDRES_CHILDREN,
    GET_ADDADDRES_DSTRICT
} from './action'

let initState = {
    cart_list: [],
    checkAll: false,
    tip: 0,
    user_info: '',
    province_list: [],
    municipality_list: [],
    dstrict_list: [],
    address:[]   // 收货地址
}
// 商品列表
function cart_list(state = initState.cart_list, action) {
    switch (action.type) {
        case ADD_CART: // 添加购物车
            let flag = false;   
            let addCartState = [...state].map(value => {
                if (value.goods_id === action.productList.goods_id) {
                    flag = true;
                    ++value.count;
                }
                return value;
            })
            return flag ?  addCartState : [...addCartState ,action.productList]
        case REMOVE_CART: // 删除购物车
            let cartListState = action.cartList;
            return cartListState;
        case CHANGE_QUANTITY:
            let newState = [...state].map(value => {
                if (value.goods_id === action.goodId) {
                    value.count = action.count;
                }
                return value;
            })
            return newState;
        case CHOICE_CHECKED:
            let choiceCheckedState = [...state].map(value => {
                if (value.goods_id === action.goodId) {
                    value.choiceChecked = !action.choiceChecked;
                }
                return value;
            })
            return choiceCheckedState;
        case ISCHECK_ALL:
            let isCheckAllState = [...state].map(value => {
                value.choiceChecked = !action.isCheckAll;
                return value;
            })
            return isCheckAllState;
        case GET_GART_LISTS:  // 获取所有商品
            return action.cartList;
        default:
            return state;
    }
    return state;
}
// 商品总数
function tipNum(state = initState.tip, action) {
    if (action.type== TIP_NUM) {
        return action.tip;
    }
    return state;
}
// 当前登录的用户名
function userInfo(state = initState.user_info, action) {
    if (action.type == USER_INFO) {
        return action.data;
    }
    return state;
}

// 获取省
function province(state = initState.province_list, action) {
    switch (action.type) {
        case GET_ADDADDRES_INDEX:
            return action.data;
        default:
            return state;
    }
    return state;
}
// 获取市
function municipality_list(state = initState.municipality_list, action) {
    switch (action.type) {
        case GET_ADDADDRES_CHILDREN:
            return action.data;
        default:
            return state;
    }
    return state;
}

// 获取区
function dstrict_list(state = initState.dstrict_list, action) {
    switch (action.type) {
        case GET_ADDADDRES_DSTRICT:
            return action.data;
        default:
            return state;
    }
    return state;
}

// 获取收货地址

function address_list(state = initState.address, action) {
    if (action.type == 'SET_ADDADDRES_ADDRESS') {
        console.log(action)
        return action.data;
    }
    return state;
}

export default combineReducers({
    cart_list,
    tipNum,
    userInfo,
    province,
    municipality_list,
    dstrict_list,
    address_list
})
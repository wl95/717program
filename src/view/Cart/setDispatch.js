import { ISCHECK_ALL, REMOVE_CART, GET_GART_LISTS } from '../../store/action'
import Cookies from 'js-cookie'
import $http from '../../utils/http'
export default function mapDispatchToProps(dispatch) {
    return {
        CheckedAll(isCheckAll) {
            dispatch({
                type:ISCHECK_ALL,
                isCheckAll
            })
        },
        onEditor(EditorGoodId) {
            // 删除商品
            $http.post("/commodity/mall/goods/removeCart",{EditorGoodId,token: Cookies.get('userInfo') || ''}).then(result => {
                dispatch({
                    type: REMOVE_CART,
                    cartList:result.data
                })
            })
        },
        getCartLists() {
            $http.get('/commodity/mall/goods/recommendgoods',{token: Cookies.get('userInfo') || ''}).then(result => {
                if (result.data && !result.code) {
                    dispatch({
                        type: GET_GART_LISTS,
                        cartList:result.data
                    })
                }
            })
        }
    }
}
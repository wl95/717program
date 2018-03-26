import { ADD_CART } from '../../store/action'
export default function mapDispatchToProps(dispatch) {
    return {
        onAddCart(productList) {
            dispatch({
                type: ADD_CART,
                productList: {
                    ...productList,
                    count: 1,
                    choiceChecked:false
                }
            })
        }
    }
}
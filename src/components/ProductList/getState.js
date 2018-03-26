import { ADD_CART } from '../../store/action'

export default function mapStateToProps(state) {
    return {
        cart_list:state.cart_list
    }
}
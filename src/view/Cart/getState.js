export default function mapStateToProps(state) {
    let total = 0;
    let isCheckAll = true;
    state.cart_list.forEach(value => {
        if (value.choiceChecked) {
            total += value.count * value.discount_price;
        }
        if (!value.choiceChecked) {
            isCheckAll = false;
        }
    })
    return {
        cartList: state.cart_list,
        total,
        isCheckAll
    }
}
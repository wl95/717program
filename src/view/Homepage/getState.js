export default function mapStateToProps(state) {
    var sum = 0;
    if(state.cart_list.length !== 0){
        state.cart_list.forEach(value => {
            sum += value.count;
        })
    } else {
        sum = state.tipNum
    }
    return {
        sum
    }
}
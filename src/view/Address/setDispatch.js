import Cookies from 'js-cookie'
export default function mapDispatchToProps(dispatch) {
    return {
        getAddress() {
            dispatch({
                type: 'WATCH_ADDADDRES_ADDRESS',
                token: Cookies.get('userInfo') || ''
            })
        }
    }
}
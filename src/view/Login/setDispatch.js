import { USER_INFO } from '../../store/action'
export default function mapDispatchToProps(dispatch) {
    return {
        setUserInfo(username) {
            dispatch({
                type: USER_INFO,
                data:username
            })
        }
    }
}
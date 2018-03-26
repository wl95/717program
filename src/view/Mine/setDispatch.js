import { USER_INFO } from '../../store/action'
import Cookies from 'js-cookie'
import  $http from '../../utils/http'
export default function mapDispatchToProps(dispatch) {
    return {
        getUserInfo() {
            $http.post('/users/user/getUserInfo', { token: Cookies.get('userInfo') || ''}).then(result => {
                if (!result.code) {
                    dispatch({
                        type: USER_INFO,
                        data:result.username
                    })
                }
            })
        }
    }
}
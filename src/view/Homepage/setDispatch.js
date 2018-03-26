import { TIP_NUM } from '../../store/action'
import Cookies from 'js-cookie'
import $http from '../../utils/http'
export default function mapDispatchToProps(dispatch) {
    return {
        getTip() {
            $http.get('/commodity/user/Cart/countCart',{token:Cookies.get('userInfo') || ''}).then(result => {
                if (result.data && !result.code) {
                    dispatch({
                        type: TIP_NUM,
                        tip:result.data
                    })
                }
            })
        }
    }
}
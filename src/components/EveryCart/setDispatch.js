import { CHANGE_QUANTITY, CHOICE_CHECKED } from '../../store/action'
import Cookies from 'js-cookie'
import $http from '../../utils/http'
export default function mapDispatchToProps(dispatch) {
    return {
        setCount(count, goodId) {
            $http.post('/commodity/mall/goods//setCount',{goodId,count,token: Cookies.get('userInfo') || ''}).then(result => {
                if (!result.code) {
                    dispatch({
                        type: CHANGE_QUANTITY,
                        count,
                        goodId
                    })
                }   
            })
            
        },
        selectChecked(goodId,choiceChecked) {
            dispatch({
                type: CHOICE_CHECKED,
                goodId,
                choiceChecked
            })
        }
    }
}
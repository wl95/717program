import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects'
import { GET_ADDADDRES_INDEX, GET_ADDADDRES_CHILDREN, GET_ADDADDRES_DSTRICT } from '../store/action'
import $http from '../utils/http'
// 省
function* fetchProvince() {
    try {
        let res = yield call($http.post, '/city/user/districts/index');
        yield put({
            type: GET_ADDADDRES_INDEX,
            data:JSON.parse(res).data
        })
    } catch (err) {
        yield put({
            type: GET_ADDADDRES_INDEX,
            data:err
        })
    }
}

function* watchProvince() {
    yield takeLatest('WATCH_ADDADDRES_INDEX', fetchProvince);
}
// 市和县
function* fetchMunicipality(mcdistrict) {
    try {
        let res = JSON.parse(yield call($http.post, '/city/user/districts/children', { china: "municipality", district_id: mcdistrict.district_id }));
        if (res.code_error === 1) {
            if (mcdistrict.china == 'district') {
                yield put({
                    type: GET_ADDADDRES_DSTRICT,
                    data:res.data
                })
            } else {
                yield put({
                    type: GET_ADDADDRES_CHILDREN,
                    data:res.data
                })
            }
        } else {
            yield put({
                type: GET_ADDADDRES_CHILDREN,
                data:res.msg
            })
        }
    } catch (err) {
        yield put({
            type: GET_ADDADDRES_CHILDREN,
            data:err
        })
    }
}

function* watchMunicipality() {
    yield takeLatest('WATCH_ADDADDRES_CHILDREN', fetchMunicipality);
}

// 储存
function* fetchAddInfo(addInfo) {
    try {
        let res = yield call($http.post, '/city/reserve/shipping/address', addInfo.china);
        console.log(res)
        yield put({
            type: 'SET_ADDADDRES_ADDINFO',
            data:res
        })
    } catch (err) {
        yield put({
            type: 'SET_ADDADDRES_ADDINFO',
            data:err
        })
    }
}

function*  watchAddInfo() {
    yield takeLatest('WATCH_ADDADDRES_ADDINFO',fetchAddInfo);
}
// 获取用户收货地址
function* fetchAddress(userInfo) {
    try {
        let res = yield call($http.post, '/city/reserve/shipping/gainAddress', { token: userInfo.token });
        yield put({
            type: 'SET_ADDADDRES_ADDRESS',
            data:res
        })
    } catch (err) {
        yield put({
            type: 'SET_ADDADDRES_ADDRESS',
            data:err
        })
    }
}

function* watchAddress() {
    yield takeLatest('WATCH_ADDADDRES_ADDRESS',fetchAddress);
}

export default function* rootSaga() {
    yield [watchProvince(),watchMunicipality(),watchAddInfo(),watchAddress()]
}
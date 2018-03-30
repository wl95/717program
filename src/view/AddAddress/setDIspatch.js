export default function mapDispatchToProps(dispatch) {
    return {
        getAddAddressIndex() {
            dispatch({
                type: 'WATCH_ADDADDRES_INDEX'
            })
        },
        getMunicipality(district_id) {
            dispatch({
                type: 'WATCH_ADDADDRES_CHILDREN',
                district_id,
                china:"municipality"
            })
        },
        getDistrict(district_id) {
            dispatch({
                type: 'WATCH_ADDADDRES_CHILDREN',
                district_id,
                china:"district"
            })
        },
        addInfos(addInfos) {
            dispatch({
                type: 'WATCH_ADDADDRES_ADDINFO',
                china:addInfos
            })
        }
    }
}
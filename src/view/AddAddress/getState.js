export default function mapStateToProps(state) {
    return {
        province: state.province,
        municipality_list: state.municipality_list,
        dstrict_list:state.dstrict_list
    }
}
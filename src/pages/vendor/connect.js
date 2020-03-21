import {VendorIndexAsyncAction} from "@actions/vendor/vendorActions"

export const mapStateToProps=(state)=>({
    vendorList:state.getIn(["vendor","vendorList"])
})

export const mapDispatchToProps=(dispatch)=>({
    handleGetVendorIndex(query){
        dispatch(VendorIndexAsyncAction(query))
    } 
})


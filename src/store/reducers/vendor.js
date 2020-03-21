import  immutable from "immutable"
import {handleActions}  from "redux-actions"
import {VendorIndexType}  from "@actions/vendor/vendorTypes"

let defaultState =immutable.fromJS({
    vendorList:[],
    notice:[],

})

export default handleActions({
    [VendorIndexType]:(state,actions)=>{
        console.log(actions,"VendorIndexType action")
        return state.updateIn(["vendorList"],_=>actions.data.objects||[])
    }
},defaultState)
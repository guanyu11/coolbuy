import  immutable from "immutable"
import {handleActions}  from "redux-actions"
import {HomeBannerType}  from "@actions/home/homeTypes"

let defaultState =immutable.fromJS({
    banner:[],
    notice:[],

})

export default handleActions({
    [HomeBannerType]:(state,actions)=>{
        console.log(actions,"HomeBannerType action")
        return state.updateIn(["banner"],_=>actions.data.objects||[])
    }
},defaultState)
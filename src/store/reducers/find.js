import immutable from "immutable"
import {handleActions}from "redux-actions"
import {CareChooseIndexType}from "@actions/find/findTypes"

let defaultData=immutable.fromJS({
    articleList:[]
})

export default handleActions({
[CareChooseIndexType]:(state,actions)=>{
    return state.updateIn(["articleList"],_=>actions.data)
}
},defaultData)
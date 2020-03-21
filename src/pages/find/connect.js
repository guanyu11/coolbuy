import {AsyncCareChooseIndexAction} from "@actions/find/findActions"

export const mapStateToProps =(state)=>({
    articleList:state.getIn(["find","articleList"])
})

export const mapDispatchToProps =(dispatch)=>({
   handleCareChooseIndex(query){
    dispatch(AsyncCareChooseIndexAction(query))
   }
})
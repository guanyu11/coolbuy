import {HomeBannerAsyncAction} from "@actions/home/homeActions"

export const mapStateToProps=(state)=>({
    banner:state.getIn(["home","banner"])||[]
})

export const mapDispatchToProps=(dispatch)=>({
    handleGetHomeBanner(){
        dispatch(HomeBannerAsyncAction())
    }
})
import {    vendorIndexApi} from "@api/api"
import {    VendorIndexType} from "./vendorTypes.js"

export const VendorIndexAsyncAction = (query)=> {
    const VendorIndexAction = (data) => ({
        type: VendorIndexType,
        data
    })

    return async (dispatch)=>{
      
        let data = await vendorIndexApi(query);
        console.log(data,"HomeBannerAsyncAction")
        dispatch(VendorIndexAction(data))
    }

}
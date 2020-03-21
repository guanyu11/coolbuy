import http from  "@utils/request.js"
import api from "./index"
// {HotArtIndexApi, CareChooseIndexApi,CareChooseProApi,
export const HomeBannerApi=(data)=>{
    return http.get(api.home.banner,data)
}
export const vendorIndexApi=(data)=>{
    return http.get(api.vendor.index,data)
}
//每日精选
export const CareChooseIndexApi=(data)=>{
    return http.get(api.find.careChoose,data)
}
//每日精选横图部分

export const CareChooseProApi=(data)=>{
    return http.get(api.find.careChoosePro,data)
}

export const HotArtIndexApi=(data)=>{
    // return http.get(api.find.careChoosePro,data)
}
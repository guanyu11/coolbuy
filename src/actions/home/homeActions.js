import {
    HomeBannerApi
} from "@api/api"
import {
    HomeBannerType
} from "./homeTypes.js"

export const HomeBannerAsyncAction = (query) => {
    const HomeBannerAction = (data) => ({
        type: HomeBannerType,
        data
    })
    return async (dispatch) => {
        let query = {
            limit: 10,
            offset: 0,
            banner_type: "banner",
            img_size: "medium",
            platform: "mobile"
        }
        let data = await HomeBannerApi(query);
        console.log(data, "HomeBannerAsyncAction")
        dispatch(HomeBannerAction(data))
    }

}
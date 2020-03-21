import {
    HotArtIndexType,
    CareChooseIndexType
} from "./findTypes"
import {
    HotArtIndexApi,
    CareChooseIndexApi,
    CareChooseProApi,
} from "@api/api"

export const AsyncCareChooseIndexAction = (query) => {
    const CareChooseIndexAction = (data) => ({
        type: CareChooseIndexType,
        data
    })
    let proQuery = {
        id__in: "10228,10414,10401",
        product_status: "all",
        limit: 3,
    }
    return async (dispatch) => {
        let data = await CareChooseIndexApi(query);
        // console.log(data, "data find")
        let list = data.objects;
        // console.log(list, "list")
        for (let i = 0; i < list.length; i++) {
            let product = list[i].component[2].product;
            if (product.length > 3) {
                proQuery.id__in = product.slice(0, 3).join();
                // console.log(proQuery, "proQuery")
                let dataPro = await CareChooseProApi(proQuery)
                let productList = dataPro.objects;
                let arr = [];
                productList.forEach((item) => {
                    arr.push(item.cover_image)
                })
                list[i].cover_image = arr;
            }
        }
        // console.log(list, "list end")


        dispatch(CareChooseIndexAction(list))
    }
}
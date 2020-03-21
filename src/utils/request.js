import {
    fetch as fetchPro
} from "whatwg-fetch"
//简化qs.stringify
function myParams(obj) {
    return Object.keys(obj).map(function (item) {
        return item + '=' + obj[item];
    }).join('&');
}

const get = (url, data) => {
    var str = "";
    for (let key in data) {
        str += "&"+ key + "=" + data[key] 
    }
    url = url + "?" + str.slice(1);

    var result = fetchPro(url, {
        //credentials: 'include'允许将凭据发送到其他域：
        //默认值为credentials“ same-origin”
        credentials: "include",
        headers: {
            'Accept': 'application/json, text/plain, */*',
        },
    }).then(res=> res.json())
    return result
}

const post = (url, data) => {
    var result = fetchPro(url, {
        method: "POST",
        credentials: "include",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:myParams(data)
    })
}
export default {
    get,
    post
}
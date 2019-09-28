import {message} from 'antd';

function getPostPamras(query) {
    if (typeof query === 'string') return query
    if (typeof query === 'object' && query) {
        let str = ''
        for (let key in query) {
            // 判断为数组
            if (Object.prototype.toString.call(query[key]) === '[Object Array]') {
                query[key].forEach( element => {
                    if (str !== '') {
                        str = str + '&' + key + '=' + element
                    } else {
                        str = key + '=' + query[key]
                    }
                });
            } else {
                if (str !== '') {
                    str = str + '&' + key + '=' + query[key]
                } else {
                    str = key + '=' + query[key]
                }
            }
        }
        return str
    }
    return ''
}

/**
 * 真正的请求
 * @param url 请求地址
 * @param options 请求参数
 * @param method 请求方式
 */

//  function commonFetcdh(url, options, method = 'GET') {
//     let searchStr = getPostPamras(options)
//     let initObj = {}
//     if (method === 'GET') {
//         url = url + '?' + searchStr
//         initObj = {
//             method: 'GET',
//             credentials: 'include'
//         }
//     } else {
//         initObj = {
//             method: 'POST',
//             credentials: 'include',
//             headers: new Headers({
//                 // 'Accept': 'application/json',
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }),
//             body: searchStr
//         }
//     }
//     // let response = await fetch(url, initObj)
//     // let responseJson = await response.json()
//     // console.log(responseJson)
//     // return responseJson
//     return fetch(url, initObj).then((res) => {
//         return res.json()
//     }).then((res) => {
//         console.log(res)
//         return res
//     })
// }
async function commonFetcdh(url, options, method = 'GET') {
    let searchStr = getPostPamras(options)
    console.log('====================================');
    console.log(searchStr);
    console.log('====================================');
    let initObj = {}
    if (method === 'GET') {
        url = url + (searchStr === '' ? '' : '?' + searchStr)
        initObj = {
            method: 'GET',
            credentials: 'include'
        }
    } else {
        initObj = {
            method: 'POST',
            credentials: 'include',
            headers: new Headers({
                // 'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body: searchStr
        }
    }
    try {
        let response = await fetch(url, initObj)
        console.log('返回信息', response);
        console.log('====================================');
        let responseJson = await response.json()
        console.log(responseJson)
        if (responseJson.success) {
            return responseJson
        } else {
            // alert(responseJson.message)
            return ''
        }
    } catch (e) {
        console.error(e)
        // alert('请求出错')
        message.error('请求出错');
    }
}

/**
 * GET请求
 * @param url 请求地址
 * @param options 请求参数
 */
export function getItems(url, options) {
    return commonFetcdh(url, options, 'GET')
}

/**
 * POST请求
 * @param url 请求地址
 * @param options 请求参数
 */
export function postItems(url, options) {
    return commonFetcdh(url, options, 'POST')
}
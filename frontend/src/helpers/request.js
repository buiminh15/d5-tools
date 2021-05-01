import config from "../d5.config";
import axios from 'axios';

async function request(endpoint, params, method) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (params) {
        if (method === "GET") {
            endpoint += "?" + objectToQueryString(params);
        } else {
            options.body = JSON.stringify(params);
        }
    }

    return await fetch(config.HOST + endpoint, options);
}

function objectToQueryString(obj) {
    return Object.keys(obj).map(key => key + "=" + obj[key]).join("&");
}

// function get(url, params) {
//     return request(url, params);
// }

// function post(url, params) {
//     return request(url, params, "POST");
// }
function get(url, params) {
    return request(url, params);
}
function post(url, params) {
    return axios.post(`${config.HOST + url}`, params)
}

export default {
    get,
    post
};
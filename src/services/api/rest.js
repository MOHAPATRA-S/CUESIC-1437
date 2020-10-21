import {baseUrl} from "./apiServer"

export default function api(variables, method, apiMethod, token) {

    var init = apiMethod === "GET" ? {
        method: "GET",
        headers: {
            'Content-Type': "application/json",
            'token': token ? token : '',
            'Authorization': token ? token : ''
        }
    } :
        {
            method: apiMethod,
            headers: {
                'Content-Type': "application/json",
                'token': token ? token : '',
                'Authorization': token ? token : ''
            },
            body: JSON.stringify(variables)
        }


      

    return fetch(baseUrl + method, init)
        .then(res => res.json()
            .then(data => {
                var apiData = {
                    status: res.status,
                    data: data
                }
                return apiData;
            }))
        .catch(err => {
           
            var apiData = {
                status: 900,
                data: "please check your internet connection"
            }
            return apiData
        });
};

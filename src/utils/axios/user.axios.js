import axios from 'axios';

const BASE_URL = "";

const userAxios = axios.create({
    baseURL: BASE_URL,
});

export default class UserApiSerivice {


    static async post(action, params) {
        let response = await userAxios.post(action, params)
        return response.data
    }
    static async put(action, params) {
        let response = await userAxios.put(action, params)
        return response.data
    }
    static async get(action) {
        let response = await userAxios.get(action)
        return response.data
    }
    static async delete(action) {
        let response = await userAxios.delete(action)
        return response.data
    }
    static async patch(action, params) {
        let response = await userAxios.patch(action, params)
        return response.data
    }


}

// axios.interceptors.request.use(async (config) => {
//     // Do something before request is sent
//     const token = await getLocalData("token");
//     config.headers.common['Authorization'] = token ? 'Bearer ' + token : '';
//     return config;
// }, (error) => {
//     // Do something with request error
//     return Promise.reject(error);
// });


axios.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
}, (error) => {

    // // Any status codes that falls outside the range of 2xx cause this function to trigger
    // // Do something with response error

    const { response } = error;
    // const originalRequest = config;

    if (response.status === 401 || response.status === 404) {

        return Promise.reject(error);
    }
    else {
        return Promise.reject(error);
    }
});


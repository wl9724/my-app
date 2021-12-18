import axios from "axios";
const api_server = 'https://127.0.0.1:8000'
class dataservice {
    callApi = async function (api_name, api_params, method = 'get') {
        let url = api_server + '/' + api_name;
        try {
            const response = axios({ method: method, url: url, data: api_params })
            return response.data
        } catch (error) {
            console.error(error)
        }
    }
}

export default dataservice;
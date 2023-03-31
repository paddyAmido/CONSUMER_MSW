import axios from 'axios';
import adapter from "axios/lib/adapters/http";

axios.defaults.adapter = adapter;

export class API {

    constructor(url) {
        if (url === undefined || url === "") {
            url = process.env.REACT_APP_API_BASE_URL;
        }
        if (url.endsWith("/")) {
            url = url.substr(0, url.length - 1)
        }
        this.url = url
    }

    withPath(path) {
        if (!path.startsWith("/")) {
            path = "/" + path
        }
        return `${this.url}${path}`
    }

    generateAuthToken() {
        return "Bearer " + new Date().toISOString()
    }

    async getAllqas() {
        return axios.get(this.withPath("/QAs"), {
            headers: {
                "Authorization": this.generateAuthToken()
            }
        })
            .then(r => r.data);
    }

    async getQA(id, params) {
        return axios.get(this.withPath("/QA/" + id), {
            params,
            headers: {
                "Authorization": this.generateAuthToken()
            }
        })
            .then(r => r.data);
    }

    async postQA(id, QAData) {
        return await axios.post(this.withPath("/QAs/" + id), QAData, {
            headers: {
                "Authorization": this.generateAuthToken(),
            }
        })
            .then(r => r.data);
    }
}

export default new API(process.env.REACT_APP_API_BASE_URL);


import QS from 'qs'
import Axios from './axios'
export default {
    get(url, params, cfig = {}) {
        return Axios.get(url, { params: params, ...cfig });
    },
    post(url, params, cfig) {
        return Axios.post(url, QS.stringify(params), cfig);
    },
    postJson(url, params, cfig) {
        return Axios.post(url, params, cfig);
    },
    putJson(url, params, cfig) {
        return Axios.put(url, params, cfig);
    },
    delete(url, params, cfig) {
        return Axios.delete(url, { params: params }, cfig);
    },
}
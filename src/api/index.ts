import { message } from "ant-design-vue";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ZM_AJAX_NOT_LOGIN, ZM_AJAX_SUCCESS_CODE } from "./constant";
axios.defaults.withCredentials = true;  // 允许携带cookie

interface ZmAxiosInstance extends AxiosInstance {
    zmGet<T = any, R = ZMResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    zmPost<T = any, R = ZMResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
    zmPut<T = any, R = ZMResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
}

const zmAjax: ZmAxiosInstance = axios.create({}) as ZmAxiosInstance;

zmAjax.zmGet = (url: string, config?: AxiosRequestConfig) => {
    return zmAjax.get(url, config);
}
zmAjax.zmPost = (url: string, data?: any, config?: AxiosRequestConfig) => {
    return zmAjax.post(url, data, config);
}
zmAjax.zmPut = (url: string, data?: any, config?: AxiosRequestConfig) => {
    return zmAjax.put(url, data, config);
}

zmAjax.defaults.baseURL = location.protocol + "//" + location.host;
zmAjax.defaults.timeout = 5000;
zmAjax.defaults.headers = {
    "X-Requested-With": "XMLHttpRequest"
}

zmAjax.interceptors.response.use(response => {
    //成功回调
    if (response.data.code !== ZM_AJAX_SUCCESS_CODE) {
        //错误处理
        switch (response.data.code) {
            case ZM_AJAX_NOT_LOGIN:
                window.location.href = "/login?redirectUrl=" + encodeURIComponent(location.href);
                break;
            default:
                message.error(response.data.message)
                break;
        }
    }
    return response.data;
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
})


export default zmAjax

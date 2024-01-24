import axios, { AxiosRequestConfig } from "axios";
import { get_Token } from "../componenets/utils";

export async function axiosCall(baseApi: string, method: any, payload?: any) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
  const instance: any = axios.create({
    baseURL: baseApi,

  });

  instance.interceptors.request.use(
    function (config: any) {
      const AUTH_TOKEN = get_Token();
      if (AUTH_TOKEN) {
        config.headers["Authorization"] = AUTH_TOKEN;
      }
      return config;
    },
    function (error: any) {
      return Promise.reject(error);
    }
  );


  const resp = await instance[method](payload);
  return resp;
}

export default axiosCall;

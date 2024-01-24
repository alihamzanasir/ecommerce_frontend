import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from "axios";

class baseAPi {
  axios: AxiosInstance;

  constructor(baseUrl?: string) {
    // @ts-ignore
    axios.interceptors.request.use(this.errorHandling, this.configure);

    axios.interceptors.response.use(
      (resp: AxiosResponse) => resp,
      (error: AxiosError) => this.HandleResponseError(error)
    );

    // axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
    this.axios = axios.create({
      baseURL: baseUrl || "https://jsonplaceholder.typicode.com/",
    });
  }
  private configure(config: AxiosRequestConfig) {}

  private errorHandling() {}

  private HandleResponseError(error: AxiosError) {
    console.log(error.message, "............");
  }
}

export { baseAPi };

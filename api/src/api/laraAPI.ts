import axios, { AxiosRequestConfig, Method } from "axios";

interface RequestOptions<ReqBody, ResBody> {
  endpoint: string;
  method?: Method;
  headers?: Record<string, string>;
  body?: ReqBody;
}

export class LaraAPI {
  private readonly baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    if (!this.baseURL) {
      throw new Error("baseURL must be defined");
    }
  }

  public async request<ReqBody = unknown, ResBody = unknown>(
    options: RequestOptions<ReqBody, ResBody>
  ): Promise<ResBody> {
    const { endpoint, method = "GET", headers, body } = options;

    const config: AxiosRequestConfig = {
      url: endpoint,
      method,
      baseURL: this.baseURL,
      headers,
      data: body,
    };

    const response = await axios.request<ResBody>(config);

    return response.data;
  }
}

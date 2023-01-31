import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { notification } from "antd";

import { SERVICE_API } from "constants/path.api";
import { localStorageKey } from "constants/key.storage";
import { getLocalStorageItem } from "helpers/storage";

export const unauthorizedRequest = axios.create({
  baseURL: SERVICE_API,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
});

unauthorizedRequest.interceptors.request.use(
  (request: AxiosRequestConfig) => request.data,
  async (exception) => await Promise.reject(exception)
);

unauthorizedRequest.interceptors.response.use(
  (response: AxiosResponse<any>) => response,
  async (exception) => {
    if (
      exception.response.status === 404 ||
      exception.response.status === 500
    ) {
      notification.error({
        message: "Hệ thống đang gặp lỗi. Vui lòng thử lại sau"
      });
    }
    return await Promise.reject(exception.response.data);
  }
);

export const authorizedRequest = axios.create({
  baseURL: SERVICE_API,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
});

authorizedRequest.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    request.timeoutErrorMessage =
      "Phiên đăng nhập đã hết hạn. Vui lòng thử lại sau";
    const token = getLocalStorageItem(localStorageKey.TOKEN);
    if (request.headers) request.headers.Authorization = `Bearer ${token}`;
    return request.data;
  },
  async (exception) => await Promise.reject(exception)
);

authorizedRequest.interceptors.response.use(
  (response: AxiosResponse<any>) => response,
  async (exception) => {
    if (
      exception.response.status === 404 ||
      exception.response.status === 500
    ) {
      notification.error({
        message: "Hệ thống đang gặp lỗi. Vui lòng thử lại sau"
      });
    }
    return await Promise.reject(exception.response.data);
  }
);

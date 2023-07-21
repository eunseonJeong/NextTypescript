import { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponseHeaders } from 'axios';
export interface LoginInfo {
  email: string;
  password: string;
}

export interface Logout {
  logout: () => void;
}

export interface AxiosError {
  config: AxiosRequestConfig;
  code: string;
  message: string;
  name: string;
  isAxiosError: boolean;
  response: AxiosResponse;
  request: AxiosRequestHeaders;
}
export interface AxiosResponse {
  data: { data: null; errorCode: string; message: string; statusCode: number };
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig;
}

export interface DataType {
  _id: number | string;
  email: number | string;
  password: number | string;
}

export interface KeyType {
  [key: string]: string;
}

export interface IAData {
  email: string;
  password: string;
}

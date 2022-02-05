import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { JSONObject } from '../constants/api/json';

const invokeRequest = async (
    request: () => Promise<AxiosResponse>
)  => {
    const response = await request();

    return response.data;
};

const axiosClient = axios.create({});

const baseURL = 'http://localhost:8080/'

const get = async(path: string, params?: JSONObject): Promise<unknown> => {
    const requestURL = baseURL + path
    const request = (): Promise<AxiosResponse> => axiosClient.get(requestURL, { params });

    return await invokeRequest(request);
}

const post = async(path: string, data: JSONObject): Promise<unknown> => {
    const request = (): Promise<AxiosResponse> => axiosClient.post(path, data);

    return await invokeRequest(request);
}

export const rest = {
    get,
    post
}
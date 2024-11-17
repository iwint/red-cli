'use client';

import { BASE_URL } from '@/constants/definitions';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookie from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

export const request = async (options: AxiosRequestConfig<any>) => {
    let token = Cookie.get('token');

    //* check if the token is null or not
    if (token !== null) {
        //* if not null - set Bearer token
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    const onSuccess = (response: AxiosResponse) => response.data;
    const onError = (response: AxiosResponse) => Promise.reject(response.data);

    //* options will contain the request type and data
    return axiosInstance(options).then(onSuccess).catch(onError);
};

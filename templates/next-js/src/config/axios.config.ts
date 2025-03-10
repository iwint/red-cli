'use client';

import { BASE_URL } from '@/constants/definitions';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookie from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: `${BASE_URL}/api/recruiter`,
    withCredentials: true,
});

export const request = async (options: AxiosRequestConfig<any>) => {
    let token = Cookie.get('token');

    //* check if the token is null or not
    if (token !== null) {
        //* if not null - set Bearer token
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    if (options.data instanceof FormData) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'multipart/form-data',
        };
    }

    const onSuccess = (response: AxiosResponse) => response.data;
    const onError = (response: any) => {
        if (response.status === 401) {
            Cookie.remove('token');
            window.location.href = '/login';
        }
        return Promise.reject(response?.response?.data);
    };

    //* options will contain the request type and data
    return axiosInstance(options).then(onSuccess).catch(onError);
};

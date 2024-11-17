import { BASE_URL } from '@constants/definitions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});
console.log('🚀 ~ file: request.ts:8 ~ BASE_URL:', BASE_URL);

export const request = async (options: AxiosRequestConfig<any>) => {
    let token = await AsyncStorage.getItem('token');

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

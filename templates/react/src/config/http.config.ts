import { request } from '@/config/axios.config';

async function getRequest<T>(endpoint: string) {
    const response = await request({
        method: 'GET',
        url: endpoint,
    });
    return response;
}

async function postRequest<T>(endpoint: string, data?: T) {
    const response = await request({
        method: 'POST',
        url: endpoint,
        data: data,
    });
    return response;
}

async function putRequest<T>(endpoint: string, data: T) {
    const response = await request({
        method: 'PUT',
        url: endpoint,
        data: data,
    });
    return response;
}

async function deleteRequest(endpoint: string) {
    const response = await request({
        method: 'DELETE',
        url: endpoint,
    });
    return response;
}

export { getRequest, postRequest, putRequest, deleteRequest };

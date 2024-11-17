import axiosClient from "./axios-client";
import { Endpoints } from "./request-type";


export const requestActions = {
    GET_API: (endpoint: Endpoints) => {
        return new Promise((resolve, reject) => {
            const respones = axiosClient.get(endpoint)
            respones.then((res) => {
                if (res.status === 200 || res.status === 201) {
                    resolve(res.data)
                } else {
                    reject(res)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    },

    POST_API: (endpoint: Endpoints, data: any) => {
        return new Promise((resolve, reject) => {
            const respones = axiosClient.post(endpoint, data)
            respones.then((res) => {
                if (res.status === 200 || res.status === 201) {
                    resolve(res.data)
                } else {
                    reject(res)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    },

    PUT_API: (endpoint: Endpoints, data: any) => {
        return new Promise((resolve, reject) => {
            const respones = axiosClient.put(endpoint, data)
            respones.then((res) => {
                if (res.status === 200 || res.status === 201) {
                    resolve(res.data)
                } else {
                    reject(res)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    },

    DELETE_API: (endpoint: Endpoints) => {
        return new Promise((resolve, reject) => {
            const respones = axiosClient.delete(endpoint)
            respones.then((res) => {
                if (res.status === 200 || res.status === 201) {
                    resolve(res.data)
                } else {
                    reject(res)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    }
}
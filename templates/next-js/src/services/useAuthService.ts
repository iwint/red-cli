'use client';

import { useSendData } from '@/api/helper';
import { request } from '@/api/request';
import { useGoogleLogin } from '@react-oauth/google';
import toast from 'react-hot-toast';
import Cookie from 'js-cookie';

export const useAuthService = () => {
    //* This function is used to handle the login with Google access token
    const handleLogin = async (response: any) => {
        const result = await request({
            method: 'POST',
            url: '/user/login',
            headers: {
                Authorization: `Bearer ${response.access_token}`,
            },
        });
        return result;
    };

    //* This function is used to handle the login with Google access token
    const { mutate: login, isPending: isLoginPending } = useSendData({
        fn: handleLogin,
        invalidateKey: ['login'],
        success: data => {
            //* Routing and toast
            toast.success('Login successful');
            Cookie.set('token', data.token);
            console.log('🚀 ~ file: useAuthService.ts:21 ~ useAuthService ~ data:', data);
        },
        error: data => {
            toast.error('Login failed');
        },
    });

    //* This function is used to handle the Google login
    const handleGoogleLogin = useGoogleLogin({
        onSuccess: async response => login(response),
    });

    return { handleGoogleLogin, isLoginPending };
};

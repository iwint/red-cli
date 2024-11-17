'use client';

import { useSendData } from '@api/helper';
import { request } from '@api/request';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useAppStore } from '@store/useAppStore';
import { useToast } from 'react-native-toast-notifications';

export const useAuthService = () => {
    const toast = useToast();

    const { setUserData } = useAppStore();
    //* This function is used to handle the login with Google access token
    const handleLogin = async (response: any) => {
        const result = await request({
            method: 'POST',
            url: '/user/signup',
            headers: {
                Authorization: `Bearer ${response.access_token}`,
            },
        });
        return result;
    };

    //* This function is used to handle the Google login
    const handleGoogleLogin = async () => {
        const userInfo = await GoogleSignin.signIn();
        return userInfo;
    };

    const handleSuccess = async (data: any) => {
        setUserData(data);
        await AsyncStorage.setItem('token', data.access_token);
        await handleLogin(data).then(() => {
            toast.show('Login Successful', { type: 'success' });
        });
    };

    //* This function is used to handle the login with Google access token
    const { mutate: login, isPending: isLoginPending } = useSendData({
        fn: handleGoogleLogin,
        success: handleSuccess,
        error: data => {
            toast.show('Login Failed', {
                type: 'danger',
            });
        },
    });

    return { login, isLoginPending };
};

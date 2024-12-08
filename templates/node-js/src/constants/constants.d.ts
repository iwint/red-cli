type UserRoutes = {
    profile: string;
    register: string;
    login: string;
    otp: string;
    verifyOtp: string;
};

export type ResponseMessageForRoutes = {
    users: UserRoutes;
};

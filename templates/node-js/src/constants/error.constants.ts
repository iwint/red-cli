import { ResponseMessageForRoutes } from "./constants";

const errorMessageConstants: ResponseMessageForRoutes = {
    users: {
        profile: "User profile details not found",
        login: "Invalid login credentials",
        register: "User already exists",
        verifyOtp: "Invalid OTP",
        otp: "Send OTP failed",
    },
};

export default errorMessageConstants;

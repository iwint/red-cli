import { ResponseMessageForRoutes } from "./constants";

const responseConstants: ResponseMessageForRoutes = {
    users: {
        profile: "User profile details",
        register: "User registered succcessfully",
        login: "User logged in successfully",
        otp: "OTP sent successfully",
        verifyOtp: "OTP verified successfully",
    },
};

export default responseConstants;

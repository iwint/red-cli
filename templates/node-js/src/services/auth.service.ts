import jwt from "jsonwebtoken";
import envConfig from "../config/env";
import { OTP, Token } from "../models";
import { LoginRequest, SendEmailParams, User } from "../@types/user";
import nodemailer from "nodemailer";
import env from "../config/env";
import ApiError from "../utils/api-error";
import httpStatus from "http-status";
import otpGenerator from "otp-generator";
import userService from "./user.service";

const generateAuthToken = async (userId: any) => {
    const token = jwt.sign({ sub: userId }, envConfig.jwt.secret);
    return await Token.create({
        token: token,
        user: userId,
    });
};

const sendVerificationEmail = async ({ email, otp }: SendEmailParams) => {
    //TODO: Need to revamp this email template
    try {
        const subject = "OTP Verfication from RED's Chatify";
        const body = otp;
        const mailTransporter = nodemailer.createTransport({
            host: env.email.smtp.host,
            auth: env.email.smtp.auth,
            service: "gmail",
        });
        const response = await mailTransporter.sendMail({
            from: {
                address: env.email.from,
                name: "Chatify",
            },
            to: email,
            subject: subject,
            html: body,
        });
        return response;
    } catch (err: any) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, err);
    }
};

const sendOtp = async (user: User) => {
    if (!user) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Invalid email");
    }
    const isOTPSent = saveOtp(user.email);
    if (!isOTPSent) throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "OTP failed. Please try again");
    return {
        message: `OTP sent to ${user.email}`,
        user: user,
    };
};

const saveOtp = async (email: string) => {
    const otp = await otpGenerator.generate(6, {
        digits: true,
        lowerCaseAlphabets: false,
        specialChars: false,
        upperCaseAlphabets: false,
    });
    const isOTPExist = await OTP.findOne({ email }); // Check if OTP already exists for the user
    if (isOTPExist) return true; // If OTP already exists, return false
    const response = await OTP.create({
        email: email,
        otp: otp,
    });
    return response;
};

const verifyOtp = async ({ email, otp }: SendEmailParams): Promise<boolean> => {
    const result = await OTP.findOne({ email });
    return result?.otp === otp;
};

const loginUserWithEmailAndPassword = async ({ email, password }: LoginRequest) => {
    const user = await userService.getUserByEmail(email);
    if (!(await user.isPasswordMatch(password))) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid password");
    } else if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    return user;
};

export default {
    loginUserWithEmailAndPassword,
    sendVerificationEmail,
    generateAuthToken,
    sendOtp,
    verifyOtp,
};

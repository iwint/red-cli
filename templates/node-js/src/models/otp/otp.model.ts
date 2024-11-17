import mongoose from "mongoose";
import { authService } from "../../services";
import { OTPModelType } from "./otp";

const otpSchema = new mongoose.Schema<OTPModelType>({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
        expires: 60 * 3,
    },
    otp: {
        type: String,
        required: true,
        maxlength: 6,
    },
});

otpSchema.pre("save", async function (next) {
    if (this.isNew) {
        await authService.sendVerificationEmail({
            email: this.email,
            otp: this.otp,
        });
    }
    next();
});

const OTP = mongoose.model<OTPModelType>("OTP", otpSchema);

export default OTP;

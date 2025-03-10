import mongoose from "mongoose";

interface IUser {
    user_id: string;
    name: string;
    username: string;
    password: string;
    email: string;
    role: "ADMIN" | "USER";
    created_at: Date;
    updated_at: Date;
}

const userSchema = new mongoose.Schema<IUser>(
    {
        user_id: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        role: { type: String, required: true, enum: ["ADMIN", "USER"], default: "USER" },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
        toJSON: {
            transform: (doc, ret) => {
                delete ret.password;
                delete ret.__v;
            },
        },
    }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;

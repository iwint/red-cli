import { Document, Model, ObjectId } from "mongoose";

type UserModelType = Document & {
    user_id: ObjectId;
    name: string;
    email: string;
    password: string;
    phone: number;
    about: string;
    image_url: string;
    created_at: Date;
    updated_at: Date;
    isPasswordMatch(password: string): Promise<boolean>;
};

type UserModelStatics = Model<UserModelType> & {
    isEmailTaken(email: string, excludeUserId?: ObjectId): Promise<boolean>;
}

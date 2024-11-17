import { RequestHandler } from "express";
import passport from "passport";
import ApiError from "../utils/api-error";
import httpStatus from "http-status";
import logger from "../config/logger";

const verifyCallBack =
    (req: any, resolve: any, reject: any): passport.AuthenticateCallback =>
    (err, user, info) => {
        if (err || info || !user) {
            return reject(new ApiError(httpStatus.UNAUTHORIZED, "Invalid credentials"));
        }
        req.user = user;
        resolve();
    };

const auth = (): RequestHandler => (req, res, next) => {
    logger.info(req.headers);
    return new Promise((resolve, reject) => {
        passport.authenticate("jwt", { session: false });
    })
        .then(() => next())
        .catch((err) => next(err));
};

export default auth;

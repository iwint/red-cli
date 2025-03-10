import { NextFunction, Request, Response } from "express";
import passport from "passport";
import ApiError from "../utils/api-error";
import httpStatus from "http-status";

const verifyCallback =
    (req: any, resolve: any, reject: any): passport.AuthenticateCallback =>
    (err, user, info) => {
        if (err || info || !user) {
            return reject(new ApiError(httpStatus.UNAUTHORIZED, "Invalid credentials"));
        }
        req.user = user;
        resolve();
    };

const auth = async (req : Request, res : Response, next : NextFunction) => {
    return new Promise((resolve, reject) => {
        passport.authenticate("jwt", { session: false }, verifyCallback(req, resolve, reject))(req, res, next);
    })
        .then(() => next())
        .catch((err) => next(err));
};

export default auth;

import express, { Application } from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import routes from "../routes";
import { errorConverter, errorHandler } from "../middlewares/error.mw";
import envConfig from "./env";
import morgan from "./morgan";
import cors from "cors";
import passport from "passport";
import jwtStrategy from "./passport";

const ExpressConfig = (): Application => {
    const app = express();

    //* Morgan config is used to log the requests
    if (envConfig.env !== "test") {
        app.use(morgan.successHandler);
        app.use(morgan.errorHandler);
    }

    //* Handle cors
    app.use(cors());
    app.options("*", cors());

    //* Handle jwt auth
    app.use(passport.initialize());
    passport.use("jwt", jwtStrategy);

    app.use(compression());
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api/v1", routes);
    app.use(errorHandler);
    app.use(errorConverter);
    return app;
};

export default ExpressConfig;

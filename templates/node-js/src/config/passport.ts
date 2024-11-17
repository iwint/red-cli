import { ExtractJwt, Strategy, StrategyOptions, VerifiedCallback } from "passport-jwt";
import envConfig from "./env";
import { User } from "../models";

const passportOptions: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: envConfig.jwt.secret,
};

const jwtVerify: VerifiedCallback = async (payload, done: any) => {
    try {
        console.log("PAYLOAD OF JWT STRATEGY:", payload);

        const user = await User.findById({ _id: payload.sub });
        if (!user) {
            return done(null, false);
        }
        done(null, user);
    } catch (err) {
        done(err, false);
    }
};

const jwtStrategy = new Strategy(passportOptions, jwtVerify);

export default jwtStrategy;

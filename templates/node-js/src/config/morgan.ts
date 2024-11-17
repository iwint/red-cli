import morgan from "morgan";
import envConfig from "./env";
import logger from "./logger";

morgan.token("message", (_, res: any) => res?.locals?.errorMessage || "");
const getIpFormat = () => (envConfig.env === "production" ? ":remote-addr -" : "");
const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`;
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;

const successHandler = morgan(successResponseFormat, {
    skip: (_, res) => res.statusCode >= 400,
    stream: { write: (message) => logger.info(message.trim()) },
});

const errorHandler = morgan(errorResponseFormat, {
    skip: (_, res) => res.statusCode < 400,
    stream: { write: (message) => logger.error(message.trim()) },
});

export default { successHandler, errorHandler };

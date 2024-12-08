import swaggerUI from "swagger-ui-express";
import { Application } from "express";
import logger from "./logger";

function swaggerDocs(app: Application, port: number) {
    // Serve Swagger UI
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(require('../docs/swagger.json'), {
        swaggerOptions: {
            persistAuthorization: true,
        },
        customSiteTitle: 'API Documentation'
    }));

    logger.info(`📝 Swagger docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;

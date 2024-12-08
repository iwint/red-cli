import swaggerAutogen from "swagger-autogen"
import envConfig from "../config/env"
import { version } from "../../package.json"

const doc = {
    info: {
        title: envConfig.app.title,
        version,
        description: "API Documentation",
        contact: {
            name: "API Support",
            email: envConfig.email.from
        }
    },
    servers: [
        {
            url: `http://localhost:${envConfig.port}`,
            description: "Development server"
        }
    ],
    basePath: "/api/v1",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
        {
            name: "Auth",
            description: "Authentication endpoints"
        },
        {
            name: "Users",
            description: "User management endpoints"
        },
        {
            name: "Chats",
            description: "Chat related endpoints"
        }
    ],
    securityDefinitions: {
        bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT"
        }
    },
    definitions: {
        User: {
            name: "John Doe",
            email: "john@example.com",
            password: "password123",
            phone: 1234567890,
            image_url: "https://example.com/image.jpg",
            about: "Hi I am using Chatify"
        },
        Error: {
            code: 500,
            message: "Error message"
        }
    }
}

const outputFile = "./src/docs/swagger.json"
const endpointsFiles = [
    "./src/routes/v1/auth.route.ts",
    "./src/routes/v1/users.route.ts",
    "./src/routes/v1/chats.route.ts"
]

const generateDocs = async () => {
    try {
        await swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc)
        console.log("📝 Swagger documentation generated successfully")
    } catch (error) {
        console.error("Error generating swagger documentation:", error)
    }
}

// Generate docs if this file is run directly
generateDocs()

export default generateDocs

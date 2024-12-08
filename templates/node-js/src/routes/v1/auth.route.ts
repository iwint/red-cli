import express from "express";
import authController from "../../controllers/auth.controller";

const router = express.Router();

/**
 * @desc Register a new user
 * @route POST /api/v1/auth/register
 * @access Public
 *
 * @swagger
 *   #swagger.tags = ['Auth']
 *   #swagger.summary = 'Register new user'
 *   #swagger.requestBody = {
 *       required: true,
 *       content: {
 *           "application/json": {
 *               schema: {
 *                   $ref: "#/definitions/User"
 *               }
 *           }
 *       }
 *   }
 *   #swagger.responses[201] = {
 *       description: "User registered successfully",
 *       schema: { $ref: "#/definitions/User" }
 *   }
 *   #swagger.responses[400] = {
 *       description: "Bad request",
 *       schema: { $ref: "#/definitions/Error" }
 *   }
 */

router.post("/register", authController.register);

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public
/*
    #swagger.tags = ['Auth']
    #swagger.summary = 'Login user'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        email: {
                            type: "string",
                            example: "john@example.com"
                        },
                        password: {
                            type: "string",
                            example: "password123"
                        }
                    }
                }
            }
        }
    }
*/
router.post("/login", authController.login);

// @desc    Verify OTP
// @route   POST /api/v1/auth/verify
// @access  Public
/*
    #swagger.tags = ['Auth']
    #swagger.summary = 'Verify OTP'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        email: {
                            type: "string",
                            example: "john@example.com"
                        },
                        otp: {
                            type: "string",
                            example: "123456"
                        }
                    }
                }
            }
        }
    }
*/
router.post("/verify", authController.verifyOtp);

export default router;

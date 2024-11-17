import express from "express";
import authController from "../../controllers/auth.controller";

const router = express.Router();

//TODO: Need to add validations using joi
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/verify", authController.verifyOtp);

export default router;

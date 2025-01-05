import { Router } from "express";
import { userController } from "../../controllers";
import auth from "../../middlewares/auth.mw";

const router = Router();

router.get("/:id", auth(), userController.getUser);

export default router;

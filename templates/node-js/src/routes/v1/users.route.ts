import { Router } from "express";
import { userController } from "../../controllers";
import auth from "../../middlewares/authentication";

const router = Router();

router.get("/:id", auth(), userController.getUser);

export default router;

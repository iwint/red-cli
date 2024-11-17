import { Router } from "express";
import { chatsController } from "../../controllers";
import passport from "passport";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), chatsController.getAllChats);

export default router;

import express from "express";
import authRouter from "./v1/auth.route";
import usersRouter from "./v1/users.route";
import chatsRouter from "./v1/chats.route";

const router = express();

const routes = [
    {
        path: "/auth",
        route: authRouter,
    },
    {
        path: "/users",
        route: usersRouter,
    },
    {
        path: "/chats",
        route: chatsRouter,
    },
];

routes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;

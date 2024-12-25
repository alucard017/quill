import { signin, signup } from "../controller/users.controller";

import { Hono } from "hono";

interface ENV {
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}

const userRouter = new Hono<ENV>();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);

export default userRouter;

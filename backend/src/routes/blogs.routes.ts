import { Hono } from "hono";
import {
  postBlog,
  updateBlog,
  getBlogs,
  getBlog,
} from "../controller/blogs.controller";
import { userMiddleware } from "../middlewares/user.middleware";

interface ENV {
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}

const blogRouter = new Hono<ENV>();

blogRouter.use("/*", userMiddleware);

blogRouter.post("/", postBlog);
blogRouter.put("/", updateBlog);
blogRouter.get("/bulk", getBlogs);
blogRouter.get("/:id", getBlog);

export default blogRouter;

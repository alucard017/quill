import { Hono } from "hono";
import userRouter from "./routes/users.routes";
import blogRouter from "./routes/blogs.routes";

const app = new Hono();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

app.get("/", (c) => {
  return c.text("Welcome to hono app");
});

export default app;

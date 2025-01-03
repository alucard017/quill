import { Context } from "hono";
import { verify } from "hono/jwt";
export const userMiddleware = async (c: Context, next: any) => {
  const header = c.req.header("authorization");
  const token = header?.split(" ")[1];

  //@ts-ignore
  const user = await verify(token, c.env.JWT_SECRET);
  if (user.id) {
    c.set("userId", user.id);
    await next();
  } else {
    c.status(403);
    return c.json({ error: "You are not logged in" });
  }
};

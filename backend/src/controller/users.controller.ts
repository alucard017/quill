import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signInInput, signUpInput } from "@alucard777/common";

export const signup = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signUpInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "Wrong Inputs provided" });
  }
  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    return c.json({ msg: "User have successfully signed up" });
  } catch (e: any) {
    c.status(411);
    return c.text("Invalid creation");
  }
};

export const signin = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signInInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "Wrong Inputs provided" });
  }
  try {
    const user = await prisma.user.findFirst({
      where: { email: body.email, password: body.password },
    });
    if (!user) {
      c.status(411);
      return c.json({ msg: "User not found" });
    }
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    // c.set("userId", user?.id);
    return c.json({ jwt });
  } catch (e: any) {
    c.status(403);
    return c.text("Invalid case while signin");
  }
};

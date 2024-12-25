import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export const postBlog = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const userId = c.get("userId");
  try {
    const blogid = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    return c.json({
      id: blogid,
    });
  } catch (e: any) {
    e.status(403);
    return c.text("Error in posting blog");
  }
};

export const updateBlog = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const blogid = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: { title: body.title, content: body.content },
    });
    return c.json({
      id: blogid,
    });
  } catch (e: any) {
    e.status(411);
    return c.text("Error while updating the blog");
  }
};

export const getBlog = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: body.id,
      },
    });
    return c.json({
      blog,
    });
  } catch (e: any) {
    e.status(411);
    return c.text("Error while fetching the blog");
  }
};

//add pagination
export const getBlogs = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogs = await prisma.post.findMany();
  return c.json({ blogs });
};

import z from "zod";

export const signUpInput = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(8),
});

export const signInInput = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const postBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string(),
});

export type SignUpInput = z.infer<typeof signUpInput>;
export type SignInInput = z.infer<typeof signInInput>;
export type PostBlogInput = z.infer<typeof postBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;

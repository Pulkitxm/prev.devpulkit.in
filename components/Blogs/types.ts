/* eslint-disable no-unused-vars */
import { z } from "zod";

export const validateBlog = z.object({
  title: z.string(),
  url: z.string(),
  coverImage: z.object({
    url: z.string(),
  }),
  publishedAt: z.string().transform((val) => new Date(val)),
  readTimeInMinutes: z.number(),
  views: z.number(),
});

export type BlogType = z.infer<typeof validateBlog>;

export enum ICON_SIZE {
  SMALL = "sm",
  LARGE = "lg",
}

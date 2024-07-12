import { z } from "zod";

export const addCategorySchema = z
  .object({
    categoryName: z.string().min(3, "Categoryname must be at least 3 characters"),
  })

export type AddCategorySchema = z.infer<typeof addCategorySchema>;
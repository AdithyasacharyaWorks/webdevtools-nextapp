import {z} from "zod"
export const addToolSchema = z.object({
    toolName: z.string().min(3, "Tool name must be at least 3 characters"),
    detail: z.string().min(5, "Detail must be at least 5 characters"),
    category: z.array(z.string()).nonempty("Please select at least one category"),
    Label: z.string().min(3, "Label must be at least 3 characters"),
    webUrl: z.string().url("Invalid URL"),
  });
  
  export type AddToolSchema = z.infer<typeof addToolSchema>;
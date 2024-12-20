import { z } from "zod";

export const paginationSchema = z.object({
  take: z.number().default(10),
  skip: z.number().default(0),
  search: z.string().optional(),
});

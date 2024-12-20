import { z } from "zod";

export const baseHeadersSchema = z.object({
  locale: z.union([z.literal("US-en"), z.literal("FR-fr")]).optional(),
});

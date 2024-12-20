import { z } from "zod";
import { companySchema } from "../validation/company.schema";

export type CompanyDTO = z.infer<typeof companySchema>;

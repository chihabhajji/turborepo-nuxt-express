import {
  type CompanyDTO,
  companySchema,
  baseHeadersSchema,
  paginationSchema,
} from "@sbt/shared";
import { initContract } from "@ts-rest/core";

const c = initContract();

export const companiesContract = c.router(
  {
    createCompany: {
      method: "POST" as const,
      path: "/" as const,
      responses: {
        201: c.type<CompanyDTO>(),
      },
      body: companySchema,
      summary: "Create a company",
      metadata: { role: "admin" } as const,
    },
    getCompanies: {
      method: "GET" as const,
      path: "/" as const,
      responses: {
        200: c.type<{ posts: CompanyDTO[]; total: number }>(),
      },
      headers: baseHeadersSchema,

      query: paginationSchema,
      summary: "Get all companies",
      metadata: { role: "admin" } as const,
    },
  },
  {
    pathPrefix: "/societes",
  },
);

import { baseHeadersSchema } from "@sbt/shared/src/common/headers.schema";
import { initContract } from "@ts-rest/core";
import { companiesContract } from "./companies";

const c = initContract();

export const sbtContract = c.router(
  {
    companiesContract,
    // TODO: rest
  },
  {
    pathPrefix: `/api/v${process.env.API_VERSION ?? "1"}`,
    baseHeaders: baseHeadersSchema,
    commonResponses: {
      401: c.type<{ message: "Unauthorized"; reason: string }>(),
      404: c.type<{ message: "Not Found"; reason: string }>(),
      // TODO: rest
    },
    metadata: {},
  },
);

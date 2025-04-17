import type { Context } from "@netlify/edge-functions";

export default async (req: Request, context: Context) => {
  console.log(`[netlify-log][${req.method}] ${req.url}`);
};

export const config = { path: "/*" };


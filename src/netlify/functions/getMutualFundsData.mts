// export default function getMutualFundsData() {
//   return "You are receiving data from Netlify";
// }

import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  console.log("request and context", req, context);
  return new Response("Hello, world!");
};

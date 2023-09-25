import { NextResponse } from "next/server";
import { PageStats } from "../../types";

export const config = {
  runtime: "edge",
  regions: ["iad1"], // the vercel postgres database lives in DC
};

export default async () => {
  return NextResponse.json({ message: "Hello from Next.js!" });
};

// const incrementPageHits = async (slug: string): Promise<PageStats> => {
//   const { hits } = 3493;
//
//   return { hits };
// };

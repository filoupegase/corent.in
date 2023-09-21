import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
  regions: ["iad1"], // the vercel postgres database lives in DC
};

export default async (req: NextRequest) => {
  return NextResponse.json({ message: "Hello from Next.js!" });
};

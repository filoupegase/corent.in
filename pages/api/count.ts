import { NextResponse } from "next/server";

export const config = {
  runtime: "edge",
  regions: ["iad1"], // the vercel postgres database lives in DC
};

export default async () => {
  return NextResponse.json({ message: "Hello from Next.js!" });
};

import { NextRequest, NextResponse } from "next/server";
import queryString from "query-string";

// fallback to dummy secret for testing: https://docs.hcaptcha.com/#integration-testing-test-keys
const HCAPTCHA_SITE_KEY =
  process.env.HCAPTCHA_SITE_KEY || process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || "10000000-ffff-ffff-ffff-000000000001";
const HCAPTCHA_SECRET_KEY = process.env.HCAPTCHA_SECRET_KEY || "0x0000000000000000000000000000000000000000";
const HCAPTCHA_API_ENDPOINT = "https://hcaptcha.com/siteverify";

export const config = {
  runtime: "edge",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextRequest) => {
  // redirect GET requests to this endpoint to the contact form itself
  if (req.method === "GET") {
    return NextResponse.redirect(`${process.env.BASE_URL}/contact/`);
  }

  const data = await req.json();

  if (!data.name || !data.email || !data.message) {
    // all fields are required
    throw new Error("MISSING_DATA");
  }
  if (!data["h-captcha-response"] || !(await validateCaptcha(data["h-captcha-response"]))) {
    // either the captcha is wrong or completely missing
    throw new Error("INVALID_CAPTCHA");
  }
};

const validateCaptcha = async (formResponse: unknown): Promise<unknown> => {
  const response = await fetch(HCAPTCHA_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      response: formResponse,
      sitekey: HCAPTCHA_SITE_KEY,
      secret: HCAPTCHA_SECRET_KEY,
    }),
  });

  const result = await response.json();

  return result.success;
};

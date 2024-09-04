import Cors from "cors";
import { NextRequest, NextResponse } from "next/server";

const cors = Cors({
  methods: ["GET", "POST", "HEAD"],
  origin: "https://www.devpulkit.in",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function runMiddleware(req: NextRequest, res: NextResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  await runMiddleware(req, res, cors);
  return res;
}

export const config = {
  matcher: ["/api/:path*"],
};

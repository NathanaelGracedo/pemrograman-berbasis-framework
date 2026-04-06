import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "../src/middleware/withAuth";

// const protectedPaths: string[] = ["/profile", "/produk", "/about", "/admin"];

export function Middleware(request: NextRequest) {
  // const simpleMiddleware = (_req: NextRequest) => NextResponse.next();
  // return withAuth(simpleMiddleware, protectedPaths)(request, {} as any);
  return NextResponse.next();
}

export default withAuth(Middleware, ["/profile", "/admin", "/editor"]);
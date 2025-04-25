import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const publicRoutes = ["/login", "/cadastro"];

  const isPublicPage = publicRoutes.includes(req.nextUrl.pathname);

  if (!token && !isPublicPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

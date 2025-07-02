import { NextResponse } from "next/server";

export const middleware = (request) => {
  const userId = request.cookies.get("userId")?.value;
  const pathname = request.nextUrl.pathname;

  console.log("--->>", pathname);

  if (userId) {
    if (pathname === "/login" || pathname === "/register") {
      return Response.redirect(new URL("/", request.nextUrl.origin));
    }
    if (pathname === "/home") {
      // Set Root Page on Home Page
      return NextResponse.rewrite(new URL("/", request.nextUrl.origin));
    }
  } else if (pathname === "/") {
    return Response.redirect(new URL("/login", request.nextUrl.origin));
  } else if (pathname === "/home") {
    // Set Login Page on Home Page
    return NextResponse.rewrite(new URL("/login", request.nextUrl.origin));
  }

  // return NextResponse.next();
};

export const config = {
  matcher: ["/", "/login", "/register", "/home"],
};

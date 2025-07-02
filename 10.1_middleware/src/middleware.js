export const middleware = (request) => {
  const userId = request.cookies.get("userId")?.value;
  const pathname = request.nextUrl.pathname;

  console.log("--->>", pathname);

  if (userId) {
    if (pathname === "/login" || pathname === "/register") {
      return Response.redirect(new URL("/", request.nextUrl.origin));
    }
  } else if (pathname === "/") {
    return Response.redirect(new URL("/login", request.nextUrl.origin));
  }
};

export const config = {
  matcher: ["/", "/login", "/register"],
};

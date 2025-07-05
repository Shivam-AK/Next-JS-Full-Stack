// export { auth as middleware } from "@/auth";

import { NextRequest } from "next/server";

export default function (request: NextRequest) {
  if (!request.cookies.has("authjs.session-token")) {
    return Response.redirect(new URL("/login", request.nextUrl.origin));
  }
}

export const config = {
  matcher: ["/", "/profile"],
};

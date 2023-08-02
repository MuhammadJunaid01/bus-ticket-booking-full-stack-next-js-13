import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const domain =
  process.env.NODE_ENV === "production"
    ? process.env.PRODUCTION_URL
    : process.env.BASE_URL;
const allowedOrign =
  process.env.NODE_ENV === "production"
    ? [`${process.env.PRODUCTION_URL}`]
    : [`${process.env.BASE_URL}`];
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  /* The code snippet is checking the value of the "Origin" header in the incoming request. The
  "Origin" header specifies the domain that the request is coming from. */
  const { pathname } = request.nextUrl;
  const jwtCookie = request.cookies.get("jwt")?.value;
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  const origin = request.headers.get("origin");
  if (origin && !allowedOrign.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  if (
    pathname.includes("/api/buyTicket") ||
    pathname.includes("/api/checkTicket") ||
    request.url === `${domain}/makeBooking`
  ) {
    // console.log("/api/checkTicket");
    if (accessToken) {
    } else {
      const response = new NextResponse(null, {
        status: 302,
        statusText: "Redirecting to auth page",
        headers: {
          Location: `${domain}/auth`,
        },
      });
      return response;
    }
  }
  const response = NextResponse.next();
  request.headers.append("origin", request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/api/products")) {
  }

  return response;
}

/* The `export const config` statement is defining the configuration for the middleware function. In
this case, it specifies that the middleware should be applied to any request that matches the
`/api/:path*` pattern. This means that any request to a path starting with `/api/` will trigger the
middleware function. */
export const config = {
  matcher: ["/api/:path*", "/makeBooking"],
};

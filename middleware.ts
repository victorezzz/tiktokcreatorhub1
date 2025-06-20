export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    // Protect these routes
    "/profile/:path*",
    "/dashboard/:path*",
    "/api/user/:path*",
    "/api/tiktok/:path*",
  ],
}

// import { NextResponse } from "next/server";
// import { jwtVerify } from "jose";

// const rolePermissions: Record<string, string[]> = {
//   admin: ["/admin", "/dashboard", "/settings"],
//   student: ["/student/home", "/student/apply", "/student/status"],
//   gateKeeper: ["/dashboard", "/profile"],
//   hostelClerk: ["/home", "/about"],
// };

// export function middleware(req: any) {
//   // console.log("middx");

//   const token = req.cookies.get("token")?.value;
//   const requestedPath = req.nextUrl.pathname;

//   if (
//     requestedPath.startsWith("/_next/") ||
//     requestedPath.startsWith("/static/") ||
//     requestedPath.endsWith(".css") ||
//     requestedPath.endsWith(".js") ||
//     requestedPath.endsWith(".png") ||
//     requestedPath.endsWith(".jpg") ||
//     requestedPath.endsWith(".svg") ||
//     requestedPath.endsWith(".ico")
//   ) {
//     return NextResponse.next();
//   }

//   if (requestedPath === "/") {
//     return NextResponse.next();
//   }

//   console.log("hello", token);

//   try {
//     const fetch = async () => {
//       if (token) {
//         const secret = new TextEncoder().encode(process.env.JWT_SECRET);
//         const { payload } = await jwtVerify(token, secret);

//         const userRole = payload.role as keyof typeof rolePermissions; // Type userRole as one of the keys of rolePermissions

//         // Check if the user's role has access to the requested route
//         const allowedPaths = rolePermissions[userRole] || [];
//         if (!allowedPaths.some((path) => requestedPath.startsWith(path))) {
//           return new Response("Forbidden", { status: 403 });
//         }

//         return NextResponse.next();

//         // console.log("Token verified", allowedPaths);
//       } else if (requestedPath === "/student/apply") {
//         console.log("running", req.url);
//         return NextResponse.redirect(new URL("/", req.url));
//       }
//     };
//     fetch();
//   } catch (err) {
//     console.log("error", err);
//     return NextResponse.redirect(new URL("/", req.url)); // Redirect to homepage if verification fails
//   }
// }

// export const config = {
//   matcher:
//     // role === "student" ? ["/student/:path*"] :
//     ["/student/:path*"],
// };

import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const rolePermissions: Record<string, string[]> = {
  admin: ["/admin/status", "/admin/hostel", "/admin/student"],
  student: ["/student/home", "/student/apply", "/student/status"],
  gateKeeper: ["/gate"],
  hostelClerk: ["/hostelClerk"],
};

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const requestedPath = req.nextUrl.pathname;

  console.log("middleware", req.url);

  // Exclude static files and other non-relevant paths from middleware
  if (
    requestedPath.startsWith("/_next/") ||
    requestedPath.startsWith("/static/") ||
    requestedPath.endsWith(".css") ||
    requestedPath.endsWith(".js") ||
    requestedPath.endsWith(".png") ||
    requestedPath.endsWith(".jpg") ||
    requestedPath.endsWith(".svg") ||
    requestedPath.endsWith(".ico")
  ) {
    return NextResponse.next();
  }

  // Allow access to the root path
  if (requestedPath === "/") {
    return NextResponse.next();
  }

  // If no token is present, redirect to login
  if (!token) {
    console.log("No token found. Redirecting to login.");
    if (requestedPath === "/hostelClerk")
      return NextResponse.redirect(new URL("/hlogin", req.url));
    else if (requestedPath.startsWith("/admin"))
      return NextResponse.redirect(new URL("/alogin", req.url));
    else if (requestedPath.startsWith("/gate"))
      return NextResponse.redirect(new URL("/glogin", req.url));
    else return NextResponse.redirect(new URL("/slogin", req.url));
  }

  try {
    // Verify the JWT token asynchronously
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    const userRole = payload.role as keyof typeof rolePermissions;

    // Check if the user's role has access to the requested route
    const allowedPaths = rolePermissions[userRole] || [];
    const hasAccess = allowedPaths.some((path) =>
      requestedPath.startsWith(path)
    );

    if (!hasAccess) {
      console.log("Access denied for path:", requestedPath);
      return NextResponse.redirect(new URL("/forbidden", req.url)); // Redirect to a "Forbidden" page
    }

    console.log("Access granted for path:", requestedPath);

    // Return the response after successful verification
    return NextResponse.next();
  } catch (err) {
    console.log("Error verifying token:", err);
    // Redirect to homepage if verification fails
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/gate/:path*",
    "/student/:path*",
    "/dashboard/:path*",
    "/profile/:path*",
    "/home/:path*",
    "/about/:path*",
    "/hostelClerk/:path*",
  ],
};

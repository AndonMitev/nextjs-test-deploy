import { withAuth } from 'next-auth/middleware';

/**
 * Middleware for route protection in a Next.js application.
 *
 * This middleware is wrapped with `withAuth` from `next-auth/middleware` to enforce authentication.
 * While there's logic commented out that enforces role-based access (e.g., 'admin' role),
 * the active callback ensures a user possesses an `accessToken` in their token to be deemed authorized.
 *
 * The middleware is configured to target the `/about` route as specified in the `config` export.
 *
 * Note: The commented-out logic, when active, would redirect non-admin users trying to access `/about` to a `/denied` page.
 */

export default withAuth(
  function middleware() {
    // const isAdmin = request.nextauth.token?.role === 'admin';
    // if (request.nextUrl.pathname === '/about' && !isAdmin) {
    //   return NextResponse.rewrite(new URL('/denied', request.url));
    // }
  },
  {
    callbacks: {
      authorized({ token }) {
        return Boolean(token?.accessToken);
      },
    },
  }
);

/**
 * Currently there is a bug..., not able to spread array below
 * // const PROTECTED_ROUTES = ['/about', '/update-password', '/movies'];
 */
export const config = {
  matcher: ['/about', '/update-password', '/movies'],
};

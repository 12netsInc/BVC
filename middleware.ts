import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return guardRoutes(request, '/signin', ["/admin/*"]);
}

/**
 * Test request path against matcher pattern. Perform authentication tasks if the pathname matches the pattern.
 * @param request 
 * @param matcher 
 * @returns 
 */
function guardRoutes(request: NextRequest, redirectPath: string, patterns: string[]): NextResponse {
  // If the pathname does not match the pattern
  if (!matchesPaths(request.nextUrl.pathname, patterns)) {
    return NextResponse.next();
  }

  // Ensure user is authenticated to gain access
  let authenticated = checkAuthentication(request);

  // Redirect to [redirectPath] if user is not authenticated
  if (!authenticated) {
    request.nextUrl.pathname = redirectPath;
    return NextResponse.redirect(request.nextUrl)
  }

  // Allow access otherwise
  return NextResponse.next();
}

/**
 * Checks if path matches a pattern in the patterns array. Use for checking if a
 * request's pathname matches provided patterns to execute a logic in the middleware.
 * @param path 
 * @param patterns 
 * @returns 
 */
function matchesPaths(path: string, patterns: string[]): Boolean {
  let mergedPattern = patterns.join("|");
  let matcher = new RegExp(`^(${mergedPattern})`);
  return matcher.test(path);
}

/**
 * 
 * @returns user is authorized
 */
function checkAuthentication(request: NextRequest): Boolean {
  // TODO: Perform authentication checks here.
  return false;
}
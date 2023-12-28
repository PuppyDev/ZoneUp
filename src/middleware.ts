import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const publicRoutes = ["/", "/login", "signup"];

export default authMiddleware({
    publicRoutes,
    afterAuth({ userId, orgId, isPublicRoute }, req) {
        // not logged in
        if (!userId && !isPublicRoute) return redirectToSignIn({ returnBackUrl: req.url });

        // logged in
        if (userId) {
            if (!orgId) {
                if (!req.url.includes("/create-workspace")) {
                    return NextResponse.redirect(new URL("/create-workspace", req.url), 308);
                }
            }

            if (orgId && isPublicRoute)
                return NextResponse.redirect(new URL(`/w/${orgId}/home`, req.url), 308);
        }
    },
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

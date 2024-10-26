
import { createRouter, createRouteConfig } from "@tanstack/react-router";

// Importing Custom Pages
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { ProfileOpened_Alumni } from "./pages/ProfileOpened_Alumni";





// import {
//     createRouter,
//     RouterProvider,
//     createRouteConfig,
// } from "@tanstack/react-router";

// // Define your route configuration
// const rootRoute = createRouteConfig({
//     component: () => <div>Welcome to the App!</div>,
// });

// const registerRoute = rootRoute.createRoute({
//     path: "/",
//     component: RegisterPage,
// });

// const loginRoute = rootRoute.createRoute({
//     path: "/login",
//     component: LoginPage,
// });

// const profileRoute = rootRoute.createRoute({
//     path: "/profile/alumni",
//     component: ProfileOpened_Alumni,
// });

// // Create the router instance
// export const router = createRouter({
//     routeConfig: rootRoute.addChildren([
//         registerRoute,
//         loginRoute,
//         profileRoute,
//     ]),
// });

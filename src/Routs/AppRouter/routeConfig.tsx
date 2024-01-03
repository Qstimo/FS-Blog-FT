import { RouteProps } from "react-router-dom"
import FullPost from "../../Pages/FullPost"
import Home from "../../Pages/Home/Home"
import NotFound from "../../Pages/NotFound"
import PostAdd from "../../Pages/PostAdd"
import Register from "../../Pages/Register"
import UserPage from "../../Pages/User"

export enum AppRoutes {
    HOME = 'home',
    REGISTER = 'register',
    FULL_POST = 'fullPost',
    POST_ADD = 'postAdd',
    POST_UPDATE = 'updatePost',
    USER_PAGE = 'userPage',
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.REGISTER]: 'auth',
    [AppRoutes.FULL_POST]: 'posts/:id',
    [AppRoutes.POST_ADD]: '/created',
    [AppRoutes.POST_UPDATE]: '/update/:id',
    [AppRoutes.USER_PAGE]: '/user',
    [AppRoutes.NOT_FOUND]: '/*',
}
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <Home />
    },
    [AppRoutes.REGISTER]: {
        path: RoutePath.register,
        element: <Register />
    },
    [AppRoutes.FULL_POST]: {
        path: RoutePath.fullPost,
        element: <FullPost />
    },
    [AppRoutes.POST_ADD]: {
        path: RoutePath.postAdd,
        element: <PostAdd />
    },
    [AppRoutes.POST_UPDATE]: {
        path: RoutePath.updatePost,
        element: <PostAdd />
    },
    [AppRoutes.USER_PAGE]: {
        path: RoutePath.userPage,
        element: <UserPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <NotFound />
    }

}
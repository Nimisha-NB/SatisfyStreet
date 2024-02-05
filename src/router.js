import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// Load Routes
// import App from "./App";
import ErrorPage from "./pages/errorPage";
import CartPage from "./pages/Cart";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
        errorElement: <ErrorPage />,

    },
    {
        path: "/home",
        element: <HomePage />,
        errorElement: <ErrorPage />,

    },
    {
        path: '/mycart',
        element: <CartPage />
    },
]);

export {
    router,
    RouterProvider
}

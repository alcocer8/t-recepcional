import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import AuthLayout from "./layouts/AuthLayout";
import Login from "./views/Login";
import Inicio from "./views/Inicio";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <h1>Error</h1>,
        children: [
            {
                index: true,
                element: <Inicio/>
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [
            {
                index: true,
                element: <Login/>
            }
        ]
    }
]);



export default router
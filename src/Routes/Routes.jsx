import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../MainLayOut/MainLayout";
import Menu from "../Pages/Menu/Menu";

export const myRoutes = createBrowserRouter([{
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path: '/menu',
            element:<Menu></Menu>
        }
    ]
}])
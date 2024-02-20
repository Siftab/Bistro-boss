import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../MainLayOut/MainLayout";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";

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
        },
        {
            path: '/order',
            element:<Order></Order>
        }
    ]
}])
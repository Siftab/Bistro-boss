import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../MainLayOut/MainLayout";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../components/Secret";
import DashBoard from "../MainLayOut/DashBoard";
import MyCart from "../UserInterface/MyCart";
import AllUsers from "../UserInterface/AllUsers";

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
            path: '/order/:title',
            element:<Order></Order>,
            loader:()=>fetch('/public/menu.json')
        },{
            path:'/login',
            element:<Login></Login>
        }
        ,{
            path:'/register',
            element:<Register></Register>
        }
        ,{
            path:'/secret',
            element:<PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
    ]
}
,{
    path:'/dashBoard',
    element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
    children:[
        {
            path:'/dashBoard/cart',
            element:<MyCart></MyCart>
        },
        {
            path:'/dashBoard/users',
            element: <AllUsers></AllUsers>
        }

    ]
}])
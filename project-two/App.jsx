import React from "react";
import {createBrowserRouter,RouterProvider}from "react-router-dom"
//import Styles from './app.module.css'
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Profile from "./Profile";
import Order from "./Order";
import Layout from "./Layout";
import Portal from "./Portal";
let router=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/products",
                element:<Products/>
            },
            {
                path:"/cart/:id",
                element:<Cart/>
            },
            {
                path:"/order/:id",
                element:<Order/>
            },
            {
                path:"/profile/:id",
                element:<Profile/>
            },
            {
                path:"/portal",
                element:<Portal/>
            }

        ]
    }
])
const App=()=>
{
    return(
        <div>
           
        <RouterProvider router={router}></RouterProvider></div>
    )
}
export default App;
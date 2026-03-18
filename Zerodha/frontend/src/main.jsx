import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomeCollector from "./landing-page/Home/HomeCollector.jsx";
import Layout from "./landing-page/layout/Layout.jsx";
import ProductCollector from "./landing-page/Product/ProductCollector.jsx";
import AboutCollector from "./landing-page/About/AboutCollector.jsx";
import PriceCollector from "./landing-page/Pricing/PriceCollector.jsx";
import SupportCollector from "./landing-page/Support/SupportCollector.jsx";
import SignupCollector from "./landing-page/Signup/SignupCollector.jsx";
import Equity from "./landing-page/Pricing/Equity.jsx";
import Currency from "./landing-page/Pricing/Currency.jsx";
import Commodity from "./landing-page/Pricing/Commodity.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout/>
    ),
    children:[
      {
        path:"",
        element:<HomeCollector/>
    },
      {
        path:"about",
        element:<AboutCollector />
      },
      {
        path:"products",
        element:<ProductCollector/>
      },
      {
        path:"Pricing",
        element:<PriceCollector/>,
        children:[
          {
            path:"",
            element:<Equity/>
          },
          {
            path:"currency",
            element:<Currency/>
          },
          {
            path:"commodity",
            element:<Commodity/>
          }
        ]
      },
      {
        path:"support",
        element:<SupportCollector/>
      },{
        path:"signup",
        element:<SignupCollector />
      }
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)

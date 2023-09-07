import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import ErrorPage from './COMPONENT/ErrorPage/ErrorPage.jsx';
import Cart from './COMPONENT/ShoppingCart/Cart.jsx';
import Order from './COMPONENT/OrderPage/Order.jsx';
import Checkout from './COMPONENT/Checkout/Checkout.jsx';
import CartProduct from './Loader/CartProduct.js';
import Login from './COMPONENT/Login/Login.jsx';
import SignUp from './COMPONENT/SignUp/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Cart></Cart>
      },
      {
        path: '/orders',
        element: <Order></Order>,
        loader: CartProduct
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element:<SignUp></SignUp>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

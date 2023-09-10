import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from './COMPONENT/ErrorPage/ErrorPage.jsx';
import Cart from './COMPONENT/ShoppingCart/Cart.jsx';
import Order from './COMPONENT/OrderPage/Order.jsx';
import Checkout from './COMPONENT/Checkout/Checkout.jsx';
import CartProduct from './Loader/CartProduct.js';
import Login from './COMPONENT/Login/Login.jsx';
import SignUp from './COMPONENT/SignUp/SignUp.jsx';
import AuthProviders from './COMPONENT/ContextProviders/AuthProviders.jsx';
import LogoutPage from './COMPONENT/LogoutPage/LogoutPage.jsx';
import PrivateRoutes from './COMPONENT/PrivateRoutes/PrivateRoutes.jsx';
import Inventory from './COMPONENT/Inventory/Inventory.jsx';
import ForgotPassword from './COMPONENT/ForgotPassword/ForgotPassword.jsx';

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
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
      },
      {
        path:'/inventory',
        element:<PrivateRoutes><Inventory/></PrivateRoutes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/logout',
        element: <LogoutPage></LogoutPage>
      },
      {
        path: '/reset',
        element: <ForgotPassword></ForgotPassword>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)

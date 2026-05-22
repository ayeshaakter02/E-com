import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Rootlayout from './components/layout/Rootlayout';
import AddCategory from './pages/AddCategory';
import AddProduct from './pages/AddProduct';
import AllProduct from './pages/AllProduct';
import AllCategory from './pages/AllCategory';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      { path: "/add-category", Component: AddCategory },
      { path: "/all-category", Component: AllCategory },
      { path: "/add-product", Component: AddProduct },
      { path: "/all-product", Component: AllProduct },
    ]
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
]);


const App = () => {
  return (
    <><RouterProvider router={router} /></>
  )
}

export default App
import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Rootlayout from './components/layout/Rootlayout';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      { path: "/about", Component: About },
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
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import AuthProvider from './firebase/AuthProvider.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Users from './pages/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffees')
  },
  {
    path:'/addcoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path:'/coffees/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
  },
  {
    path:'/signin',
    element:<SignIn></SignIn>
  },
  {
    path:'/signup',
    element:<SignUp></SignUp>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader: ()=> fetch('http://localhost:5000/users')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)

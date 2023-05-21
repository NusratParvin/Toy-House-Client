import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import router from './routes/Routes';
import AuthProvider from './providers/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(

    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>


)

import React, { Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Loading from "./pages/Loading";
import { Toaster } from "./components/ui/toaster";
import AppLayout from "./Layouts/AppLayout";

const Home = React.lazy(()=>import("@/pages/Home"))
const Login = React.lazy(()=>import("@/pages/Login"))
const Register = React.lazy(()=>import("@/pages/Register"))
const Dashboard = React.lazy(()=>import("@/pages/Dashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path:"/app",
    element:<PrivateRoutes/>,
    children:[
      {
        path:"/app/dashboard",
        element:(
          <AppLayout>
            <Dashboard/>
          </AppLayout>
        )
      }
    ]
  }
])


function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <RouterProvider router={router}/>
      <Toaster/>
    </Suspense>
  )
}

export default App

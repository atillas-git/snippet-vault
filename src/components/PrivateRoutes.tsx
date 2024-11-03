import { useAuthStore } from "@/hooks/useAuthStore"
import {Navigate, Outlet} from "react-router-dom"
const PrivateRoutes = () => {
    const isAuthenticated = useAuthStore((state)=>state.isAuthenticated)
    if(!isAuthenticated){
        return <Navigate to={"/login"}/>
    }
    return <Outlet/>
}

export default PrivateRoutes
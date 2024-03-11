import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Providers/AuthProvider";
import { FadeLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading]=useAdmin()
    const {user,loading}=useContext(AuthContext)
    const location= useLocation();

    if(loading || isAdminLoading ){
        return <FadeLoader color="#36d7b7" height={100} width={100} />
       }
       if(user && isAdmin){
        return children;
       }
       else{
        return <Navigate to="/login" state={location.pathname}></Navigate>
       }
};

export default AdminRoute;
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const PrivateRoutes = ({children}) => {
    const location = useLocation();
   const {user,loading}=useContext(AuthContext);
   if(loading){
    return <FadeLoader color="#36d7b7" height={100} width={100} />
   }
   if(user){
    return children;
   }
   else{
    return <Navigate to="/login" state={location.pathname}></Navigate>
   }
};

export default PrivateRoutes;
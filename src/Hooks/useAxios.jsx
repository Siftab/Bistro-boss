;import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
const token = localStorage.getItem('access-token')

export const AxiosSecure= axios.create(
    {
        baseURL:"http://localhost:5000",
        // headers:{
        //     authorization:`Bear ${token}`
        // }
    }
)
const useAxios = () => {
    const navigate=useNavigate();
    const {logOut}=useContext(AuthContext)
    AxiosSecure.interceptors.request.use(
        (config)=>{
        console.log("request gone through this place")
        // config.headers.authorization =
        config.headers.authorization=`Bear ${token}`
        return config
    },
    (err)=>{
        return Promise.reject(err)
    })
    AxiosSecure.interceptors.response.use((response)=>{
        return response

    },
    (err)=>{
        
        console.log('error in response ',err.response.status)
        if(err.response.status===401||err.response.status===403){
          navigate('/')
          logOut();

        }
        return Promise.reject(err)
    })
   return AxiosSecure;
};

export default useAxios;
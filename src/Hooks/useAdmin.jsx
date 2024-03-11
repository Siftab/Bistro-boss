import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {

    const {user}=useContext(AuthContext)
    const AxiosSecure= useAxios()

    const {data:isAdmin,isLoading:isAdminLoading}=useQuery({
        queryKey:[user?.email,'isAdmin'],
        queryFn: async()=>{
            const res = await AxiosSecure.get(`/user/admin/${user?.email}`)
            console.log("data in admin",res.data?.Admin)
            return res.data?.Admin

        }
    })
    return [isAdmin]
};

export default useAdmin;
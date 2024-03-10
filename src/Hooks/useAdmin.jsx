import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxios, { AxiosSecure } from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {

    const {user}=useContext(AuthContext)
    const AxiosSecure= useAxios()

    const {data:isAdmin}=useQuery({
        queryKey:[user?.email,'isAdmin'],
        queryFn: async()=>{
            const res = await AxiosSecure.get(`/user/admin/${user?.email}`)
            console.log(res.data?.Admin)
            return res.data?.Admin

        }
    })
    return [isAdmin]
};

export default useAdmin;
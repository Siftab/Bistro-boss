


import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxios from './useAxios';
import { AuthContext } from '../Providers/AuthProvider';

const useCart = () => {
    const AxiosSecure=useAxios()
    const {user}=useContext(AuthContext);
    const {refetch,data:cart=[]}=useQuery({
        queryKey:['cart',user?.email],
        queryFn: async()=>{
            const res = await AxiosSecure.get(`/carts?email=${user?.email}`)
            return res.data
        }})
    return [cart,refetch]}


export default useCart;
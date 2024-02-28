import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from './useAxios';

const useCart = () => {
    const AxiosSeceure=useAxios();
    const {data:cart}=useQuery({
        queryKey:['cart'],
        queryFn: async ()=>{
            const res= AxiosSeceure.get('/carts')
            return res.data;

        }
    })

    return [cart]
    
};

export default useCart;
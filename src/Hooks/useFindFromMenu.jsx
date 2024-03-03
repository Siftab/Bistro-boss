import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from './useAxios';

const useFindFromMenu = (items) => {
    const AxiosSecure=useAxios()
   const {data:cartItemInfo=[],refetch:cartInformationRefetch}=useQuery({
    queryKey:['cartsInfo'],
    queryFn: async()=>{
        const res=  await AxiosSecure.get('/cart/information',items)
        return res.data;
    }
   })
   return [cartItemInfo,cartInformationRefetch]
};

export default useFindFromMenu;
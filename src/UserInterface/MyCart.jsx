import React, { useEffect, useState } from 'react';
import useCart from '../Hooks/useCart'
import useFindFromMenu from '../Hooks/useFindFromMenu';
import useAxios from '../Hooks/useAxios';
import CartTable from './CartTable';
const MyCart = () => {
    const AxiosSecure= useAxios()
    const cartID=[];
    const [cart]=useCart();
    const [cartItemsDetails,setCartItemDetails]=useState([]);
    console.log(cart,cartItemsDetails)
    // const totalPrice = cart.reduce((sum,item)=>{sum+item.price ;
    //                                                         },0)
    cart.map(item=>cartID.push(item.itemId))
    const totalPrice= cartItemsDetails.reduce((sum,item)=>{return sum+item.price
    },0)
   useEffect(()=>{
    AxiosSecure.post('/cart/information',cartID)
   .then(res=>{setCartItemDetails(res.data)
                    })
   },[cart])
   console.log('details image',cartItemsDetails)
   console.log('total',totalPrice)



    return (
        <div >
            <div className='flex justify-evenly cinzel'>
            <h1 className='text-4xl'>total Order:{cart.length}</h1>
            <h1 className='text-4xl'>total price:{totalPrice}</h1>
            <button className='btn bg-[#D1A054] text-white'>pay</button>
            </div>
            <CartTable items={cartItemsDetails}></CartTable>

        </div>
    );
};

export default MyCart;
import React, { useEffect, useState } from 'react';
import useCart from '../Hooks/useCart'
import useFindFromMenu from '../Hooks/useFindFromMenu';
import useAxios from '../Hooks/useAxios';
const MyCart = () => {
    const AxiosSecure= useAxios()
    const cartID=[];
    const [cart]=useCart();
    const [cartItemsDetails,setCartItemDetails]=useState([]);
    // const totalPrice = cart.reduce((sum,item)=>{sum+item.price ;
    //                                                         },0)
    cart.map(item=>cartID.push(item.itemId))
    const totalPrice= cartItemsDetails.reduce((sum,item)=>{return sum+item.price
    },0)
   useEffect(()=>{
    AxiosSecure.post('/cart/information',cartID)
   .then(res=>{setCartItemDetails(res.data)
                    })
   },[])
   console.log('details image',cartItemsDetails)
   console.log('total',totalPrice)



    return (
        <div>
            <h1 className='text-4xl'>total Order:{cart.length}</h1>
            <h1 className='text-4xl'>total price:{totalPrice}</h1>
            <button className='btn btn-primary'>pay</button>

        </div>
    );
};

export default MyCart;
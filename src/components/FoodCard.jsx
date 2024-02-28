import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {
  const {user}=useContext(AuthContext);
    const {name,recipe,image,_id,price}=item;
    const navigate= useNavigate();
    const addToCart =food=>{
     if(user){
//  
     }
     else{
      Swal.fire({
        title: "No user Found",
        text: "login to add products",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success"
          // });
          navigate('/login')
        }
      });
     }
    }
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <p className='bg-black text-white absolute right-0 mt-5 mr-6 px-4 py-2'>${price}</p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="flex justify-center">
            <button className="btn bg-black text-yellow-600 border-b-4 border-yellow-600" onClick={()=>addToCart(item )}>Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;
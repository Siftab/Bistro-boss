import React from 'react';

const FoodCard = ({item}) => {
    const {name,recipe,image,_id}=item;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="flex justify-center">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;
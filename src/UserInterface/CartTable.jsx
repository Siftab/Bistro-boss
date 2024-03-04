import React from 'react';
import CartTableRow from './CartTableRow';

const CartTable = ({items}) => {
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* he ad */}
    <thead className='bg-[#D1A054]'>
      <tr className=' text-white h-20 rounded-t-lg ' style={{
        borderRadius:'20px 20px 0px 0px'
      }}>
        <th>
         
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th> Action</th>
      </tr>
    </thead>
    <tbody>
      {
       items.map((item,idx)=><CartTableRow key={item._id} item={item} idx={idx}></CartTableRow>)
      }
    
    </tbody>
    {/* foot
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
    
  </table>
</div>
    );
};

export default CartTable;
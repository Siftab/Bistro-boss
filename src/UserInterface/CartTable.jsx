import React from 'react';
import CartTableRow from './CartTableRow';

const CartTable = ({items}) => {
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
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
       items.map(item=><CartTableRow key={item._id} item={item}></CartTableRow>)
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
import React from 'react';
import CartTableRow from './CartTableRow';

const CartTable = () => {
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
      {/* row 1 */}
      <CartTableRow></CartTableRow>
    
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
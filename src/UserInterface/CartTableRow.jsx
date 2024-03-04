import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const CartTableRow = () => {
    return (
        <tr>
        <th>
          
        </th>
        <td>
        <img src="https://www.shutterstock.com/shutterstock/photos/67879747/display_1500/stock-photo-heart-shape-by-various-vegetables-and-fruits-67879747.jpg" alt="" className='w-20 rounded-2xl' />
        </td>
        <td>
          kala Bhuna
        </td>
        <td>Purple</td>
        <th>
          <button className="btn bg-red-600 text-white"><RiDeleteBin6Line></RiDeleteBin6Line></button>
        </th>
      </tr>
    );
};

export default CartTableRow;
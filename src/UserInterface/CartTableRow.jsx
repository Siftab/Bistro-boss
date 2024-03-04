import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbCurrencyTaka } from "react-icons/tb";

const CartTableRow = ({item,idx}) => {
    const{name,image,price}= item;
    return (
        <tr>
        <th>
          {idx+1}
        </th>
        <td>
        <img src={image} alt="" className='w-20 rounded-2xl' />
        </td>
        <td>
          {name}
        </td>
        <td ><p className='flex items-center'> {price} <TbCurrencyTaka></TbCurrencyTaka></p></td>
        <th>
          <button className="btn bg-red-600 text-white"><RiDeleteBin6Line></RiDeleteBin6Line></button>
        </th>
      </tr>
    );
};

export default CartTableRow;
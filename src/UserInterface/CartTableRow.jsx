import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbCurrencyTaka } from "react-icons/tb";
import useAxios from '../Hooks/useAxios';
import Swal from 'sweetalert2';
import useCart from '../Hooks/useCart';

const CartTableRow = ({ item, idx }) => {
  const AxiosSecure = useAxios();
  const [,refetch]=useCart();
  const { name, image, price, _id } = item;
  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
        AxiosSecure.delete(`/cart/${id}`)
          .then(res => {
            console.log(res.data)
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch();
            }
          })
      }
    });
    console.log(id)



  }
  return (
    <tr>
      <th>
        {idx + 1}
      </th>
      <td>
        <img src={image} alt="" className='w-20 rounded-2xl' />
      </td>
      <td>
        {name}
      </td>
      <td ><p className='flex items-center'> {price} <TbCurrencyTaka></TbCurrencyTaka></p></td>
      <th>
        <button className="btn bg-red-600 text-white" onClick={() => handleDelete(_id)}><RiDeleteBin6Line></RiDeleteBin6Line></button>
      </th>
    </tr>
  );
};

export default CartTableRow;
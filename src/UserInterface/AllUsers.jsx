import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../Hooks/useAxios';
import { FaTrash } from 'react-icons/fa';

const AllUsers = () => {
   const AxiosSecure= useAxios()
    const {data:users=[]}=useQuery({
        queryKey:['users'],
        queryFn: async ()=>{
           
            const res= await AxiosSecure.get('/users');
            return res.data

        }
    })
    return (
        <div>
            <h1 className='text-3xl font-bold cinzel'>Total User:{users.length} </h1>
            {/* Table  */}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user,idx)=>
            <tr className="bg-base-400 hover" key={idx}>
        <th>{idx+1}</th>
        <td>{user.userName}</td>
        <td>{user.userEmail}</td>
        <td>Blue</td>
        <td><button className='btn bg-red-600 text-white'><FaTrash></FaTrash></button></td>
      </tr>
        )
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../Hooks/useAxios';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const AxiosSecure = useAxios()
    const { data: users = [] ,refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {

            const res = await AxiosSecure.get('/users');
            return res.data

        }
    })
    const handleDeleteUser = id => {
        console.log(id)
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
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                AxiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res)
                        if (res.data.deletedCount > 0) {
                            refetch();
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                    })
            }
        });
    }
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
                            users.map((user, idx) =>
                                <tr className="bg-base-400 hover" key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{user.userName}</td>
                                    <td>{user.userEmail}</td>
                                    <td>Blue</td>
                                    <td><button className='btn bg-red-600 text-white' onClick={() => handleDeleteUser(user._id)}><FaTrash></FaTrash></button></td>
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
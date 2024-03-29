import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxios from '../Hooks/useAxios';
import { FaTrash, FaUser, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { updateCurrentUser, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { AuthContext } from '../Providers/AuthProvider';

const AllUsers = () => {
    const AxiosSecure = useAxios()
    const {setUser,user}=useContext(AuthContext)
    const { data: users = [] ,refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {

            const res = await AxiosSecure.get('/users',{headers:{
                Authorization:  `Bearer ${localStorage.getItem('access-token')}`

            }});
            console.log(res.data)
            return res.data

        }
    })
    const handleAdmin =id=>{
      
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make it!"
          }).then((result) => {
            if (result.isConfirmed) {
              AxiosSecure.patch(`/user/Admin/${id}`)
              .then(res=>{
                console.log(res.data)
                if(res.data.modifiedCount>0){
                    updateProfile(auth.currentUser,{
                        role:"Admin"
                    })
                    .then(res=>{
                        setUser({...user, role:"Admin"})

                    })
                    Swal.fire({
                        title: "Admin!",
                        text: "he is Admin now",
                        icon: "success"
                      });
                }
              })
            }
          });
            
    }
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
                              refetch();
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
                                    <td><button className='btn ' onClick={()=>handleAdmin(user._id)}>{user.role==="Admin" ? <FaUser></FaUser>:<FaUsers></FaUsers>}</button></td>
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
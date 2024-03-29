import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { IoCartOutline } from "react-icons/io5";
import useCart from '../Hooks/useCart';

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    const [cart]=useCart();
    console.log(cart)
    const handleLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch(err=>console.log(err))
    }
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li>
           <Link to="/menu"> menu</Link>
        </li>
        <li>
           <Link to="/secret"> secret</Link>
        </li>
        <li><Link to="/order/salads">Order</Link></li>
        <li><Link to='/dashBoard/cart' ><button className="text-2xl ">
  <IoCartOutline></IoCartOutline>
  <div className="badge badge-secondary ml-6">+{cart.length}</div>
</button></Link></li>
        {
            user? <li ><button onClick={handleLogOut} className=''>LogOut</button></li>:<li><Link to="/login">Login</Link></li>
        }
        <div className='flex items-center'>{user&& <p>{user.displayName}</p>}
        {user&& <img src={user.photoURL} className='h-10 rounded-full'></img>}</div>
        </>
        
    return (
        <div className="navbar fixed bg-base-100 z-10 bg-black  bg-opacity-30 max-w-screen-xl text-white">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaShoppingCart } from "react-icons/fa";

const DashBoard = () => {
    const navLinks=<>
               
                    <li className='flex items-center'><FaHome></FaHome><NavLink> User Home</NavLink></li>
                    <li className='flex items-center'><FaShoppingCart></FaShoppingCart><NavLink to='/dashBoard/cart'> Cart</NavLink></li>
                    <li className='flex items-center'><FaHome></FaHome><NavLink> User Home</NavLink></li>
               
    </>
    return (
        <div className='max-w-screen-xl mx-auto flex'>
            <div className='w-64 min-h-screen bg-[#D1A054]'>
                <ul className=''>
                {
                    navLinks
                }
                </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default DashBoard;
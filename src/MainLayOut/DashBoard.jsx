import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { BiCalendarStar } from "react-icons/bi";
const DashBoard = () => {
    const navLinks=<>
               
                    <li><NavLink to='/dashBoard/home'><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to='/dashBoard/cart'><FaShoppingCart></FaShoppingCart> Cart</NavLink></li>
                    <li><NavLink to='/dashBoard/reservation'> <FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                    <li><NavLink to='/dashBoard/reservation'><FaWallet></FaWallet> Payment System</NavLink></li>
                    <li><NavLink to='/dashBoard/reservation'> <MdReviews></MdReviews> Add Review</NavLink></li>
                    <li><NavLink to='/dashBoard/reservation'> <BiCalendarStar></BiCalendarStar> My Booking</NavLink></li>
               
    </>
    return (
        <div className='max-w-screen-xl mx-auto flex'>
            <div className='w-64 min-h-screen bg-[#D1A054]'>
                <div className='text-center cinzel py-12 px-9'>
                    <h1 className='font-black text-2xl'>Bistro Boss</h1>
                    <p className='font-bold text-lg  tracking-[3px]'>restaurents</p>
                </div>
                <ul className='menu '>
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
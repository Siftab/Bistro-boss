import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { BiCalendarStar } from "react-icons/bi";
import { IoHome, IoMenu } from "react-icons/io5";
import {  IoMdMail } from "react-icons/io";
import { FaShop } from "react-icons/fa6";
import useCart from '../Hooks/useCart';
const DashBoard = () => {
    // Todo: set Admin latter
    const isAdmin = true
    const [cart]=useCart();
    const navLinks=<>
               
                    <li><NavLink to='/dashBoard/home'><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to='/dashBoard/cart'><FaShoppingCart></FaShoppingCart> Cart({cart.length})</NavLink></li>
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
                <ul className='menu space-y-3'>
                {
                    navLinks
                } 
                <hr />
                <li><NavLink to='/'><IoHome></IoHome>Home</NavLink></li>
                <li><NavLink to='/menu'><IoMenu></IoMenu>Menu</NavLink></li>
                <li><NavLink to='/order/salads'><FaShop></FaShop> Shop</NavLink></li>
                <li><NavLink to='/contact'><IoMdMail></IoMdMail>Contact</NavLink></li>
                </ul>
            </div>
            <div className='w-full p-5'>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default DashBoard;
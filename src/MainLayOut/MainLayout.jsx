import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
           

            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;
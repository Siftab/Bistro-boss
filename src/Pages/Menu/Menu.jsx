import React from 'react';
import { Helmet } from 'react-helmet-async';
import CoverImg from '../../components/CoverImg';
import banner3 from '../../assets/menu/banner3.jpg'


const Menu = () => {
    console.log("this is menu")
    return (
        <div>
            <Helmet><title>Bistro Boss | Menu</title></Helmet>
            <CoverImg img={banner3} heading="our menu" subHeading="would you like to try a dish"></CoverImg>
            
        </div>
    );
};

export default Menu;
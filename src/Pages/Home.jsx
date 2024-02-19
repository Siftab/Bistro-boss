import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import PopularMenu from '../components/Menu/PopularMenu';
import FeaturedItem from '../components/Featured/FeaturedItem';
import Testimonials from '../components/Testimonials';
import CallUs from '../components/Callus/CallUs';
import SecnondBanner from '../components/SecnondBanner';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
          
          <Banner></Banner> 
          <Category></Category>
          <SecnondBanner></SecnondBanner>
          {/* problem hEre */}
          <PopularMenu></PopularMenu>
          <CallUs></CallUs>
          <FeaturedItem></FeaturedItem>
          <Testimonials></Testimonials>


          <Helmet>
            <title>Bistro Boss | Home</title>
          </Helmet>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import PopularMenu from '../components/Menu/PopularMenu';
import FeaturedItem from '../components/Featured/FeaturedItem';
import Testimonials from '../components/Testimonials';
import CallUs from '../components/Callus/CallUs';
import SecnondBanner from '../components/SecnondBanner';

const Home = () => {
    return (
        <div>
          
          <Banner></Banner> 
          <Category></Category>
          <SecnondBanner></SecnondBanner>
          <PopularMenu></PopularMenu>
          <CallUs></CallUs>
          <FeaturedItem></FeaturedItem>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
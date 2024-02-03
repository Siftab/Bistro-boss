import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import PopularMenu from '../components/Menu/PopularMenu';
import FeaturedItem from '../components/Featured/FeaturedItem';

const Home = () => {
    return (
        <div>
          
          <Banner></Banner> 
          <Category></Category>
          <PopularMenu></PopularMenu>
          <FeaturedItem></FeaturedItem>
        </div>
    );
};

export default Home;
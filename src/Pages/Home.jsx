import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import PopularMenu from '../components/Menu/PopularMenu';

const Home = () => {
    return (
        <div>
          
          <Banner></Banner> 
          <Category></Category>
          <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;
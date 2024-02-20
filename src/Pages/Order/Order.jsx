import React, { useState } from 'react';
import CoverImg from '../../components/CoverImg';
import orderIMG from '../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../components/FoodCard';

const Order = () => {
    const [tabIndex,setTabIndex]=useState(0);
    return (
        <div>
            <CoverImg img={orderIMG} heading="Shop" subHeading=''></CoverImg>
            
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Dessert</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel> <h1>this is tab two</h1></TabPanel>
      <TabPanel><h1>this is tab one</h1></TabPanel>
      <TabPanel><h1>this is tab one</h1></TabPanel>
      <TabPanel>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
      </TabPanel>
      <TabPanel><h1>this is tab one</h1></TabPanel>
    </Tabs>
        </div>
    );
};

export default Order;
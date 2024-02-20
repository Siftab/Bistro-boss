import React, { useState } from 'react';
import CoverImg from '../../components/CoverImg';
import orderIMG from '../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../components/FoodCard';
import { useLoaderData } from 'react-router-dom';
import OrderTab from '../../components/OrderTab';

const Order = () => {
    const menu = useLoaderData();
    const desserts=  menu.filter(item => item.category === "dessert")
    const pizza= menu.filter(item => item.category === "pizza")
    const salad= menu.filter(item => item.category === "salad")
    const soup= menu.filter(item => item.category === "soup")
    const drinks= menu.filter(item => item.category === "drinks")
    
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
      <TabPanel>
            <OrderTab data={salad}></OrderTab>
      </TabPanel>

      <TabPanel>
      <OrderTab data={pizza}></OrderTab>
      </TabPanel>

      <TabPanel>
      <OrderTab data={soup}></OrderTab>
      </TabPanel>

      <TabPanel>
      <OrderTab data={desserts}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab data={drinks}></OrderTab>
      </TabPanel>
    </Tabs>
        </div>
    );
};

export default Order;
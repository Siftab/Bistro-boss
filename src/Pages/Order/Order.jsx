import React, { useState } from 'react';
import CoverImg from '../../components/CoverImg';
import orderIMG from '../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../components/FoodCard';
import { useLoaderData } from 'react-router-dom';

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
        <div className='grid grid-cols-3 gap-6'>
            {
                salad.map(item=> 
                    <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
      </TabPanel>

      <TabPanel>
      <div className='grid grid-cols-3 gap-6'>{
                pizza.map(item=> 
                    <FoodCard key={item._id} item={item}></FoodCard>)
            }</div>
      </TabPanel>

      <TabPanel>
      <div className='grid grid-cols-3 gap-6'>{
                soup.map(item=> 
                    <FoodCard key={item._id} item={item}></FoodCard>)
            }</div>
      </TabPanel>

      <TabPanel>
        <div className='grid grid-cols-3 gap-6'>{
                desserts.map(item=> 
                    <FoodCard key={item._id} item={item}></FoodCard>)
            }</div>
      </TabPanel>
      <TabPanel>
      <div className='grid grid-cols-3 gap-6'>{
                drinks.map(item=> 
                    <FoodCard key={item._id} item={item}></FoodCard>)
            }</div>
      </TabPanel>
    </Tabs>
        </div>
    );
};

export default Order;
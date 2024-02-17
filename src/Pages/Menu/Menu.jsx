import { Helmet } from 'react-helmet-async';
import CoverImg from '../../components/CoverImg';
import banner3 from '../../assets/menu/banner3.jpg'
import Section from '../../components/Section';
import SubMenu from '../../components/SubMenu';
import chefService from '../../assets/home/chef-service.jpg'
import { useEffect, useState } from 'react';


const Menu = () => {
    console.log("this is menu")
    const [items,setItems]=useState([]);
    const [desserts,setDesserts]=useState([]);
    const [pizza,setPizza]=useState([]);
    const [salad,setSalad]=useState([]);
    const [soup,setSoup]=useState([]);


    // console.log("items count",items,"soup",soup,"dessert",desserts,"salad",salad,"pizza",pizza)
    useEffect(()=>{
            fetch('/menu.json')
            .then(res=>res.json())
            .then(data=>{
                setItems(data.slice(0,6))
                setDesserts(data.filter(item => item.category ==="dessert"))
                setPizza(data.filter(item => item.category ==="pizza"))
                setSalad(data.filter(item => item.category ==="salad"))
                setSoup(data.filter(item => item.category ==="soup"))
            })
    },[])
    return (
        <div>
            <Helmet><title>Bistro Boss | Menu</title></Helmet>
            <CoverImg img={banner3} heading="our menu" subHeading="would you like to try a dish"></CoverImg>
                <Section Heading="todays offer" subHeading="Don't miss"></Section>
                <SubMenu items={items}></SubMenu>
                <CoverImg img={chefService} heading="desserts" ></CoverImg>
                <SubMenu items={desserts}></SubMenu>

                <CoverImg img={chefService} heading="pizza" ></CoverImg>
                <SubMenu items={pizza}></SubMenu>
                <CoverImg img={chefService} heading="salads" ></CoverImg>
                <SubMenu items={salad}></SubMenu>
                <CoverImg img={chefService} heading="soups" ></CoverImg>
                <SubMenu items={soup}></SubMenu>

            
        </div>
    );
};


export default Menu;
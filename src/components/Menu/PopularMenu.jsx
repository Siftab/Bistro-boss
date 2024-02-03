import { useEffect, useState } from "react";
import Section from "../Section";
import MenuTamplate from "./MenuTamplate";

const PopularMenu = () => {
    const [popularMenu,setPopularMenu]= useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{ 
            // const famous = data.filter(aData=> aData.category === "popular");
            // console.log(famous)
            setPopularMenu(data.filter(aData=> aData.category === "popular"))})
    },[])
    return (
        <div>
            <Section Heading={"From our menu"} subHeading={"Check it Out"}></Section>
            <MenuTamplate menu={popularMenu}></MenuTamplate>
        
        </div>
    );
};

export default PopularMenu;
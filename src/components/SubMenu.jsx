import { useEffect, useState } from "react";
import MenuTamplate from "./Menu/MenuTamplate";

const SubMenu = () => {
    const [items,setItems]=useState([]);

    console.log("items count",items)
    useEffect(()=>{
            fetch('/menu.json')
            .then(res=>res.json())
            .then(data=>{
                setItems(data.slice(0,6))})
    },[])
    return (
        <div className="my-10">
            <MenuTamplate menu={items}></MenuTamplate>
           <div className="flex items-center justify-center"> <button className="btn  border-b-4 btn-outline "> order your favourite food</button></div>
            
        </div>
    );
};

export default SubMenu;
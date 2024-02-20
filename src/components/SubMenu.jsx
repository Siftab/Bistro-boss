import { useEffect, useState } from "react";
import MenuTamplate from "./Menu/MenuTamplate";
import { Link } from "react-router-dom";

const SubMenu = ({ items, title }) => {

    return (
        <div className="my-10 ">
            <MenuTamplate menu={items} ></MenuTamplate>
            <div className="flex items-center justify-center mt-5"> <Link to={`/order/${title}`}><button className="btn  border-b-4 btn-outline "> order your favourite food</button></Link></div>

        </div>
    );
};

export default SubMenu;
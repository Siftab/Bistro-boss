import Section from "../Section";
import MenuTamplate from "./MenuTamplate";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
    // const [popularMenu,setPopularMenu]= useState([])
    const menu =useMenu();
   const popularMenu= menu.filter(aData=> aData.category === "popular")
   console.log(
    popularMenu
   )
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{ 
    //         // const famous = data.filter(aData=> aData.category === "popular");
    //         // console.log(famous)
    //         setPopularMenu(data.filter(aData=> aData.category === "popular"))})
    // },[])
    return (
        <div className="z-30">
            <Section Heading={"From our menu"} subHeading={"Check it Out"}></Section>
            <MenuTamplate menu={popularMenu}></MenuTamplate>
        
        </div>
    );
};

export default PopularMenu;
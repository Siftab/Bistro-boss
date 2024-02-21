import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ScrollTop = () => {
    const {pathname} = useLocation()
    console.log(pathname)

   useEffect(()=>{
    window.scrollTo({top,behavior:"instant"})
   },[pathname])
};

export default ScrollTop;
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollTop from '../Utils/ScrollTop';

const MainLayout = () => {
    ScrollTop();
    const  location = useLocation();

   
    const noHeaderFooter =location.pathname.includes("login") || location.pathname.includes("register");
    console.log(noHeaderFooter)
    return (
        <div className='max-w-screen-xl mx-auto'>
            {noHeaderFooter ||<Navbar></Navbar>}

            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}

        </div>
    );
};

export default MainLayout;
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollTop from '../Utils/ScrollTop';

const MainLayout = () => {
    ScrollTop()
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Navbar></Navbar>

            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;
import { Helmet } from 'react-helmet-async';
import CoverImg from '../../components/CoverImg';
import banner3 from '../../assets/menu/banner3.jpg'
import Section from '../../components/Section';
import SubMenu from '../../components/SubMenu';
import chefService from '../../assets/home/chef-service.jpg'


const Menu = () => {
    console.log("this is menu")
    return (
        <div>
            <Helmet><title>Bistro Boss | Menu</title></Helmet>
            <CoverImg img={banner3} heading="our menu" subHeading="would you like to try a dish"></CoverImg>
                <Section Heading="todays offer" subHeading="Don't miss"></Section>
                <SubMenu></SubMenu>
                <CoverImg img={chefService} heading="desserts" ></CoverImg>
            
        </div>
    );
};


export default Menu;
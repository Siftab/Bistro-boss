import Section from "../Section";
import featuredImg from "../../assets/home/featured.jpg"
import moment from "moment";

const FeaturedItem = () => {
    return (
        <div className='bg-cover text-white ' style={{backgroundImage: `url(${featuredImg})`}}   >
            {/* this is featured  */}
        <Section Heading={"from our menu"} subHeading={"Check it out"}></Section>
        <div className="flex items-center py-24 px-44 gap-5 my-10 ">
            <div><img src={featuredImg} alt="" /></div>
            <div >
                <h3>{moment().format('ll')}</h3>
                <h3 className="text-xl uppercase">where can i get some</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, expedita reprehenderit incidunt explicabo vel provident. Aut id possimus quia perspiciatis?</p>
                <button className="btn btn-outline text-white">read more</button>
            </div>
        </div>

        </div> 
    );
};

export default FeaturedItem;
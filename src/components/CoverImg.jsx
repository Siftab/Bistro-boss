// import { Parallax, Background } from 'react-parallax';

import { Parallax } from "react-parallax";



const CoverImg = ({ img, heading, subHeading }) => {
    return (
        <Parallax
        
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="banner image"
        strength={-300}>
            <div className='h-[600px] bg-cover flex items-center justify-center cinzel' 
            // style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <div className='text-white bg-black text-center px-40 py-36 bg-opacity-50 '>
                    <h1 className='font-bold text-[5.5rem] uppercase'>{heading}</h1>
                    <p className='text-xl font-semibold uppercase'>{subHeading}</p>
                </div>
            </div>

        </Parallax>


    );
};
CoverImg.defaultProps = {
    subHeading: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.."
}
export default CoverImg;
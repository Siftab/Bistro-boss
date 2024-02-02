            
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

import { Pagination } from 'swiper/modules';
import  { Swiper,SwiperSlide } from 'swiper/react';
import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'


const Category = () => {
    return (
        <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} />
        <h3 className='text-3xl text-center -mt-10 text-white  uppercase'>salads</h3></SwiperSlide>
        <SwiperSlide><img src={slide2} />
        <h3 className='text-3xl text-center -mt-10 text-white  uppercase'>pizza</h3></SwiperSlide>
        <SwiperSlide><img src={slide3} />
        <h3 className='text-3xl text-center -mt-10 text-white  uppercase'>soups</h3></SwiperSlide>
        <SwiperSlide><img src={slide4} />
        <h3 className='text-3xl text-center -mt-10 text-white  uppercase'>desserts</h3></SwiperSlide>
        <SwiperSlide><img src={slide5} />
        <h3 className='text-3xl text-center -mt-10 text-white  uppercase'>salads</h3></SwiperSlide>
      </Swiper>
    </>
    );
};

export default Category;
import { useEffect, useState } from "react";
import Section from "./Section";

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "autoprefixer";
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        // fetch("https://github.com/ProgrammingHero1/bistro-boss-restaurant-resources/blob/main/reviews.json",{mode:"no-cors"})
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
        // ()<SwiperSlide>Slide 1</SwiperSlide>
    }, [])

    return (
        <div>
            <Section Heading="testimonials" subHeading="What Our lients Says"></Section>
            reviews{reviews.length}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map(review => <SwiperSlide key={review._id}><div className="text-center"> 

                    <p className="text-xl px-16">{review.details}</p>
                    <h1 className="text-[#CD9003] text-3xl ">{review.name}</h1>
                </div></SwiperSlide>)}</Swiper>


        </div>
    );
};

export default Testimonials;
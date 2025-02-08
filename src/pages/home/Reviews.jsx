import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { RiDoubleQuotesL } from "react-icons/ri";
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                // console.log(data)
            }
            )
    })
    return (
        <div className="max-w-7xl mx-auto">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review =>
                        <SwiperSlide key={review._id}>
                            <div className="flex justify-center text-5xl">
                            <RiDoubleQuotesL />
                            </div>
                            <div className="text-center px-24 my-5">
                                <p>{review.details}</p>
                            </div>
                            <h1 className="text-center text-2xl text-orange-700 uppercase font-semibold">{review.name}</h1>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Reviews;
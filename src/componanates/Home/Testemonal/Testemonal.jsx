
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import imageA from '../../../assets/home/quote-left 1.svg'
const Testemonal = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
         fetch("review.json")
         .then(res => res.json())
         .then(data => setReviews(data))
    },[])
    return (
        <div>
             <div className='text-center  '>
            <p className='text-yellow-300  mb-2'>---What Our Clients Say---</p>
            <h2 className='font-bold text-2xl md:w-4/12 mx-auto border-y-2 mb-8 ' >TESTIMONIALS</h2>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

            {
                reviews.map(review => <SwiperSlide key={review._id}>
      
                    <div className='flex flex-col items-center mx-24 my-16'>
                        
                    <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                    />
                        <img className=' mt-4' src={imageA} alt="" />
                        <p className='py-8 text-center'>{review.details}</p>
                        <p className='text-orange-400'>{review.name}</p>
                    </div>
                </SwiperSlide>)
            }
       
      </Swiper>
        </div>
    );
};

export default Testemonal;
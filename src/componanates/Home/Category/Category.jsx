import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import image1 from '../../../assets/home/slide1.jpg';
import image2 from '../../../assets/home/slide2.jpg';
import image3 from '../../../assets/home/slide3.jpg';
import image4 from '../../../assets/home/slide4.jpg';
import image5 from '../../../assets/home/slide5.jpg';

const Category = () => {
    return (
        
      <section>
           
        <section className='text-center  '>
            <p className='text-yellow-300  mb-2'>---From 11:00am to 10:00pm---</p>
            <h2 className='font-bold text-2xl md:w-4/12 mx-auto border-y-2 mb-8 ' >ORDER ONLINE</h2>
        </section>
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12"
      >
        <SwiperSlide><img src={image1} alt="" />
         <h2 className='text-center uppercase text-white -mt-16 text-3xl font-bold font-sans '>Salads</h2>
        </SwiperSlide>
        <SwiperSlide><img src={image2} alt="" />
        <h2 className='text-center uppercase text-white -mt-16 text-3xl font-bold font-mono '>Pizza</h2></SwiperSlide>
        <SwiperSlide><img src={image3} alt="" /><h2 className='text-center uppercase text-white -mt-16 text-3xl font-bold font-mono '>Soup</h2></SwiperSlide>
        <SwiperSlide><img src={image4} alt="" />
        <h2 className='text-center uppercase text-white -mt-16 text-3xl font-bold font-mono '>desserts</h2>
        </SwiperSlide>
        <SwiperSlide><img src={image5} alt="" />
        <h2 className='text-center uppercase text-white -mt-16 text-3xl font-bold font-mono '>Salads</h2>
        </SwiperSlide>
      
      </Swiper>
      </section>
    );
};

export default Category;
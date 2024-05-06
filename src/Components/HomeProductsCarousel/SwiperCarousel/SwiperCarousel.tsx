"use client"
import {Swiper, SwiperSlide} from 'swiper/react';
import {Box} from '@mui/material';

import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import ProductCard from '@/Components/ProductCard/ProductCard';
import {IProduct} from '@/Types/Types';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// install Swiper modules



const SwiperCarousel = ({data, delay} : {
    data: IProduct[],
    delay?: number
}) => {

    return (
        <Box
            sx={{
            // pt: {
            //     xs: '.5em',
            //     sm: '2em'
            // },
            width: '100%',
            maxWidth: 'lg',
            margin: '0em auto',
            display: {
                xs: 'flex'
            },
            height: '100%'
        }}>
  <Swiper
          
              freeMode={true}
              autoplay={{
                delay:  delay || 1000,
                disableOnInteraction: true,
              }}
              navigation={false}
            spaceBetween={10}
            slidesPerView={2}
            slidesPerGroup={1}

            pagination={false}
            // pagination={{
            //   clickable: false,
            // }}
            modules={[FreeMode, Pagination]}



            breakpoints={{
                200 : {
                    slidesPerView:2,
                },
                540: {
                    slidesPerView: 3,
                  },
                  
                  1024: {
                    slidesPerView: 4,
                  },
                  1640: {
                    slidesPerView: 5,
                  },
                
               
        }}
        
        >
{data && data.length > 0 && data.slice().reverse().map((item : any) => {
                    if (!item._id) 
                        return
                    return <SwiperSlide
                        style={{
                        marginRight: '0 !important'
                    }}
                        key={item._id}>
                        <ProductCard
            stock={item?.stock}

                        sizes={item?.sizes}
                newPrice={item?.newPrice}

                        inStock={item?.inStock}
                            // height={'400px'}
                        width='100%'
                            title={item.title}
                            images={item.images}
                            price={item.price}
                            _id={item._id}
                            category={item.category}/>
                    </SwiperSlide>
                })
}

            </Swiper>
        </Box>

    );
};

export default SwiperCarousel

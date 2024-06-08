"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import Btn from './Btn/Btn';



const Preloader3 = ({res}:{res:any}) => {
   
    const router = useRouter()
 const [imgs,setImgs] = useState(
     
     [
        {
            img: "https://ucarecdn.com/401b7064-5775-4200-91a3-59fd170294c5/RolexDesk1920x6553.webp",
            text: "",
            position: '',

        },
        {
            img: `https://ucarecdn.com/e9c63dfe-42b7-4048-a536-15dbde376c43/ad.JPG`,
            position: '',
            text:'',
        },
        {
            img: "https://ucarecdn.com/57ed3c26-f5de-47c3-a5f3-fb052a7d48c3/DecTudorDesk1920x655.webp",
            text: ""
        },
]
)
console.log('imgs: ', imgs);
useEffect(() => {
  

    if (res && res[0]?.imagesArray) {
        setImgs(res[0]?.imagesArray)
    }
}, [])

//   const {text} = useLanguage()
    
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            maxWidth:'none',
            // maxWidth: 'lg',
            minHeight:'300px',
            height:'100%',
            maxHeight:{sm:'100%',md:'400px',lg:'100%'},
            margin: '0 auto',
            // height : {xs:'100%',sm:'450px',md:'100%'},
            
            display: {
                xs: 'flex'
            },
            // mt:20,
        }}>
            <Swiper
            
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs  && imgs?.map((item) => {
    
                    return <SwiperSlide 
                     
                    className='ztop  ' key={item?.img}>
                        <Box
                            sx={{
                                position:'relative',
                                height: '100%',
                            width:'100%'
                        }}>
                      
                            <img
            
                                className={`img contain  ${item?.position} 
                                `}
                                // ${item?.className}
                                src={`${item.img}`}
                                alt="Main Carousel Image"/>
           
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader3
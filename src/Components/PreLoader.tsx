"use client"
import React, { useEffect, useState } from 'react'
import { Box,  Container, Grid, Typography } from "@mui/material"
// import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
// import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
// import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import Btn from './Btn/Btn'
import ContactSection from './ContactSection/ContactSection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import HomeCategoryList from './HomeCateogryList/HomeCategoryList'
import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import { useCategoriesContext } from '@/context/Contexts'

const 
PreLoader = ({data,featuredProducts,resImages,vids}:any) => {
  const {categories} = useCategoriesContext();
  console.log('categories: ', categories);
  
  // let videosArray = vids && vids[0]?.videos?.videos || null
  // const router= useRouter();
  // const {text} = useLanguage()
  // const textsArray = [
  //   {
  //     id: 1,
  //     title: text('100% Natural', '100٪ طبيعي'),
  //     desc: text(
  //       'Our honey is sourced from the purest natural environments, ensuring 100% natural goodness without any artificial additives or preservatives.',
  //       'عسلنا يأتي من أجواء طبيعية نقية، مما يضمن لك الخير الطبيعي بنسبة 100٪ دون أي إضافات صناعية أو مواد حافظة.'
  //     ),
  //   },
  //   {
  //     id: 2,
  //     title: text('Purity and Potency', 'النقاء والفعالية'),
  //     desc: text(
  //       'We carefully select our beehives in pristine locations, ensuring the purity and potency of our honey, so you experience the best benefits.',
  //       'نحن نختار خلايانا بعناية في أماكن نقية، مما يضمن نقاء وفعالية عسلنا، لتجربة فوائد متميزة.'
  //     ),
  //   },
  //   {
  //     id: 3,
  //     title: text('Expertly Formulated', 'صياغة خبيرة'),
  //     desc: text(
  //       'Our honey is expertly crafted by our team of experienced beekeepers, ensuring a premium product that delivers superior taste and quality.',
  //       'تم تصنيع عسلنا بخبرة من قبل فريق من مربي النحل ذوي الخبرة، مما يضمن لك منتجًا ممتازًا يقدم طعمًا وجودة فائقين.'
  //     ),
  //   },
  //   {
  //     id: 4,
  //     title: text('Great Value', 'قيمة عظيمة'),
  //     desc: text(
  //       'Ghanem Trading honey provides great value for your health, offering the highest quality honey at an affordable price for you and your family.',
  //       'عسل بي أورجانيك يقدم قيمة عظيمة لصحتك، حيث يوفر عسل عالي الجودة بسعر معقول لك ولعائلتك.'
  //     ),
  //   },
  // ];
  
  

  return (
    <Box >
      <MainCarousel imgs={resImages}/>
      {/* <HomeProductCollection  products={data}/> */}

{
  categories &&
  <HomeCategoryList categories={categories}/>

}
    
        <HomeProductsCarousel  data={data} Collectiontitle={'Our Latest Collections'} delay={2000}/>
  


      {/* <Perks/> */}

        <Grid container className='flex' sx={{gap:1,px:1}}>
          <Grid item xs={12} sm={5.9}>
            <Box>
              <img src="https://www.ishtari.com/image/data/system_banner/10000/3600/3424/app-1.jpg" alt="" className="img" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={5.9}>
            <Box>
              <img src="https://www.ishtari.com/image/data/system_banner/10000/3600/3424/app-2.jpg" alt="" className="img" />
            </Box>
          </Grid>
        </Grid>
   
        <HomeProductsCarousel  sx={{mt:2}} data={data.slice(7,12)} Collectiontitle={'Home & Tools Collection'} delay={2000}/>



        <Grid container className='flex' sx={{gap:1,px:1}}>
          <Grid item xs={12} sm={5.9}>
            <Box>
              <img src="https://www.ishtari.com/image/data/system_banner/10000/3600/3456/cleaning.png" alt="" className="img" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={5.9}>
            <Box>
              <img src="https://www.ishtari.com/image/data/system_banner/10000/3600/3456/car-tools.png" alt="" className="img" />
            </Box>
          </Grid>
        </Grid>
   
        <HomeProductsCarousel  sx={{mt:2}} data={data.slice(6,33)} Collectiontitle={'Car & Cleaning Collection'} delay={2000}/>
       
       
       

      <FullscreenPoster img={` https://www.ishtari.com/image/data/system_banner/10000/3600/3449/moulinex-web.png`} imgPc={`https://www.ishtari.com/image/data/system_banner/10000/3600/3449/moulinex-web.png`} />


      <Container className='' sx={{maxWidth:'lg',pt:1,pb:4}}>
   

        <Box sx={{mt:1}} className='flex row  wrap justify-between center text-center'>
          {[
            `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/dorsch.png`,
           `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/electrolux.png`,
           `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/kenwood.png`,
           `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/korkmaz.png`,
           `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/optimal.png`,
           `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/chicco.png`,
           `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/braun.png`,
           `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/beper.png`,
           `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/barista.png`,
           `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/tefal.png`,
           `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/total.png`,
           `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/mulinex.png`,
          ].map(i=>{
            return  <Box key={i} sx={{width:{xs:'30%',sm:'22%',md:'22%'},maxWidth:'220px'}}>
            <Box>
              <img 
               src={i} alt="" className="img" />
              </Box>
              

            </Box>
          })}
        </Box>


      </Container>



        <ContactSection/>
  </Box>
  )
}

export default PreLoader
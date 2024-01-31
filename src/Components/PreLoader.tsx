"use client"
import React from 'react'
import { Box,  Container, Grid, Typography } from "@mui/material"
// import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
// import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'
// import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import Testimonials from './Testimonials/Testimonials'
import Btn from './Btn/Btn'
import useLanguage from '@/Hooks/useLanguage'
import ContactSection from './ContactSection/ContactSection'

const 
PreLoader = ({data,resImages}:any) => {
  const router= useRouter();
  const {text} = useLanguage()
  const textsArray = [
    {
      id: 1,
      title: text('100% Natural', '100٪ طبيعي'),
      desc: text(
        'Our honey is sourced from the purest natural environments, ensuring 100% natural goodness without any artificial additives or preservatives.',
        'عسلنا يأتي من أجواء طبيعية نقية، مما يضمن لك الخير الطبيعي بنسبة 100٪ دون أي إضافات صناعية أو مواد حافظة.'
      ),
    },
    {
      id: 2,
      title: text('Purity and Potency', 'النقاء والفعالية'),
      desc: text(
        'We carefully select our beehives in pristine locations, ensuring the purity and potency of our honey, so you experience the best benefits.',
        'نحن نختار خلايانا بعناية في أماكن نقية، مما يضمن نقاء وفعالية عسلنا، لتجربة فوائد متميزة.'
      ),
    },
    {
      id: 3,
      title: text('Expertly Formulated', 'صياغة خبيرة'),
      desc: text(
        'Our honey is expertly crafted by our team of experienced beekeepers, ensuring a premium product that delivers superior taste and quality.',
        'تم تصنيع عسلنا بخبرة من قبل فريق من مربي النحل ذوي الخبرة، مما يضمن لك منتجًا ممتازًا يقدم طعمًا وجودة فائقين.'
      ),
    },
    {
      id: 4,
      title: text('Great Value', 'قيمة عظيمة'),
      desc: text(
        'Bee Organic honey provides great value for your health, offering the highest quality honey at an affordable price for you and your family.',
        'عسل بي أورجانيك يقدم قيمة عظيمة لصحتك، حيث يوفر عسل عالي الجودة بسعر معقول لك ولعائلتك.'
      ),
    },
  ];
  

  return (
    <Box >
      <MainCarousel resImages={resImages}/>
      <HomeProductCollection  products={data}/>

      <Grid container sx={{maxWidth:'lg',mx:'auto'}}>
        <Grid className='flex items-center' item xs={12} md={5}>
            <Box className=' col flex items-center' sx={{
              background:'#eef6f9 ',
             px:{xs:1,sm:4},py:4,
              borderRadius:'4px',
              transform:{md:'translateX(25%)'},
           }}>
            <Typography
component={'h1'}
    className='sectionTitle   text-center box'
    sx={{
 
    fontSize: {
        xs: '2em',
        sm: '3em'
    },
    padding:.5,
    fontWeight: '900'
}}>
 Diamond Painting is easy and fun!
</Typography>
<Typography
component={'p'}
    className='sectionTitle   text-center box'
    sx={{
 
    fontSize: {
        xs: '.8em',
        sm: '1em'
    },
    padding:.5,
    fontWeight: '300'
}}>
Explore our curated collection of diamond painting kits designed to inspire and captivate. 
</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box className='auto' sx={{width:'95%',height:'100%'}}>
            <img style={{borderRadius:'4px'}} src="https://www.diamondartclub.com/cdn/shop/products/panda-valley-diamond-art-painting-28849132699841.jpg?v=1618161449&width=4058" alt="" className="img" />
          </Box>
        </Grid>
      </Grid>

      <Grid container sx={{my:{xs:6,sm:12},maxWidth:'lg',mx:'auto'}}>
      <Grid item xs={12} md={7}>
          <Box className='auto' sx={{width:'95%',height:'100%'}}>
            <img style={{borderRadius:'4px'}} src="https://files.ekmcdn.com/d43ebb/images/diamond-dotz-diamond-painting-kit-kitty-basket-1-249415-p.webp" alt="" className="img" />
          </Box>
        </Grid>
        
        <Grid className='flex items-center' item xs={12} md={5}>
            <Box className=' col flex items-center' sx={{
              background:'#eef6f9 ',
             px:{xs:1,sm:4},py:4,
              borderRadius:'4px',
              transform:{md:'translateX(-25%)'},
           }}>
            <Typography
component={'h1'}
    className='sectionTitle   text-center box'
    sx={{
 
    fontSize: {
        xs: '2em',
        sm: '3em'
    },
    padding:.5,
    fontWeight: '900'
}}>
 Lebanon&apos;s Shining DIY Trend
</Typography>
<Typography
component={'p'}
    className='sectionTitle   text-center box'
    sx={{
 
    fontSize: {
        xs: '.8em',
        sm: '1em'
    },
    padding:.5,
    fontWeight: '300'
}}>
Elevate your crafting game with DIY Crafts Diamond Painting. Join the trend sweeping Lebanon—easy, enjoyable, and dazzling creativity at your fingertips.
</Typography>
            </Box>
        </Grid>
     
      </Grid>

      <Perks/>

      <Box className='bg'>
            <Container sx={{py:8}} className='flex row wrap justify-around space-around'>
              {[{
                img:'https://www.diamonddotz.com/image/banners/greeting-cards.jpg',
                category:'Greeting Cards'
              },
              {
                img:'https://www.diamonddotz.com/image/banners/dotz-box.jpg',
                category:'DOTZ BOX'
              },
              {
                img:'https://www.diamonddotz.com/image/banners/accessories.jpg',
                category:'Freestyle Accessories'
              },
              {
                img:'https://www.diamonddotz.com/image/banners/dotzies.jpg',
                category:'DOTZIES Kits for kids'
              }
              
              ].map(i=>{ return    <Box sx={{my:2,height:{xs:'100%'},maxWidth:'550px',width:{xs:"95%",sm:'49%'}}} key={i?.category}>
                
                <Box sx={{height:{xs:'400px',sm:'500px',md:'600px'},width:'100%'}}>
                      <img style={{borderRadius:'4px'}} src={`${i?.img}`} alt="" className="img" /> 
              </Box>
              <Box sx={{pt:1}} className='flex row justify-between space-between'>

                    <Typography component='h1' sx={{fontSize:'1.5em'}} className='center'>
                      {i?.category}
                    </Typography>
                    <Btn sx={{border:'none'}}>
                      Shop Now
                    </Btn>
              </Box>
                </Box>
            })}
            </Container>
      </Box>
      {/* <HomeProductCollection  products={data}/> */}


    

        
        <ContactSection/>
  </Box>
  )
}

export default PreLoader
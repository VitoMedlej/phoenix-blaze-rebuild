"use client"
import FAQ from '@/Components/FAQ/FAQ'
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
    `DIY Crafts Diamond Painting is a unique and enjoyable craft that combines the precision of paint-by-numbers with the sparkle of beautiful diamonds. Our kits come with everything you need to create stunning, shimmering works of art, right from the comfort of your own home. Each kit includes a canvas with a pre-printed design, a set of colorful resin diamonds, and all the tools you need to place each diamond in its proper place.`,
   `Our products are designed with the customer in mind. The canvas in each kit is clearly marked with symbols that correspond to the colors of the diamonds, making it easy to follow along and create your masterpiece. The diamonds themselves are made of high-quality resin that catches the light and sparkles brilliantly, bringing your artwork to life.`,
`Creating a diamond painting is a simple and relaxing process. Simply dip the applicator tool into the wax, pick up a diamond by its flat side, and place it on the corresponding symbol on the canvas. It’s a soothing, repetitive process that’s perfect for unwinding after a long day. And the best part? Watching your artwork come to life, one diamond at a time`,
`At DIY Crafts Diamond Painting, we believe that everyone is an artist. Our kits are designed to be user-friendly and suitable for crafters of all skill levels, from beginners to seasoned pros. So why wait? Dive into the world of diamond painting and discover the artist within you!`,
  
]
const Index = () => {
  return (
    <Container maxWidth='lg' className='auto' sx={{mx:1,py:4}}>
         
        <Typography sx={{fontSize:{xs:'2em',sm:'3em'},fontWeight:900}} component='h1'>
            About us - Diy Crafts Diamond Painting
        </Typography>
        <Box sx={{my:4}}>
                {
                    text.map(i=>{
                            return <Typography key={i} sx={{maxWidth:'md',py:1}} className=''>{i}</Typography>
                    })
                } 
        </Box>
      
    </Container>
  )
}

export default Index
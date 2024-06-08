"use client"
import FAQ from '@/Components/FAQ/FAQ'
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
    `PhoenixBlaze is a leading name in the Lebanese market, known for its commitment to quality, reliability, and customer satisfaction. With years of experience in the industry, we have established ourselves as a go-to destination for premium electronics and home appliances.`,
   `Our journey began with a simple mission: to provide our customers with access to the latest innovations in technology and home convenience, all under one roof. Today, we continue to uphold this commitment by offering a diverse range of products from top brands, coupled with unparalleled service and support.`,
`What sets us apart is our dedication to fostering long-term relationships with our customers. We understand that each purchase is an investment, which is why we strive to offer personalized assistance and guidance every step of the way. Whether you're shopping online or visiting our showroom, our knowledgeable team is here to help you find the perfect solution to meet your needs.`,
`At PhoenixBlaze, we don't just sell products; we deliver peace of mind. Join us on our journey and experience the difference firsthand.`,
  
]
const Index = () => {
  return (
    <Container maxWidth='lg' className='auto' sx={{mx:1,py:4}}>
         
        <Typography sx={{fontSize:{xs:'2em',sm:'3em'},fontWeight:900}} component='h1'>
        Welcome to PhoenixBlaze
        </Typography>
        <Box sx={{my:4}}>
                {
                    text.map(i=>{
                            return <Typography key={i} sx={{maxWidth:'md',py:1}} className=''>{i}</Typography>
                    })
                } 
        </Box>
                <FAQ/>
    </Container>
  )
}

export default Index
"use client"
import {Box, Divider, Typography} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { IProduct } from '@/Types/Types'
import Btn from '../Btn/Btn'
import SwiperCarousel from './SwiperCarousel/SwiperCarousel'
import { useRouter } from 'next/navigation'
const ProductCollection = ({sx,delay,Collectiontitle,data,setQuickView} : {
    Collectiontitle: string,
    delay : number,
    data: IProduct[],
    sx ?: any;
    setQuickView ?: Dispatch<SetStateAction<{
        isOpen: boolean;
        productId: null | string;
    }>>
}) => {
    
    const router = useRouter()

    return (
        <Box
            sx={{
            maxWidth: 'lg',
            width :'99%',
            margin: '0 auto',
            // my: '3em',
            mt:'4em',
            mb:'3em',
            ...sx,
        }}>
             <Box className="flex justify-between col auto" sx={{px:1,pt:8,pb:4,maxWidth:'lg'}}>

<Typography
component={'h1'}
    className='sectionTitle  center text-center box'
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
    className='sectionTitle  center text-center box'
    sx={{
 
    fontSize: {
        xs: '1em',
        sm: '1.1em'
    },
    padding:.5,
    fontWeight: '300'
}}>
Relax and unwind as you seamlessly create your own stunning diamond art.
</Typography>

<Btn 
sx={{width:'fit-content',border:'1px solid #eef6f9 ',mt:1,mx:'auto'}}
onClick={()=>router.push('/collection/products')}
>
   Explore More
</Btn>
</Box>
            
            <Box
                sx={{
                display: {
                    xs: "flex",
                 
                }
            }}>
                <SwiperCarousel
                delay={delay}
                
                data={data && data.length > 0 && data?.slice(0,25) || []}/>
            </Box>

   
{/* <Divider  light /> */}
        
                </Box>
                
                )
                
            }

export default ProductCollection
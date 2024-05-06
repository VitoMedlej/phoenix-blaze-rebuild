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
             <Box className="flex justify-between row auto" sx={{px:1,pt:8,pb:4,maxWidth:'lg'}}>

<Typography
component={'h1'}
    className='sectionTitle  center text-center box'
    sx={{
 
    fontSize: {
        xs: '1em',
    },
    padding:.5,
    fontWeight: '500'
}}>
 Our Latest Collections
</Typography>


<Btn 
sx={{width:'fit-content',border:'1px solid #eef6f9 ',color:'white',mx:.5}}
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
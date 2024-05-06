"use client"
// import {IProduct} from '@/Types/Types'
import {Box, Typography} from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
// import {GrAdd} from 'react-icons/gr'
import {useRouter} from 'next/navigation'
import useCart from '@/Hooks/useCart'

import { BsCartPlus } from "react-icons/bs";

const ProductCard = ({
    title,
    price,
    sizes,
    stock,
    images,
    category,
    _id,
    width,
    height,
    inStock
    ,
    newPrice

} : {
    inStock?:boolean,
    _id: string,
    title: string,
    stock?: string | number,
    sizes: {
        size: number;
        price: number;
      }[] | null;
    price: number,
    newPrice ?: number,
    images: string[],
    category: string,
    width?: string | number | any,
    height?: string | number
}) => {
    const router = useRouter()
    const {addToCart}= useCart()
    return (
        <Box
            className='  trans cardproduct center text-center'
            sx={{
            // boxShadow: `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px`,
            // border : '1px solid #000000a',
            py: 1,
            margin: '0em auto',
            my:1,
            minWidth: {sm:'30%'},
            width: width
                ? width
                : {
                    xs: '48%',
                    sm: '32%',
                    md:'22%'
                }
            
        }}>
            <Box 
            className='cursor auto'
               onClick={() => router.push(`/product/${_id}`)}
            sx={{
                width:{xs:'98%',sm:'100%',md:'auto'},
                height: height || {xs:'250px',sm:'350px',md:'400px'}
            }}>
                <img
                    src={images
                    ? `${images[0]}/-/resize/600/`
                    : ''}
                    alt="Prdouct image"
                    className="img contain"/>
            </Box>
            
            <Box 
            sx={{
                // px: .95,
                mt:1.5,
            }}>  <Typography
            className=' cursor limited   '
                    component='h1'
                    onClick={() => router.push(`/product/${_id}`)}
                    sx={{
                        color:'black',
                        textAlign:'left'
                    ,fontSize: {xs:'.8em',sm:'1.15em',md:'1.32em'},
                    fontWeight: '400'
                }}>
                    {title}
                </Typography>
        
               
              
               {inStock !== false && Number(stock) !== 0  ?
               <>
               <Typography
               component='p'
    sx={{
        mb: 0.5,
        fontWeight: '400',
        color:'green',
        fontSize: { xs: '.9em', sm: '1em' },
    }}
>
    {category?.toLocaleLowerCase() !== 'almost done' && newPrice ? (
        <>
            <s>{price}$</s> {newPrice}$
        </>
    ) : (
        category?.toLocaleLowerCase() !== 'almost done' && price ? `${price}$` : category
    )}
</Typography>
               {/* <Typography
                    sx={{
                    mb:.5,
                    color:'green',
                    fontWeight: '700',
                    fontSize: {xs:'.99em',sm:'1em'}
                }}>
                    {price}$
                </Typography> */}
               {category?.toLocaleLowerCase() !== 'almost done' && <Btn 
            className='cursor bg black  gap1'
                
                     onClick={()=>
                        sizes &&  sizes?.length > 0 ? 
                        router.push(`/product/${_id}`)
                        :  Number(stock) !== 0 &&
                        addToCart(1,_id,{title,category,img:images[0],_id,price:newPrice?Number(newPrice):price},true)}
                    v2
                    sx={{
                        color:'black !important',

                        margin:'0 auto'
                    // borderRadius:'8',
                        ,
                        ':hover':{color:'black !IMPORTANT',background:'#eef6f9 '}
                }}>
                    <Box  className="flex">

                    {/* {sizes && sizes?.length > 0 ? 'Select Size' :  'ADD'} */}
                    <BsCartPlus color='white' fontSize='20px'/>
                    </Box>
                </Btn>}
                
               </>

               :

        (category?.toLocaleLowerCase() !== 'almost done' || category?.toLocaleLowerCase() !== 'customized' ?          <Typography
                    sx={{
                    mb:.5,
                    color:'red',
                    fontWeight: '600',
                    fontSize: {xs:'.99em',sm:'1.06em'}
                }}>
                    Out Of Stock
                </Typography> :`${category}`)
                }
            </Box>
        </Box>
    )
}

export default ProductCard
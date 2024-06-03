"use client"
import Btn from '@/Components/Btn/Btn'
import HomeProductsCarousel from '@/Components/HomeProductsCarousel/HomeProductsCarousel'
import ProductImageCarousel from '@/Components/ProductImageCarousel/ProductImageCarousel'
import { Box, CircularProgress, Divider, Grid, Typography } from '@mui/material'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import useCart from '@/Hooks/useCart'
import { useEffect, useState } from 'react'
import { IProduct } from '@/Types/Types'
import { useParams } from 'next/navigation'
import { server } from '@/Utils/Server'
import { QuantityPicker } from '@/Components/Shared/QuantityPicker/QuantityPicker'
import ProductOptionSelect from '@/Components/ProductOptionSelect/ProductOptionSelect'
import SelectWeight from '@/Components/SelectWeight/SelectWeight'

const Index = () => {
    const { productId } = useParams()
    const { incrementQty } = useCart()
    const { addToCart } = useCart()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<{ product: IProduct | any; moreProducts: IProduct[] | never[] }>({
        product: null,
        moreProducts: []
    })

    const hasMultipleColors = data?.product?.colors !== null && data?.product?.colors?.length > 0 ? data?.product?.colors[0] : []
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    const [productselectedColor, setproductselectedColor] = useState(hasMultipleColors)

    const [selectedSize, setselectedSize] = useState<any>(null);
    console.log('selectedSize: ', selectedSize);

    const InitialFetch = async () => {
        try {
            setLoading(true)
            const req = await fetch(`${server}/api/get-by-id?id=${productId}`, { cache: 'no-store' })
            const res = await req.json()

            if (res?.success && res?.product) {
                setData({ product: res?.product, moreProducts: res?.moreProducts })

                const multiWeight = res.product.sizes !== null && res.product.sizes?.length > 0
                    ? res.product.sizes[0] : { price: res.product.price, size: res.product.size }
                console.log('multiWeight: ', multiWeight);
                setselectedSize(multiWeight)

                setLoading(false)
            }
            setLoading(false)
            return null

        } catch (er) {
            console.log('er getAll: ', er);
            setLoading(false)
        }
    }

    useEffect(() => {
        InitialFetch()
        return () => setLoading(false)
    }, [])

    return (
        <Box sx={{ mt: 4 }}>
            {!loading && data?.product !== undefined && data?.product?.title ?
                <Grid sx={{ maxWidth: 'lg', mx: 1, pt: { sm: 15, md: 15, lg: 9 } }} className='auto' container>
                    <Grid item xs={12} md={6}>
                        <ProductImageCarousel images={data?.product?.images} />
                    </Grid>
                    <Grid sx={{ px: { xs: 1, sm: 1.5 } }} item xs={12} md={5}>
                        <Box sx={{ pt: { xs: 3, sm: 0 } }}>
                            <Typography component={'h1'} sx={{ fontWeight: 600, pt: 1, fontSize: { xs: '1.8em', sm: '2em', md: '2em' } }}>
                                {data?.product?.title || 'Loading Product Details'}
                            </Typography>
                            {data?.product?.inStock !== false &&
                                <Typography component={'h1'} sx={{ color: 'green', my: .25, fontWeight: 500, fontSize: { xs: '1em', sm: '1.55em' } }}>
                                    ${selectedSize?.price || data?.product?.price || 0}
                                </Typography>}
                            <Divider></Divider>
                            <Box sx={{ pt: 2 }} className="flex row ">
                                <SelectWeight
                                    selectedSize={selectedSize}
                                    setselectedSize={setselectedSize}
                                    sizes={data?.product?.sizes && data?.product?.sizes?.length > 0 ? data?.product?.sizes :
                                        [{ price: Number(data?.product?.price), size: data?.product?.size }]
                                    } />
                            </Box>
                        </Box>
                        {data?.product?.colors && data?.product?.colors?.length > 0 &&
                            <Box className='flex' sx={{ py: 2 }}>
                                <Box className='flex wrap row' sx={{ gap: '.1em' }}>
                                    {data?.product?.colors.map((color: string) => {
                                        return <Box className='cursor' key={color}
                                            onClick={() => setproductselectedColor(color)}
                                            sx={{ mx: 1, width: '20px', height: '20px', background: color, border: ` ${color === productselectedColor ? '1px solid black' : ' 0px solid transparent'}` }}></Box>
                                    })}
                                </Box>
                            </Box>}
                        {data?.product?.inStock !== false ?
                            <Box className='flex wrap ' sx={{ mt: 1, position: 'relative' }}>
                                <Box className='flex row center items-center w100' sx={{ width: { xs: 'max-content', sm: '100%' } }}>
                                    <QuantityPicker
                                        onChange={(e: number) => { setSelectedQuantity(e) }}
                                        min={1} max={10} value={selectedQuantity} />
                                    <Btn
                                        onClick={() =>
                                           addToCart(selectedQuantity, `${data?.product?._id}`,
                                            { title: data.product.title, category: data.product.category, 
                                              img: data.product.images[0], 
                                              _id: data.product._id, 
                                              price: selectedSize?.price ? selectedSize?.price : data?.product?.price, productselectedSize: selectedSize?.size, productselectedColor: productselectedColor || null }, true, true)}
                                        sx={{ gap: .5, color: 'white', borderRadius: 0, width: { xs: '100%', sm: '100%' } }}>
                                        ADD TO CART
                                    </Btn>
                                </Box>
                                <a className='center  text-center' style={{ textDecoration: 'none', width: '100%' }} href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}?text=I would like to know more about: ${data?.product?.title || 'Product Name'}`} target='_blank' rel='noopener'>
                                    <Btn sx={{ gap: .5, borderRadius: 0, mt: 1, border: '1px solid black', background: 'white', color: 'black', width: { xs: '100%' } }}>
                                        BUY IT NOW
                                    </Btn>
                                </a>
                            </Box>
                            :
                            <Typography component={'h1'} sx={{ color: 'red', fontWeight: 400, pt: 1, fontSize: { xs: '1.5em', sm: '2.25sem' } }}>
                                Out of Stock
                            </Typography>
                        }
                        <Divider></Divider>
                        <Box sx={{ pt: 4 }}>
                            {data?.product?.Category &&
                                <Box>
                                    <Typography>
                                        {data.product.category}
                                    </Typography>
                                </Box>}
                            <Typography className='gray' sx={{ whiteSpace: 'pre-wrap', maxWidth: '100%' }} dangerouslySetInnerHTML={{ __html: data?.product?.description }} />
                        </Box>
                    </Grid>
                    <Divider sx={{ my: 2 }}></Divider>
                </Grid> :
                <Box className='flex auto center align-center' sx={{ py: 15 }}>
                    <CircularProgress />
                </Box>
            }
        </Box>
    )
}

export default Index

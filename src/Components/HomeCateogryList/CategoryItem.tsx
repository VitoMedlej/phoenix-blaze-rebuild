"use client"
import {Box, Typography} from "@mui/material"
import {useRouter} from "next/navigation"
// import {ICategoryItem} from "../../src/Types"


const CategoryItem = ({img, desktopHeight,phone,height, href, title} : any) => {
    const router = useRouter()

    return (
        <Box
            className='box'
            onClick={() => router.push(`/real-estate-and-homes/${href}`)}
            sx={{
                display:'flex',
            // display : {xs:phone ? 'flex' : 'none',sm:'flex'},
           width:{xs:'150px',sm:'200px'},
           height:{xs:'150px',sm:'200px'},
            position: 'relative',
            margin: '5px',
            cursor: 'pointer',
            transition: '.2s ease',
            overflow: 'hidden'
        }}>
            <Box className='layerText'>
                <Typography fontSize='1.4em'>
                    {title}
                </Typography>
            </Box>
            <Box
                className='layered'
                sx={{
                width: '100%',
                position: 'absolute',
                height: `100%`,
                borderRadius: '0%'
            }}>
                
                <img  className='img   contain' src={`${img}`} alt="Category Image"/>
            </Box>
        </Box>
    )
}
export default CategoryItem
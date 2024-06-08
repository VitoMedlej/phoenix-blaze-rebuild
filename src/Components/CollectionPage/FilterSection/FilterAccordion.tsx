"use client"

import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import {MdOutlineExpandMore} from 'react-icons/md';

// import RadioGroupForm from './Forms/RadioGroupForm';
import SelectOneForm from './Forms/SelectOneForm';
import { Box, MenuItem } from '@mui/material';
import Btn from '@/Components/Btn/Btn';
import { categories } from '@/Components/Navbar/Navbar';
import { getCategorySubcategories, mainCategories } from '@/Components/Sidebar/NestedAccordion';
import { useCategoriesContext } from '@/context/Contexts';
// import SearchInput from '@/Components/Navbar/SearchInput';

export default function SimpleAccordion({handleSubmit,options,setOptions}:any) {
    const {categories} = useCategoriesContext();
    let categoryArray = categories && categories?.map((category:any) => category?.categoryName);
    const handleChange = (val: string) => {
        // setValue(();
        // let val = (event.target as HTMLInputElement).value;
        setOptions({...options,category:val})
      };
      const handleTypeChange = (val: string) => {
        // setValue(();
        // let val = (event.target as HTMLInputElement).value;
        setOptions({...options,type:val})
      };
    // const handlePrice = (value:number[]) => {
    //     // let price = ;
    //     setOptions({...options,price:value})
    // }
    const handleSort = (val:string) => {
        setOptions({...options,sort:val})
    }
    const filters = [
        // {
        //     title: 'Price',
        //     comp: <SliderForm
        //     value={options.price}
        //     onChange={handlePrice}
        //     sx={{
        //             my: '1em'
        //         }}/>
        // },
    //     {
    //         comp: <SelectOneForm
    //         sx={{maxWidth:'250px'}}
    //         title= 'Category'
    //        List={
           
    //            categoryArray
            
    //       }
    //        value={options.category}
    //        setValue={
    //            handleChange
    //            }
    //        />
    //    },
    //     {
    //         comp: <SelectOneForm
    //         sx={{maxWidth:'250px'}}
    //         title= 'Type'
    //        List={
    //         getCategorySubcategories(`${options?.category?.toLocaleLowerCase()}`)
    //       }
    //        value={options?.type}
    //        setValue={
    //         handleTypeChange
    //            }
    //        />
    //    },

        {
            comp: <SelectOneForm
            title= 'Sort By'
            List={[
                'latest',
                'highestPrice',
                'lowestPrice'
            ]

             }
            value={options.sort}
            setValue={handleSort}
           />
        },
        // {
        //     title: 'Sort By',

        //     comp: <SelectOneForm
            
        //     placeholder='Sort Options'
        //     value={options.sort}
        //     setValue={handleSort}
        //     sx={{
        //             // my: '1em'
        //         }}/>
        // }
    ]
    return (
        <Box sx={{justifyContent:'start',gap:2}} className='flex wrap'>
           
            {filters.map((filter,index) => {
                 
                
return  <Box
className='flex  center items-center'
                    key={index}
                    sx={{
                    
                    boxShadow: 'none'
                }}>
                
                 
                        {filter.comp}
               
                    </Box>
                 
              
            })}
               <Btn sx={{background:'none',px:0,color:'green',py:0,':hover':{background:'none'},border:'1px solid'}} onClick={()=>handleSubmit()}>
                        Search
                    </Btn>
                    <Btn sx={{background:'none',px:0,py:0,border:'1px solid',color:'red',':hover':{background:'none'}}}  onClick={()=>handleSubmit(true)}>
                        Reset
                    </Btn>
        </Box>
    );

}
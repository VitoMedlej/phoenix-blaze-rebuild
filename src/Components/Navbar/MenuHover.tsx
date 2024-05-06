"use client"
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import {AiOutlineDown} from 'react-icons/ai'
// import NestedMenuAccordion from '../Sidebar/NestedAccordion';


const HoverMenu = ({ category, subcategories ,img } : {img:string,category: string, subcategories: string[]}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = (e : any) => {
    if (
      !e.relatedTarget ||
      (e.relatedTarget.id !== 'menu' && e.relatedTarget.id !== 'related-img' && e.relatedTarget.id !== 'button')
    ) {
      setShowMenu(false);
    }
  };

  return (
    <Box className='' sx={{
      margin:'0 1em ',
      zIndex:12345678,
      maxHeight:'600px',
      background:'transparent',
        }}>
    
    <Typography 
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
        component='h1'
        className=' cursor center flex gap1 white decor-none captialize'
        id="button"
        sx={{width:'max-content',
        mx:'1em',
        alignItems: 'center',
        fontWeight:500,fontSize:{xs:'.86em',sm:'.95em'}}}>
     {category} 
    <AiOutlineDown/> 
   </Typography>

      {showMenu && (
        <Box
        className='flex '
          id="menu"
          sx={{
            zIndex:12345678,
      boxShadow: '1px 1px 3px #00000017',
            position:'absolute',
            width: '100%',
            minHeight: '350px',
            maxHeight:'600px',
            left:0,
            backgroundColor: 'white',

          }}
          onMouseLeave={handleMouseLeave}
        >
          <ul  className='decor-none list-none black' style={{paddingTop:7,width:'30%'}}>
          <Link className=' decor-none uppercase black' key={category} href={`/${category.replace(/ /g, '-').toLocaleLowerCase()}/products`}>

            <li className='decor-none list-none black'>
            <Typography onClick={()=>setShowMenu(false)}  component='p' sx={{color:'white',width:'max-content',fontWeight:600,fontSize:{xs:'.86em',sm:'1.125em'}}}>
                {category}
     </Typography>
            </li>
          </Link>
            {subcategories.map((subcategory) => (
              <li className='' key={subcategory}>
              <Link className=' decor-none list-none uppercase' key={subcategory} href={`/${category.replace(/ /g, '-').toLocaleLowerCase()}/products?type=${ subcategory.replace(/ /g, '-').toLocaleLowerCase()}`}>
                
     <Typography onClick={()=>setShowMenu(false)}  component='p' 
     
     
     sx={{width:'max-content',color:'black',fontWeight:300,py:.5,fontSize:{xs:'.7em',sm:'.85em'}}}>
                {subcategory}
     </Typography>
 </Link>
                </li>
            ))}
          </ul>
        {/* <NestedMenuAccordion/> */}

          <Box  sx={{pointerEvents:'none',cursor:'none', 
          
          
          width:'70%',
          
          maxHeight:'500px',
          minHeight:'350px'}}>
            <img src={`${img}`} alt="Category Image" className="img cover " />
          </Box> 
        </Box>
      )}
    </Box>
  );
};

export default HoverMenu;
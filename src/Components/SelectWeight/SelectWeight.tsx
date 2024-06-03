import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function ProductCard({ setselectedSize,selectedSize, sizes } : any) {
  console.log('sizes: ', sizes);
  console.log('selectedSize: ', selectedSize);

  const handleChange = (event:any) => {
if (!sizes) {
  // setselectedSize({price:price});

  return
}
    
    const weight = event.target.value;
    const option = sizes.find((option:any) => `${option?.size}` == weight);
    console.log('option: ', option);
    setselectedSize({size:option.size,price: option.price});
  };

  // React.useEffect(() => {

  
  //     if (sizes && !selectedSize.size) {
  //       console.log('selectedSize: useeffect 2 ', selectedSize);

  //       setselectedSize({price:sizes[0]?.price, size:sizes[0]?.size});
  //     }
    
  // }, [selectedSize])
  
  return (  
    <Box className='flex items-center' sx={{ minWidth: {xs:'100%',lg:'100%'} }}>
      <FormControl fullWidth>
        <InputLabel id="weight-label">Sizes</InputLabel>
        <Select
        size='medium'
          labelId="weight-label"
          id="weight-select"
          value={selectedSize?.size}
          label="Weight"
          onChange={handleChange}
        >
          {sizes && sizes?.map((option : any) => (
            <MenuItem key={option.size} value={option.size}>
              {option.size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* <p>Price: ${selectedSize.price}</p> */}
    </Box>
  );
}

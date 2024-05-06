"use client"
import { Box } from '@mui/material'
import React from 'react'

const FullscreenPoster = ({imgPc,img}:any) => {
  return (
    <Box>
        <Box sx={{display:{xs:'flex',md:'none'}}}>
            <img src={`${img}`} alt="" className="img" />
        </Box>
        <Box sx={{display:{xs:'none',md:'flex'}}}>
            <img src={`${imgPc}`} alt="" className="img" />
        </Box>
    </Box>
  )
}

export default FullscreenPoster
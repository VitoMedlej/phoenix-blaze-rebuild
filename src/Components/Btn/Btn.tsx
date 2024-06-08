"use client"
import { Button } from '@mui/material'
import React from 'react'



let style1 = {
  color: 'white',
  background: ' #0c0c0c ',
  border:'1px solid #0c0c0c !Important' ,
  borderRadius: '0', 
  transition: 'background 0.3s ease, transform 0.2s ease',

  ':hover': {
      background: 'white',
      color:'#0c0c0c',
  border:'1px solid #0c0c0c !Important',
    
  },
  display: 'flex',
  padding: '11px 35px',
  fontWeight: '600',
  fontSize: '12px',
  cursor: 'pointer',
  outline: 'none',
}
let style2 = {
  color: '#0c0c0c',
  background: 'transparent',
  border: '1px solid #0c0c0c !Important',
  borderRadius: '0', 
  // boxShadow: '0 0 6px rgba(0, 0, 0, 0.1)',
  transition: 'background 0.3s ease, transform 0.2s ease',

  ':hover': {
    color:'white',
      background: '#0c0c0c !Important',
    
  },
  display: 'flex',
  padding: '6px 30',
  fontWeight: '600',
  fontSize: '12px',
  cursor: 'pointer',
  outline: 'none',
}

const Btn = ({v2,disabled,onClick,className,children,sx}:{className?:string,disabled?:boolean,onClick?:()=>any,sx?:any,v2?:boolean,children?:any}) => {
  return (
    <Button
   
    className={`trans ${className ? className : ''}`}
    disabled={disabled || false}
    onClick={onClick &&onClick}
    sx={v2 ? {...style2 , ...sx} : {...style1 , ...sx} }>{children}</Button>
  )
}

export default Btn
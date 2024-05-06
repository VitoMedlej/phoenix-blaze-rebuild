"use client"
import Preloader2 from "@/Components/Preloader2"
// import type {  NextApiResponse}
// from 'next';
// import {NextResponse } from 'next/server';
// import {type NextRequest} from 'next/server';



// const Page = async(ctx : any) => {
  const Page = (ctx : any) => {
  
  try {
    const {category} = ctx?.params
    const {type,search,subcategory} = ctx?.searchParams;
    // console.log('subcategory: ', subcategory);
    // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-cate?category=${category ? category : 'collection'}&type=${type ? type : null}&page=${0}&search=${search ? search : null}&subcategory=${subcategory ? encodeURIComponent(subcategory) : null}`)
    // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-cate?category=${category ? category : 'collection'}&type=${type ? type : null}&page=${0}&search=${search ? search : null}&subcategory=${subcategory ? encodeURIComponent(subcategory) : null}`,{cache:'no-store',next:{revalidate:0}})
    // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-cate?category=${category ? encodeURIComponent(category) : 'collection'}&type=${type ? type : null}&page=${0}&search=${search ? search : null}`)
    // const res = await req.json();    
    const res = {data:{totalPages:0,products:null},}
    // const totalPages = 1;
    // const products = {}
 

    return (<Preloader2 totalPages={res?.data?.totalPages || 1} data={res?.data?.products || null}/>)
  }
catch (err) {
  console.log('err: ', err);
  
  return (<Preloader2 totalPages={1} data={{totalPages:0,products:null}}/>)

}
}

export default Page


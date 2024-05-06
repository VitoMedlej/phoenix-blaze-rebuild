

// "use client"
import PreLoader from "@/Components/PreLoader"
// import { server } from "@/Utils/Server"
import { IProduct } from "@/Types/Types"
import { server } from "@/Utils/Server"
import { Box,  Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
// https://www..com/view_video.php?viewkey=ph637450f5f16fd
// export default  function Home() {
  export default async function Home() {
//   const [data,setData] = useState< {
//     products: IProduct[] | never[] ; 
//     featuredProducts:IProduct[] | never[];
// }>({
//     products : [],
//     featuredProducts :[]
//   })

  //  const InitialFetch = async () => {
  //   try {
  
  //     const req = await fetch(`${server}/api/get-data`,{ next: { revalidate: 400 } })
  //     const res = await req.json()
    
  //     if (res?.success && res?.data) {
  //       setData(res?.data)
  //     }
  //     return null
  //   }
  //   catch(er) {
  //     console.log('er getAll: ', er);
  
  //   }
  // }
//   useEffect(() => {
    
//     InitialFetch()

//   }, [])
// const [imgs,setImgs] = useState([
//   {img:'https://www.diamonddotz.com/image/cache/catalog/banners/2024%20web%20sliders/DOTZIES%20for%20Kids_jan%202024-1600x684.jpg',position:'centerd'},
//   {img:'https://www.diamonddotz.com/image/cache/catalog/banners/202401/new%20year%20new%20things_DD%20kits_0102-1600x684.jpg',position:'topd'},
//   {img:`https://www.diamonddotz.com/image/cache/catalog/banners/202401/new%20year%20new%20things_Masterclass0101-1600x684.jpg`,position:'topd'},

// ])
//  const fetchDataAndSetImgs = async () => {
//     const response = await fetch('https://api.jsonbin.io/v3/b/65c3b914dc74654018a1a466 ', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-Master-Key': '$2a$10$WXFznJ1K1qyGuQfvv9rfz.VhaJZL4OTKp4juiVUpw4ibxdqvViAw.'
//       },
//       next: {revalidate:1000}
//     })
//     if (!response?.ok) {
//       throw new Error(`Failed to fetch data. Status: ${response?.status}`);
//     }

//     const data = await response.json();
//     console.log('data: ', data);
//     setImgs(data?.record); // Assuming 'record' is the property containing the images in the response

//  }
// const fetchDataAndSetImgs = async () => {
//   const response = await fetch('https://api.jsonbin.io/v3/b/65c6a1c1dc74654018a2aefa', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Master-Key': '$2a$10$EmZy/K6nP9jFiENx19cWquoDmlzeSi1lNytC2AZ3IIi51g2G/aA1e'
//     },
//     next: {revalidate:1000}
//   })
//   if (!response?.ok) {
//     throw new Error(`Failed to fetch data. Status: ${response?.status}`);
//   }

//   const data = await response.json();
//   console.log('data: ', data);
//   // setImgs(data?.record); // Assuming 'record' is the property containing the images in the response
// return data?.record
// }

// useEffect(() => {
//   fetchDataAndSetImgs()
// }, [])
try {

  // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`,{ next: { revalidate: 10 } })
  // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`,{ cache: 'no-store',next:{revalidate:0} })
  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`)
  let res = req &&  await req.json();
  console.log('res: ', res);
  
  // const vids = 
  // console.log('res: ', res);
  // const reqImages = await fetch(`https://getpantry.cloud/apiv1/pantry/732d3c8c-d53a-4c4c-830c-fe9b7e021958/basket/Images`,{  cache:'no-store', next: { revalidate: 400 } })
  // let resImages : any = await  reqImages.json();
  // const imgs = await fetchDataAndSetImgs()
  // const vids = await fetchDataAndSetVideos()
  // console.log('vids: ', vids);
    // let vids = res?.data?.vids;
    // console.log('vids: ', vids);
      // let resImages : any ={}
      // let res = {data:{featuredProducts:null}}
      
      return (
        <PreLoader vids={ null} resImages={ null} 
        
        // data={null}
        featuredProducts={res?.data?.featuredProducts}
        data={res?.data?.products}
        />
       )
}
catch (e) {
  console.log('e main home: ', e);
  return (
    <PreLoader resImages={null} data={null}/>
   )

}
    


}

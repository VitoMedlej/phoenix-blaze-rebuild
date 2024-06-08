import PreLoader from "@/Components/PreLoader";

const fetchDataAndSetImgsAndSections = async () => {
  const [imagesRes, sectionsRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-images`, { next: { revalidate: 60 } }),
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-sections`, { next: { revalidate: 60 } }),
  ]);

  const [imagesData, sectionsData] = await Promise.all([
    imagesRes.json(),
    sectionsRes.json(),
  ]);

  if (imagesData?.success && sectionsData?.success) {
    return {
      imgs: imagesData?.data?.Images,
      Brands: imagesData?.data?.Brands,
      SectionsRes: sectionsData?.data?.Images[0]?.imagesArray?.sections,
    };
  }
  return null;
};
const fetcher = async () => {
  try {

  
  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`, { next: { revalidate: 60 } });
  const res = await req.json();
  if (res) return res
}
catch(e){
  console.log('e: ', e);

}
} 
export default async function Home() {
  try {
   
    const res = await fetcher()
    const result = await fetchDataAndSetImgsAndSections();
    const imgs = result?.imgs;
    const brands = result?.Brands;
    const SectionsRes = result?.SectionsRes;

    return (
      <PreLoader
        vids={null}
        resImages={imgs}
        SectionsRes={SectionsRes}
        brands={brands}
        featuredProducts={res?.data?.featuredProducts}
        data={res?.data?.products}
      />
    );
  } catch (e) {
    console.log('Error in Home:', e);
    return <PreLoader resImages={null} data={null} />;
  }
}

export const revalidate = 60;
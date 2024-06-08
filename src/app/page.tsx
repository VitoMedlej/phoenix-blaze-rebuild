"use client"; // Ensure this file is treated as a client component

import PreLoader from '@/Components/PreLoader';
import useSWR from 'swr';

const fetcher = (url : any) => fetch(url).then((res) => res.json());

const useImagesAndSections = () => {
  const { data: imagesData, error: imagesError } = useSWR(`${process.env.NEXT_PUBLIC_URL}/api/get-images`, fetcher, { revalidateOnFocus: false, refreshInterval: 60000 });
  const { data: sectionsData, error: sectionsError } = useSWR(`${process.env.NEXT_PUBLIC_URL}/api/get-sections`, fetcher, { revalidateOnFocus: false, refreshInterval: 60000 });

  return {
    imgs: imagesData?.data?.Images,
    brands: imagesData?.data?.Brands,
    SectionsRes: sectionsData?.data?.Images[0]?.imagesArray?.sections,
    error: imagesError || sectionsError,
  };
};

const useProductsData = () => {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_URL}/api/get-data`, fetcher, { revalidateOnFocus: false, refreshInterval: 30000 });

  return {
    products: data?.data?.products,
    featuredProducts: data?.data?.featuredProducts,
    error,
  };
};

export default function Home() {
  const { imgs, brands, SectionsRes, error: imagesSectionsError } = useImagesAndSections();
  const { products, featuredProducts, error: productsError } = useProductsData();

  if (imagesSectionsError || productsError) {
    console.error('Error fetching data:', imagesSectionsError || productsError);
    return <PreLoader resImages={null} data={null} />;
  }

  if (!imgs || !products) {
    return <PreLoader resImages={null} data={null} />;
  }

  return (
    <PreLoader
      vids={null}
      resImages={imgs}
      SectionsRes={SectionsRes}
      brands={brands}
      featuredProducts={featuredProducts}
      data={products}
    />
  );
}

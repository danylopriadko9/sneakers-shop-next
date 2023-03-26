import { makeRequest } from '@/makeRequest';
import { ApiResponse, Category } from '@/types/categories';
import Link from 'next/link';
import React from 'react';
import { useQuery } from 'react-query';

const fetchBrands = async (): Promise<ApiResponse> => {
  const response = await makeRequest.get('/categories?populate[0]=img');
  return response.data;
};

// https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQVJVNFgtSUNsZA0JnWS1DYzJ2VDZAsNk5qdDl1Ymd6ZAzN6b1pFN1kxQnp5OVVvN05tRGZAENVdDYVdtUHE5VVpNTnlKLVRfOTZAUVms3NG1wZAWNwOUpjZA0VJQW9VbnZAJcTJJX1BiZAkVldDRzSXFWVnR3QwZDZD

const Brands = () => {
  const [brandsFetched, setBrandsFetched] = React.useState<boolean>(false);

  const { data: brands } = useQuery('brands', fetchBrands, {
    staleTime: Infinity,
    enabled: !brandsFetched,
    onSuccess: () => {
      setBrandsFetched(true);
    },
  });

  return (
    <div className='w-full py-[50px] flex justify-center'>
      <div className='max-w-[1440px] w-full tablet:px-[50px] px-0'>
        <header className='w-full flex justify-between max-w-full px-2'>
          <h2 className='font-bold text-3xl uppercase'>Бренди</h2>
          <button className='rounded-md border-2 border-black px-6 py-4 text-black uppercase hover:bg-black hover:text-white cursor-pointer'>
            Переглянути
          </button>
        </header>
        <div className='w-full tablet:flex-row flex pt-[20px] flex-col '>
          {brands?.data.map((el) => (
            <Link
              href={`/category=${el.id}`}
              className='tablet:hover:w-2/4 tablet:w-1/3 tablet:h-[600px] w-full phone:h-[300px] flex items-center justify-center h-[200px] transition-all cursor-pointer relative'
              key={el.id}
            >
              <img
                className='w-full h-full object-cover'
                src={
                  'http://localhost:1337' +
                  el.attributes.img?.data.attributes.url
                }
                alt={el.attributes.title}
              />
              <button className='bg-white/[0.7] absolute rounded-md  px-6 py-4 text-black uppercase hover:bg-black hover:text-white cursor-pointer'>
                {el.attributes.title}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;

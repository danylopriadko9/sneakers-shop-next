import { makeRequest } from '@/makeRequest';
import { IProducts } from '@/types/products';
import React from 'react';
import { useQuery } from 'react-query';
import ProductCart from './ProductCart';

const fetchTopSellers = async (): Promise<IProducts> => {
  const response = await makeRequest.get(
    '/products?populate[0]=img&populate[1]=categories&filters[isBestseller][$eq]=true'
  );
  return response.data;
};

const TopSellers = () => {
  const [productsFetched, setProductsFetched] = React.useState<boolean>(false);

  const { data: products } = useQuery('top-sellers', fetchTopSellers, {
    staleTime: Infinity,
    enabled: !productsFetched,
    onSuccess: () => {
      setProductsFetched(true);
    },
  });

  return (
    <div className='w-full max-w-[1440px] mx-auto flex flex-col py-[40px] bg-white px-[40px] gap-10'>
      <header className='flex items-center justify-between'>
        <h2 className='font-bold text-3xl uppercase'>Топ продажів</h2>
        <button className='rounded-md border-2 border-black px-6 py-4 text-black uppercase hover:bg-black hover:text-white cursor-pointer'>
          Більше
        </button>
      </header>
      <div className=' justify-around tablet:justify-between gap-5 flex-wrap flex '>
        {productsFetched &&
          products?.data.map((el) => <ProductCart key={el.id} el={el} />)}
      </div>
    </div>
  );
};

export default TopSellers;

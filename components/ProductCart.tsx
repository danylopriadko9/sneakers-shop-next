import { Product } from '@/types/products';
import React from 'react';

interface IProductCart {
  el: Product;
}

const ProductCart: React.FC<IProductCart> = ({ el }): JSX.Element => {
  return (
    <div className='flex tablet:w-[23%] w-[100%] h-auto tablet:h-[550px] justify-between flex-col cursor-pointer gap-10 tablet:gap-0'>
      <div className='w-full tablet:h-[400px] overflow-hidden flex items-center justify-center'>
        <img
          src={
            'http://localhost:1337' + el.attributes.img.data[0].attributes.url
          }
          alt={el.attributes.title}
        />
      </div>
      <p
        className='uppercase text-md tablet:text-xl font-bold  lg:max-w-[70%] text-gray-800 '
        key={el.id}
      >
        {el.attributes.title}
      </p>
      <div className='flex justify-between w-full items-center '>
        <span className='text-xl text-gray-500'>
          {el.attributes.categories.data[0].attributes.title}
        </span>
        <span className='text-xl pb-1 border-b-2 border-gray-900  text-gray-900'>
          ₴{el.attributes.price.toLocaleString('en-US')}
        </span>
      </div>
    </div>
  );
};

export default ProductCart;

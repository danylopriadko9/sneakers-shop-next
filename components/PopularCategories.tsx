import { makeRequest } from '@/makeRequest';
import Link from 'next/link';
import React from 'react';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import { Item as ICategories } from '../types/subcategories';

const fetchSubcategories = async (): Promise<ICategories> => {
  const response = await makeRequest.get(
    '/sub-categories?populate[0]=img&populate[1]=categories'
  );
  return response.data;
};

const PopularCategories = () => {
  const [categoriesFetched, setCategoriesFetched] =
    React.useState<boolean>(false);

  const { data: subcategories } = useQuery(
    'sub-categories',
    fetchSubcategories,
    {
      staleTime: Infinity,
      enabled: !categoriesFetched,
      onSuccess: () => {
        setCategoriesFetched(true);
      },
    }
  );

  return (
    <div className='py-[40px] bg-gray-100 w-full mx-auto mt-[-10px]'>
      <h2 className='text-3xl uppercase font-extrabold text-center'>
        Популярні моделі
      </h2>
      <div className='max-w-[1440px] w-full mx-auto'>
        <Slider {...settings}>
          {categoriesFetched &&
            subcategories?.data.map(
              (el) =>
                el.attributes.img.data && (
                  <Link
                    href={`subcategory=${String(el.id)}`}
                    className='flex flex-col w-[360px] h-[300px] items-center justify-center cursor-pointer'
                    key={el.id}
                  >
                    <img
                      className='w-[300px] mx-auto'
                      src={
                        'http://localhost:1337' +
                        el.attributes.img.data.attributes.url
                      }
                      alt={el.attributes.title}
                    />
                    <p
                      key={el.id}
                      className='uppercase text-xl font-extrabold text-center'
                    >
                      {el.attributes.categories.data[0].attributes.title}{' '}
                      {el.attributes.title}
                    </p>
                  </Link>
                )
            )}
        </Slider>
      </div>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export default PopularCategories;

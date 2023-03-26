import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { motion } from 'framer-motion';
import { makeRequest } from '@/makeRequest';
import { useQuery } from 'react-query';
import { ApiResponse as ICategories } from '../types/categories';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Функция для получения списка всех категорий
const fetchCategories = async (): Promise<ICategories> => {
  const response = await makeRequest.get(
    '/categories?populate[0]=sub_categories'
  );
  return response.data;
};

const Header: React.FC = (): JSX.Element => {
  const [status, setStatus] = React.useState<boolean>(false);
  const [mobileStatus, setMobileStatus] = React.useState<boolean>(false);

  const [categoriesFetched, setCategoriesFetched] =
    React.useState<boolean>(false);

  const { data: categories } = useQuery('categories', fetchCategories, {
    staleTime: Infinity,
    enabled: !categoriesFetched,
    onSuccess: () => {
      setCategoriesFetched(true);
    },
  });

  const animation = {
    y: status ? 250 : -350,
    opacity: status ? 1 : 0,
  };

  return (
    <>
      <motion.header className='fixed z-[100] w-full block'>
        <div className='h-[35px] bg-black w-full flex justify-center items-center z-[100]'>
          <span className='text-white font-extralight'>
            Безкоштовна доставка від 4000 гривень!
          </span>
        </div>
        <div className='w-full py-[20px] border-b border-gray-200 flex justify-center z-[1000] bg-white'>
          <div className='max-w-[1400px] w-[1400px] flex items-center phone:justify-around h-[50px] justify-between phone:px-0 px-5 '>
            <div className='flex gap-5 items-center'>
              <Image src={logo} alt='Picture of the author' height={80} />
            </div>

            <div className='phone:flex gap-7 items-center select-none hidden'>
              <div
                className='text-md font-medium p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer'
                onClick={() => setStatus((prev) => !prev)}
              >
                Категорії
              </div>
              <div
                className='text-md font-medium p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer'
                onClick={() => setStatus(false)}
              >
                Про нас
              </div>

              <div
                className='text-md font-medium p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer'
                onClick={() => setStatus(false)}
              >
                Доставка
              </div>
              <div
                className='text-md font-medium p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer'
                onClick={() => setStatus(false)}
              >
                Оплата
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer hidden phone:block'>
                <SearchIcon fontSize='medium' />
              </div>
              <div className='p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer hidden phone:block'>
                <PersonOutlineOutlinedIcon fontSize='medium' />
              </div>
              <div className='p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer'>
                <Badge sx={badgeStyle} badgeContent={4} color='primary'>
                  <ShoppingCartOutlinedIcon fontSize='medium' />
                </Badge>
              </div>
              <div
                className='p-2 rounded-md hover:bg-gray-100 hover:cursor-pointer block phone:hidden'
                onClick={() => setMobileStatus((prev) => !prev)}
              >
                <MenuIcon
                  fontSize='large'
                  style={{ opacity: !mobileStatus ? 1 : 0 }}
                />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          animate={animation}
          className='absolute h-[500px] py-[20px] bg-white right-0 left-0 bottom-[-250px] z-[1] flex justify-evenly shadow-sm'
        >
          {categories?.data.map((el) => (
            <div key={el.id} className='flex flex-col gap-2 uppercase'>
              <Link
                href={`/category=${el.id}`}
                className='font-extrabold cursor-pointer hover:bg-gray-100 rounded-md px-3 py-2 flex items-center mb-[10px] select-none'
                key={el.id}
              >
                {el.attributes.title}
              </Link>
              {el.attributes.sub_categories.data.map((e) => (
                <Link key={e.id} href={`/subcategory=${e.id}`}>
                  <span className='select-none hover:underline cursor-pointer pl-2'>
                    {e.attributes.title}
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.header>
      {mobileStatus && (
        <motion.div
          className=' top-0 right-0 left-0 bottom-0 bg-black/[.9] z-[100] fixed flex justify-center items-center gap-10 text-white flex-col text-xl font-bold'
          onClick={() => setMobileStatus(false)}
        >
          <CloseIcon
            className='fixed top-[20px] right-[20px]'
            fontSize='large'
            style={{ color: 'white' }}
            onClick={() => setMobileStatus(false)}
          />
          <Link href='/'>Каталог</Link>
          <Link href='/'>Каталог</Link>
          <Link href='/'>Каталог</Link>
          <Link href='/'>Каталог</Link>
          <Link href='/'>Каталог</Link>
          <Link href='/'>Каталог</Link>
        </motion.div>
      )}
    </>
  );
};

const badgeStyle = {
  '& .MuiBadge-badge': {
    color: 'white',
    backgroundColor: '#000',
  },
};

export default Header;

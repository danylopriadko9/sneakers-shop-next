import Banners from '@/components/Banners';
import Header from '@/components/Header';
import PopularCategories from '@/components/PopularCategories';
import SliderComponent from '@/components/SliderComponent';
import TopSellers from '@/components/TopSellers';
import React from 'react';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <SliderComponent />
      <PopularCategories />
      <TopSellers />
      <Banners />
    </>
  );
};

export default Home;

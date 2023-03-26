import Banners from '@/components/Banners';
import Brands from '@/components/Brands';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import InstagramFeed from '@/components/InstagramFeed';
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
      <Brands />
      <InstagramFeed />
      <Footer />
    </>
  );
};

export default Home;

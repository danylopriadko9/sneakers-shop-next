import React from 'react';
import Slider from 'react-slick';
import { data } from '../public/data/slider';

const SliderComponent = () => {
  return (
    <Slider className='relative pt-[120px]' {...settings}>
      {data.map((el) => (
        <div
          className='h-[250px] phone-[300px] tablet:h-[500px] overflow-hidden flex items-center relative'
          key={el.id}
        >
          <div className='absolute top-0 bottom-0 right-0 left-0 bg-black/[.6] ' />
          <div className='absolute flex flex-col gap-4 tablet:gap-16 tablet:pt-[100px] tablet:px-[100px] px-[50px] py-[20px] justify-between h-full'>
            <h1 className='tablet:text-4xl text-2xl text-white font-extrabold'>
              {el.title}
            </h1>
            <span className='text-white tablet:max-w-[50%] max-w-[90%] phone:block hidden'>
              {el.desc}
            </span>
            <button className='text-black bg-white rounded-md tablet:max-w-[200px] tablet:py-4 py-2 max-w-[100px]'>
              {el.buttonText}
            </button>
          </div>
          <div className='w-full h-full'>
            <img src={el.img} alt='' className='h-full w-full object-cover' />
          </div>
        </div>
      ))}
    </Slider>
  );
};

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  appendDots: (dots: JSX.Element) => (
    <div
      style={{
        bottom: '30px',
        zIndex: 100,
      }}
    >
      <ul style={{ margin: '0px' }}> {dots} </ul>
    </div>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
      },
    },
  ],
};

export default SliderComponent;

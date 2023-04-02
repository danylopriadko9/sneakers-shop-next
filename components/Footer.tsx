import React from 'react';
import np from '../public/565-5652950_-nova.png';
import ukr_post from '../public/1200px-Ukrposhta-ua.svg.png';
import visa_mc from '../public/visa-and-mastercard-logo-26.png';
import logo from '../public/white_logo.png';

const Footer = () => {
  return (
    <div className='w-full p-[50px] bg-black  text-white  uppercase'>
      <div className='max-w-[1440px] mx-auto flex flex-col gap-20'>
        <div className='flex w-full justify-between items-center flex-col tablet:flex-row gap-5'>
          <h2 className='text-2xl font-bold'>DON'T MISS ANY NEWS!</h2>
          <div className='flex w-full justify-center'>
            <input
              className='border-2 border-white w-[80%] phone:w-[400px] tablet:w-[500px] rounded-md rounded-r-none bg-black h-[70px] px-[20px] outline-none'
              type='text'
              placeholder='Напиши нам...'
            />
            <div className='uppercase h-[70px] px-4 cursor-pointer rounded-l-none rounded-md text-black bg-white flex items-center justify-center font-bold'>
              log in
            </div>
          </div>
        </div>
        <hr className='border-white  ' />
        <div className='flex w-full justify-between font-thin flex-wrap tablet:flex-nowrap gap-10'>
          <div className='w-[200px] flex flex-col gap-5'>
            <span className='text-xl font-bold'>HELP AND CONTACT</span>
            <span>Tent sizes</span>
            <span>Clothing sizes</span>
            <span>Returns</span>
            <span>Contact</span>
            <span>Shipping</span>
          </div>
          <div className='w-[200px] flex flex-col gap-5'>
            <span className='text-xl font-bold'>HELP AND CONTACT</span>
            <span>Tent sizes</span>
            <span>Clothing sizes</span>
            <span>Returns</span>
            <span>Contact</span>
            <span>Shipping</span>
          </div>
          <div className='w-[200px] flex flex-col gap-5'>
            <span className='text-xl font-bold'>HELP AND CONTACT</span>
            <span>Tent sizes</span>
            <span>Clothing sizes</span>
            <span>Returns</span>
            <span>Contact</span>
            <span>Shipping</span>
          </div>
        </div>
        <hr className='border-white  ' />
        <div className='flex w-full justify-between flex-wrap tablet:flex-nowrap gap-10'>
          <div className='flex flex-col gap-5'>
            <span className='text-xl font-bold'>Delivery</span>
            <div className='flex gap-5'>
              <img className='w-[50px] h-[50px]' src={np.src} alt='' />
              <img className=' h-[50px]' src={ukr_post.src} alt='' />
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <span className='text-xl font-bold'>Payment methods</span>
            <img className=' h-[50px]' src={visa_mc.src} alt='' />
          </div>
          <div className='flex flex-col gap-5 '>
            <span className='text-xl font-bold'>Social media</span>
            <span className='underline'>Instagram</span>
            <span className='underline'>Tik Tok</span>
            <span className=''>Email: bigfoot.ukraine@gmail.com</span>
          </div>
        </div>
        <hr className='border-white  ' />
        <div className='w-full flex items-center gap-10'>
          <img className='h-[100px]' src={logo.src} alt='' />
          <span className='text-white'>© BigFoot All Rights Reserved 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react'
import banner1 from '../../img/banner-1.png'
import banner2 from '../../img/banner-2.png'
import banner3 from '../../img/banner-3.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ShieldIcon from '@mui/icons-material/Shield';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import IconButton from '@mui/material/IconButton';

const Banner1 = () => {
  return (
    <div>
        <div className='grid lg:grid-cols-3 lg:gap-5'>
        <div data-aos="flip-left" className='col-span-2'>
            <img className='w-full' src={banner1} alt="" />
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-1 lg:gap-y-16'>
            <img className='w-full' src={banner2} alt="" />
            <img className='w-full' src={banner3} alt="" />
        </div>
    </div>
    <div className='lg:flex justify-between bg-white mt-10 py-1 pr-3'>
        <div className='flex items-center my-6 ml-5'>

            <AddShoppingCartIcon color="warning" style={{ fontSize: '3rem' }} className='w-12'></AddShoppingCartIcon>

            <div className='text-start ml-4'>
                <p className='font-bold mb-2'>Free Shipping</p>
                <p className='text-gray'>When ordering over $100</p>
            </div>
        </div>
        <div className='flex items-center my-6 ml-5'>

            <AutorenewIcon color="warning" style={{ fontSize: '3rem' }} className='w-12'></AutorenewIcon>

            <div className='text-start ml-4'>
                <p className='font-bold mb-2'>Free Return</p>
                <p className='text-gray'>Get Return within 30 days</p>
            </div>
        </div>
        <div className='flex items-center my-6 ml-5'>

            <ShieldIcon color="warning" style={{ fontSize: '3rem' }} className='w-12'></ShieldIcon>

            <div className='text-start ml-4'>
                <p className='font-bold mb-2'>Secure Payment</p>
                <p className='text-gray'>100% Secure Online Payment</p>
            </div>
        </div>
        <div className='flex items-center my-6 ml-5'>

            <EmojiEventsIcon color="warning" style={{ fontSize: '3rem' }} className='w-12'></EmojiEventsIcon>

            <div className='text-start ml-4'>
                <p className='font-bold mb-2'>Best Quality</p>
                <p className='text-gray'>Original Product Guarenteed</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Banner1
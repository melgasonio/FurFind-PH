import { Link } from "react-router-dom"

import pawLogo from '../assets/footer/paw-logo.png';
import facebookIcon from '../assets/footer/facebook-icon.png';
import instagramIcon from '../assets/footer/instagram-icon.png'
import xIcon from '../assets/footer/x-icon.png';

const Footer = () => {

  const date = new Date();
  const yearPresent = date.getFullYear();
  
  return (
    <div className='flex flex-col gap-[var(--size-sm)] items-center bg-white-100 px-[4px] py-[var(--size-sm)] border-t-1 border-black-100'>
        <Link to="/">
            <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
              <img src={pawLogo} />
              <p className='text-logo font-raleway font-black text-coral-700 hover:text-coral-600'>FurFind</p>
            </div>
        </Link>
        <div className='flex flex-col gap-[2px] items-center text-black-500'>
            <Link to="/about">
              <p className='cursor-pointer hover:text-coral-700'>About Us</p>
            </Link>
            <Link to="/petreports/page/1">
              <p className='cursor-pointer hover:text-coral-700'>Lost and Found Pets</p>
            </Link>
            <Link to="/privacypolicy">
              <p className='cursor-pointer hover:text-coral-700'>Privacy Policy</p>
            </Link>
          </div>
          <div className='flex flex-row gap-[8px] items-center'>
            <Link to="/">
              <img className='cursor-pointer' src={facebookIcon} alt="" />
            </Link>
            <Link to="/">
              <img className='cursor-pointer' src={instagramIcon} alt="" />
            </Link>
            <Link to="/">
              <img className='cursor-pointer' src={xIcon} alt="" />
            </Link>
          </div>
        <p className='text-black-500'>© {yearPresent} FurFind PH</p>
    </div>
  )
}

export default Footer
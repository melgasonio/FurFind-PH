import { Link } from 'react-router-dom';

import BodyContainer from '../components/BodyContainer'
import LargeButton from '../components/buttons/LargeButton';
import NormalButton from '../components/buttons/NormalButton';
import Carousel from '../components/home/Carousel';

import pawIcon from '../assets/home/paw.png';
import pawsBg from '../assets/home/paws-bg.png';
import hero from '../assets/home/hero.png';
import petHero from '../assets/home/pet-hero.png';
import pawLogo from '../assets/footer/paw-logo.png';
import facebookIcon from '../assets/footer/facebook-icon.png';
import instagramIcon from '../assets/footer/instagram-icon.png'
import xIcon from '../assets/footer/x-icon.png';


import { useNavigationContext } from '../hooks/navigation/useNavigationContext';

const Home = () => {

  const { isNavOpen } = useNavigationContext();

  const date = new Date();
  const yearPresent = date.getFullYear();

  return (
    <div className={isNavOpen ? "hidden" : "font-lato"}>
      <BodyContainer>
        {/* Hero Section */}
        <div className=' bg-white-100 text-black-500'>
          <div className='flex flex-col items-center pt-[var(--size-l)] px-[var(--size-md)] pb-[var(--size-l)]'>
            <img
              src={hero}
              className='w-[344px] mb-[var(--size-sm)]'
              alt='FurFind Hero Image'
            />
            <div className='flex flex-col mb-[var(--size-sm)]'>
              <h1 className='text-l text-coral-700 font-black leading-none mb-[var(--size-xsm)] text-center text-balance'>Reuniting pets & owners</h1>
              <p className='text-center'>Take action now. Report lost or found pets and help bring them home faster.</p>
            </div>
            <Link to="/reportpet" className="text-left">
              <LargeButton className="" innerHTML={"Report a Pet"} />            
            </Link>
          </div>
        </div>
        {/* What is Furfind */}
        <div className='flex flex-col items-center bg-cream-100 pt-[var(--size-xl)] px-[var(--size-xsm)] pb-[var(--size-l)]'>
          <h2 className='text-black-600 text-md font-semibold mb-[var(--size-sm)]'>What is FurFind?</h2>
          <img 
            src={pawIcon} 
            className='mb-[var(--size-sm)]'
            alt="Paw Icon"
          />
          <p className='text-center text-black-500 align-center'>Growing community of people helping owners reunite with their missing pets in the Philippines</p>
        </div>
        {/* Most Recent */}
        <div className='relative'>
          <img 
            className='absolute top-[0px] w-[480px] h-auto z-[-1] opacity-50'
            src={pawsBg}
          />
          <div className='flex flex-col items-center justify-items-stretch gap-[var(--size-sm)] pt-[var(--size-xl)] px-[var(--size-xsm)] pb-[var(--size-l)] z-1'>
            <h2 className='text-black-600 text-md font-semibold'>Most Recent</h2>
            <div className='flex flex-col items-center'>
              {/* Carousel */}
              <Carousel />
              <Link to="/petreports/page/1">
                <NormalButton className='' innerHTML={"Browse All"} />              
              </Link>
            </div>
          </div>
        </div>
        {/* Become a Pet Hero Section */}
        <div className='flex flex-col items-center bg-cream-100 pt-[var(--size-xl)] px-[var(--size-xsm)] pb-[var(--size-l)]'>
          <h2 className='text-black-600 text-l font-semibold mb-[var(--size-sm)]'>Become a Pet Hero</h2>
          <img className='mb-[var(--size-sm)]' src={petHero}/>
          <p className='text-center text-black-500 align-center mb-[var(--size-sm)] text-balance'>Join FurFind PH to help reunite lost pets with their families. Sign up today and be a hero for pets in need!</p>
          <Link to="/signup">
            <NormalButton className='' innerHTML={"Be a Pet Hero"} />
          </Link>
        </div>
        {/* Footer */}
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
      </BodyContainer>
    </div>
  )
}

export default Home

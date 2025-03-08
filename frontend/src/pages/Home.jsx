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
import { useGetRecentReports } from '../hooks/pet_reports/useGetRecentReports';

const Home = () => {

  const { isNavOpen } = useNavigationContext();
  const { recentReports } = useGetRecentReports();

  const date = new Date();
  const yearPresent = date.getFullYear();

  return (
    <div className={isNavOpen ? "hidden" : "font-lato"}>
      <BodyContainer>
        {/* Hero Section */}
        <div className=' bg-coral-600'>
          <div className='flex flex-col items-center pt-[var(--size-xl)] px-[var(--size-xsm)] pb-[var(--size-l)]'>
            <img
              src={hero}
              className='w-full mb-[var(--size-md)]'
              alt='FurFind Hero Image'
            />
            <div className='flex flex-col mb-[var(--size-sm)]'>
              <h1 className='text-l text-white-100 text-center font-bold leading-none mb-[var(--size-xsm)]'>Report lost & found pets on FurFind PH</h1>
              <p className='text-center text-white-200 align-center'>Take action now. Report lost or found pets and help bring them home faster. Every second counts. Make a difference today.</p>
            </div>
            <LargeButton innerHTML={"Report a Pet"} />
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
        <div className='relative flex flex-col items-center pt-[var(--size-xl)] px-[var(--size-xsm)] pb-[var(--size-l)]'>
          <img 
            className='absolute top-[0px] w-[480px] h-auto z-0'
            src={pawsBg}
          />
          <div className='flex flex-col items-center justify-items-stretch gap-[var(--size-sm)] z-1'>
            <h2 className='text-black-600 text-md font-semibold'>Most Recent</h2>
            <div className='flex flex-col items-center'>
              {/* Carousel */}
              <Carousel />
              <NormalButton className='' innerHTML={"Browse All"} />
            </div>
          </div>
        </div>
        {/* Become a Pet Hero Section */}
        <div className='flex flex-col items-center bg-cream-100 pt-[var(--size-xl)] px-[var(--size-xsm)] pb-[var(--size-l)]'>
          <h2 className='text-black-600 text-l font-semibold mb-[var(--size-sm)]'>Become a Pet Hero</h2>
          <img className='mb-[var(--size-sm)]' src={petHero}/>
          <p className='text-center text-black-500 align-center mb-[var(--size-sm)]'>Join FurFind PH to help reunite lost pets with their families. Sign up today and be a hero for pets in need!</p>
          <NormalButton className='' innerHTML={"Be a Pet Hero"} />
        </div>
        {/* Footer */}
        <div className='flex flex-col gap-[var(--size-sm)] items-center bg-white-100 px-[4px] py-[var(--size-sm)] border-t-1 border-black-100'>
          <div className='flex flex-row gap-[8px] items-center cursor-pointer'>
            <img src={pawLogo} />
            <p className='text-logo font-raleway font-black text-coral-700 hover:text-coral-600'>FurFind</p>
          </div>
          <div className='flex flex-col gap-[2px] items-center text-black-500'>
            <p className='cursor-pointer hover:text-coral-700'>About Us</p>
            <p className='cursor-pointer hover:text-coral-700'>Lost and Found Pets</p>
            <p className='cursor-pointer hover:text-coral-700'>Privacy Policy</p>
          </div>
          <div className='flex flex-row gap-[8px] items-center'>
            <img className='cursor-pointer' src={facebookIcon} alt="" />
            <img className='cursor-pointer' src={instagramIcon} alt="" />
            <img className='cursor-pointer' src={xIcon} alt="" />
          </div>
          <p className='text-black-500'>© {yearPresent} FurFind PH</p>
        </div>
      </BodyContainer>
    </div>
  )
}

export default Home

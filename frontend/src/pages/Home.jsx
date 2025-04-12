import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import BodyContainer from '../components/BodyContainer'
import LargeButton from '../components/buttons/LargeButton';
import NormalButton from '../components/buttons/NormalButton';
import Carousel from '../components/home/Carousel';
import Footer from '../components/Footer';
import CountUp from "react-countup";

import pawIcon from '../assets/home/paw.png';
import pawsBg from '../assets/home/paws-bg.png';
import hero from '../assets/home/hero.png';
import petHero from '../assets/home/pet-hero.png';

import { useNavigationContext } from '../hooks/navigation/useNavigationContext';
import { usePetReportContext } from '../hooks/pet_reports/usePetReportContext';

const Home = () => {

  const { isNavOpen } = useNavigationContext();
  const { petReports } = usePetReportContext();

  // Find # of lost
  const [petsCount, setPetsCount ]= useState({ lost: 0, found: 0 });

  useEffect(() => {
    countPets();
  }, [petReports]);
  
  const countPets = () => {
    const count = petReports.reduce(
      (acc, pet) => {
        if (pet.status === 'Lost') acc.lost += 1;
        if (pet.status ==='Found') acc.found += 1;
        return acc;
      },
      { lost: 0, found: 0}
    );

    setPetsCount(count);
  }

  return (
    <div className={isNavOpen ? "hidden" : "font-lato"}>
      <BodyContainer>
        {/* Hero Section */}
        <div className=' bg-white-100 text-black-500 h-screen flex flex-col pt-[24px]'>
          <div className='px-[12px]'>
            {/* Cards */}
            <div className='flex flex-row justify-between w-full bg-coral-600 py-[8px] mb-[var(--size-md)] shadow-[0px_2px_4px_rgba(136,125,125,0.4)] rounded-[4px]'>
              <div className='flex flex-col items-center justify-center w-full'>
                <CountUp className='text-[24px] font-semibold text-white-200' duration={7} end={petsCount.lost} />
                <p className='text-[10px] text-white-300'>LOST PETS</p>
              </div>
              <div className='flex flex-col items-center justify-center w-full'>
                <CountUp className='text-[24px] font-semibold text-white-200' duration={7} end={petsCount.found} />
                <p className='text-[10px] text-white-300'>FOUND PETS</p>
              </div>
            </div>
          </div>
          <div className='flex-grow flex flex-col items-center justify-center h-full px-[var(--size-md)] pb-[var(--size-l)] bg-white-100'>
            <div className='flex flex-col mb-[var(--size-md)]'>
              <h1 className='text-l text-black-600 font-black leading-none mb-[4px] text-center text-balance'>REPORT NOW</h1>
              <p className='text-center text-black-400'>Take action now. Report lost or found pets and help bring them home faster.</p>
            </div>
            <Link to="/reportpet" className="text-lef t mb-[24px]">
              <LargeButton innerHTML={"Report a Pet"} />            
            </Link>
            <img
              src={hero}
              className='w-[344px]'
              alt='FurFind Hero Image'
            />
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
            <NormalButton className='' innerHTML={"Sign Up Now"} />
          </Link>
        </div>
        {/* Footer */}
        <Footer />
      </BodyContainer>
    </div>
  )
}

export default Home

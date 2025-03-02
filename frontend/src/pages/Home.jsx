import React from 'react'
import BodyContainer from '../components/BodyContainer'
import LargeButton from '../components/LargeButton';
import PetReportDetails from '../components/petreportspage/PetReportDetails';

import pawIcon from '../assets/paw.png';
import pawsBg from '../assets/paws-bg.png';
import recentPet from '../assets/most-recent-pholder.png'

import { useNavigationContext } from '../hooks/navigation/useNavigationContext';
import hero from '../assets/hero.png';

const Home = () => {
  const { isNavOpen } = useNavigationContext();
  return (
    <div className={isNavOpen ? "hidden" : "font-lato"}>
      <BodyContainer>
        {/* Hero Section */}
        <div className=' bg-coral-600'>
          <div className='flex flex-col items-center pt-[48px] px-[var(--size-xsm)] pb-[var(--size-md)]'>
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
        <div className='flex flex-col items-center bg-cream-100 pt-[48px] px-[var(--size-xsm)] pb-[var(--size-md)]'>
          <h2 className='text-black-600 text-md font-semibold mb-[var(--size-sm)]'>What is FurFind?</h2>
          <img 
            src={pawIcon} 
            className='mb-[var(--size-sm)]'
            alt="Paw Icon"
          />
          <p className='text-center text-black-500 align-center'>Growing community of people helping owners reunite with their missing pets in the Philippines</p>
        </div>
        {/* Most Recent */}
        <div className='relative flex flex-col items-center pt-[48px] px-[var(--size-xsm)] pb-[var(--size-md)]'>
          <img 
            className='absolute top-[0px] w-[480px] h-auto'
            src={pawsBg}
          />
          <div className='flex flex-col items-center justify-items-stretch gap-[var(--size-md)]'>
            <h2 className='text-black-600 text-md font-semibold'>Most Recent</h2>
            {/* Carousel */}
            <div id="pet-carousel" className='' data-carousel="slide">
              {/* Wrapper */}
              <div className="relative h-56 overflow-hidden">
                {/* Insert 3 Pet Reports Details component here. Props: petReports 3 most recent. */}
                {/* <PetReportDetails />
                <PetReportDetails />
                <PetReportDetails /> */}
              </div>
              {/* Slider Indicators/Ellipsis */}
            </div>
            <button>View All</button>
          </div>
        </div>
      </BodyContainer>
    </div>
  )
}

export default Home

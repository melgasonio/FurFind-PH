import React from 'react'
import BodyContainer from '../components/BodyContainer'
import LargeButton from '../components/LargeButton';

import { useNavigationContext } from '../hooks/navigation/useNavigationContext';
import hero from '../assets/hero.png'

const Home = () => {
  const { isNavOpen } = useNavigationContext();
  return (
    <div className={isNavOpen ? "hidden" : "font-lato"}>
      <BodyContainer>
        {/* Hero Section */}
        <div className='h-[calc(100vh-48px)] bg-coral-600 pt-[48px]'>
          <div className='flex flex-col items-center px-[var(--size-xsm)] pb-[var(--size-md)]'>
            <img
              src={hero}
              className='w-full mb-[var(--size-md)]'
              alt='FurFind Hero Image'
            />
            <div className='flex flex-col gap-[var(--size-xsm)] mb-[var(--size-md)]'>
              <h1 className='text-l text-white-100 text-center font-bold leading-none]'>REPORT LOST AND FOUND PETS ON FURFIND PH</h1>
              <p className='text-center text-white-200 text-balance'>Take action now. Report lost or found pets and help bring them home faster. Every second counts. Make a difference today.</p>
            </div>
            <LargeButton innerHTML={"Report a Pet"} />
          </div>
        </div>
        {/* What is Furfind */}
      </BodyContainer>
    </div>
  )
}

export default Home

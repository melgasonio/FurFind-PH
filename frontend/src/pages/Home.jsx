import { Link } from 'react-router-dom';

import BodyContainer from '../components/BodyContainer'
import LargeButton from '../components/buttons/LargeButton';
import NormalButton from '../components/buttons/NormalButton';
import Carousel from '../components/home/Carousel';
import Footer from '../components/Footer';

import pawIcon from '../assets/home/paw.png';
import pawsBg from '../assets/home/paws-bg.png';
import hero from '../assets/home/hero.png';
import petHero from '../assets/home/pet-hero.png';

import { useNavigationContext } from '../hooks/navigation/useNavigationContext';

const Home = () => {

  const { isNavOpen } = useNavigationContext();

  return (
    <div className={isNavOpen ? "hidden" : "font-lato"}>
      <BodyContainer>
        {/* Hero Section */}
        <div className=' bg-white-100 text-black-500 h-100vh'>
          <div className='flex flex-col items-center from0 justify-center h-full pt-[var(--size-l)] px-[var(--size-md)] pb-[var(--size-l)] bg-white-100'>
            <div className='flex flex-col mb-[var(--size-sm)]'>
              <h1 className='text-l text-coral-800 font-black leading-none mb-[4px] text-center text-balance'>REPORT NOW</h1>
              <p className='text-center text-black-400'>Take action now. Report lost or found pets and help bring them home faster.</p>
            </div>
            <Link to="/reportpet" className="text-left mb-[24px]">
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
            <NormalButton className='' innerHTML={"Be a Pet Hero"} />
          </Link>
        </div>
        {/* Footer */}
        <Footer />
      </BodyContainer>
    </div>
  )
}

export default Home

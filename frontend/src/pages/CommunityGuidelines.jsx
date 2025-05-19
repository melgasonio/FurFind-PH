import BodyContainer from '../components/BodyContainer'
import Footer from '../components/Footer'

import { useNavigationContext } from '../hooks/navigation/useNavigationContext'

const CommunityGuidelines = () => {
  const { isNavOpen } = useNavigationContext();

  return (
    <div className={isNavOpen ? 'hidden' : 'font-lato'}>
      <BodyContainer className="h-screen flex flex-col">
          <div className="flex-grow flex flex-col justify-center text-black-400 px-[var(--size-md)] p-[var(--size-l)]">
              <h1 className='text-md font-bold text-black-600 mb-[24px]'>Community Guidelines</h1>
              <div className='flex flex-col gap-[8px] mb-[16px]'>
                  <p>Welcome to our pet-loving community! Whether you’re here to reunite with a lost furry friend or help someone else find theirs, thank you for being part of a space where kindness leads the way.</p>
                  <p>These guidelines are here to keep our platform safe, helpful, and respectful for everyone involved—both human and animal.</p>
              </div>
              <ul className='font-semibold list-disc list-inside'>
                  <li>Be Truthful and Specific</li>
                  <li>Keep It Respectful</li>
                  <li>No Spam or Self-Promotion</li>
                  <li>Report Responsibly  </li>
                  <li>No Buying, Selling, or Breeding</li>
                  <li>Protect Privacy</li>
                  <li>Stay Safe When Meeting</li>
                  <li>One Post Per Pet</li>
                  <li>Close the Loop</li>
              </ul>
          </div>
          <Footer />
      </BodyContainer>
    </div>
  )
}

export default CommunityGuidelines
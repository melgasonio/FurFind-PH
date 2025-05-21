import { useEffect } from 'react';

import { useGetPetReport } from '../hooks/pet_reports/useGetPetReport';
import { useGetPetImage } from '../hooks/pet_reports/useGetPetImage';
import { useDeleteFlaggedReport } from '../hooks/pet_reports/useDeleteFlaggedReport';
import { usePetProfileContext } from '../hooks/pet_reports/usePetProfileContext';
import { useNavigationContext } from '../hooks/navigation/useNavigationContext';

import imagePlaceholder from '../assets/pet_profile/most-recent-pholder.png';
import messageOwner from '../assets/pet_profile/message-owner.png';
import flagProfile from '../assets/pet_profile/flag-profile.png';

import BodyContainer from '../components/BodyContainer';
import Footer from '../components/Footer';

const PetProfile = () => {
  const { getPetProfile } = useGetPetReport();
  const { imageURL, getPetImage } = useGetPetImage();
  const { flaggedHandler } = useDeleteFlaggedReport();
  const { petProfile } = usePetProfileContext();
  const { isNavOpen } = useNavigationContext();

  useEffect(() => {
    const fetchProfile = async () => {
      await getPetProfile();
      await getPetImage(petProfile.status, petProfile._id);
    };

    fetchProfile();
  }, [getPetImage]);

  if (!petProfile) {
    return <div>Loading...</div>;
  }

  const date = new Date(petProfile.last_seen_date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const textDate = formattedDate.toString();

  return (
    <div className={isNavOpen ? 'hidden' : 'font-lato'}>
      <BodyContainer className='h-screen flex flex-col'>
        <div className='bg-coral-600 p-[24px]'>
          <div className='flex flex-col bg-blue-100 rounded-[10px]'>
            <div className='flex flex-col items-center'>
              <img className="w-full object-cover object-center rounded-t-[10px]" src={ imageURL || imagePlaceholder } alt={petProfile._id} />
            </div>
            {/* Info Container */} 
            <div className='px-[12px] pt-[18px] pb-[16px]'>
              {/* Headline */}
              <div className='flex flex-row justify-between mb-[12px]'>
                {/* Headline Text */}
                <div className='flex flex-col gap-0 text-black-600'>
                  <p className='text-[18px] font-bold'>{petProfile.status.toUpperCase()}</p>
                  <p className='text-[24px] font-extrabold'>{petProfile.name.toUpperCase()}</p>
                  <p className='italic text-[16px]'>{petProfile.last_seen_city}, {petProfile.last_seen_region}</p>
                </div>
                {/* Buttons */}
                <div className='flex flex-row gap-[16px]'>
                  <img 
                    className="h-[24px] cursor-pointer" 
                    src={ messageOwner } 
                    alt='message owner'
                  />
                  <img 
                    className="h-[24px] cursor-pointer" 
                    src={ flagProfile } 
                    alt='flag profile as inappropriate'
                    onClick={() => flaggedHandler(petProfile._id)}
                  />
                </div>
              </div>
              {/* Additional Information */}
              <div className='text-black-500 text-[16px]'>
                <p className=''>{petProfile.pet_type}</p>
                {petProfile.breed && <p>{petProfile.breed}</p>}
                <p>Last seen {textDate}</p>
                {petProfile.notes && <p>Notes: {petProfile.notes}</p>}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </BodyContainer>
    </div>
  );
};

export default PetProfile;

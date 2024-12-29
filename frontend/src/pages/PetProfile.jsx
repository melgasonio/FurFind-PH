import { useGetPetReport } from '../hooks/pet_reports/useGetPetReport';
import { useGetPetImage } from '../hooks/pet_reports/useGetPetImage';
import { useEffect } from 'react';
import { useDeleteFlaggedReport } from '../hooks/pet_reports/useDeleteFlaggedReport';

const PetProfile = () => {
    const { petProfile } = useGetPetReport();
    const { imageURL, getPetImage } = useGetPetImage();
    const { flaggedHandler } = useDeleteFlaggedReport(petProfile);
    


    useEffect(() => {
      if (petProfile) {
          getPetImage(petProfile.status, petProfile._id);
      }
    }, [petProfile, getPetImage]);


    if (!petProfile) {
      return (
        <div>Loading...</div>
      )
    }



  return (
    <div className='pet-profile-page'>
        <img className="rounded-full w-32 h-32" src={imageURL} />
        <p>Name: {petProfile.name}</p>
        <p>Status: {petProfile.status}</p>
        <p>Breed: {petProfile.breed}</p>
        <p>Last seen at: {petProfile.last_seen_city}, {petProfile.last_seen_region}</p>
        <p>Notes by owner: {petProfile.notes}</p>
        <button>Message Owner</button>
        <button onClick={flaggedHandler}> Flag as inappropriate</button>
    </div>
  )
}

export default PetProfile
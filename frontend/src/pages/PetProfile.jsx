import { useGetPetReport } from '../hooks/pet_reports/useGetPetReport';
import { useGetPetImage } from '../hooks/pet_reports/useGetPetImage';
import { useEffect } from 'react';
import { useDeleteFlaggedReport } from '../hooks/pet_reports/useDeleteFlaggedReport';
import { usePetProfileContext } from '../hooks/pet_reports/usePetProfileContext';
import imagePlaceholder from '../assets/pet_profile/most-recent-pholder.png'

const PetProfile = () => {
  const { getPetProfile } = useGetPetReport();
  const { imageURL, getPetImage } = useGetPetImage();
  const { flaggedHandler } = useDeleteFlaggedReport();
  const { petProfile } = usePetProfileContext();

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

  return (
    <div className="pet-profile-page">
      <img className="rounded-full w-32 h-32" src={ imageURL || imagePlaceholder } alt={petProfile._id} />
      <p>Name: {petProfile.name}</p>
      <p>Status: {petProfile.status}</p>
      <p>Breed: {petProfile.breed}</p>
      <p>Last seen at: {petProfile.last_seen_city}, {petProfile.last_seen_region}</p>
      <p>Notes by owner: {petProfile.notes}</p>
      <button>Message Owner</button>
      <button onClick={() => flaggedHandler(petProfile._id)}>Flag as inappropriate</button>
    </div>
  );
};

export default PetProfile;

import React from 'react'
import { useGetPetImage } from '../hooks/pet_reports/useGetPetImage';

const PetReportDetails = ({ petReport }) => {
    const { imageURL, getPetImage } = useGetPetImage();
    getPetImage(petReport.status, petReport._id);
    console.log(imageURL);

    return (
        <div className='PetReportDetails'>
            {/* This will be different (not part of petReport object. This will come from firebase.) */}
            <img className="rounded-full w-32 h-32" src={imageURL} />
            <p>{petReport.name}</p>
            <p>{petReport.status}</p>
            <p>{petReport.breed}</p>
            <p>Last seen at: {petReport.last_seen_city}, {petReport.last_seen_region}</p>
        </div>
  )
}

export default PetReportDetails
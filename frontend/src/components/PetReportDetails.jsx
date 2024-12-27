import { useGetPetImage } from '../hooks/pet_reports/useGetPetImage';
import { useGetPetReport } from '../hooks/pet_reports/useGetPetReport';
import { Link } from 'react-router-dom';

const PetReportDetails = ({ petReport }) => {
    const { imageURL, getPetImage } = useGetPetImage();
    const { setPetProfile } = useGetPetReport();

    getPetImage(petReport.status, petReport._id);

    const handleClick = () => {
        setPetProfile(petReport);
    };

    return (
        <div className='PetReportDetails' onClick={handleClick}>
            <Link to={'/petprofile/' + petReport._id}>
                <img className="rounded-full w-32 h-32" src={imageURL} />
                <p>{petReport.name}</p>
                <p>{petReport.status}</p>
                <p>{petReport.breed}</p>
                <p>Last seen at: {petReport.last_seen_city}, {petReport.last_seen_region}</p>            
            </Link>
        </div>
  )
}

export default PetReportDetails
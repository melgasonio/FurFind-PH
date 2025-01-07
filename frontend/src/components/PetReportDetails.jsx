import { useGetPetImage } from '../hooks/pet_reports/useGetPetImage';
import { Link } from 'react-router-dom';
import imagePlaceholder from '../assets/pet_profile/image_placeholder.png'

const PetReportDetails = ({ petReport }) => {
    const { imageURL, getPetImage } = useGetPetImage();

    getPetImage(petReport.status, petReport._id);

    return (
        <div className='PetReportDetails'>
            <Link to={'/petprofile/' + petReport._id}>
                <img className="rounded-full w-32 h-32" src={imageURL || imagePlaceholder} />
                <p>{petReport.name}</p>
                <p>{petReport.status}</p>
                <p>{petReport.breed}</p>
                <p>Last seen at: {petReport.last_seen_city}, {petReport.last_seen_region}</p>            
            </Link>
        </div>
    )
}

export default PetReportDetails
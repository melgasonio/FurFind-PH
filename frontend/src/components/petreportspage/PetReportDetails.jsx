import { useGetPetImage } from '../../hooks/pet_reports/useGetPetImage';
import { Link } from 'react-router-dom';
import imgPholder from '../../assets/pet_profile/most-recent-pholder.png';

const PetReportDetails = ({ petReport }) => {
    const { imageURL, getPetImage } = useGetPetImage();

    getPetImage(petReport.status, petReport._id);

    return (
        // Container
        <div className='h-[172px] w-full bg-blue-100 overflow-hidden rounded-[var(--size-sm)]'>
            <Link to={'/petprofile/' + petReport._id}>
                {/* Wrapper */}
                <div className='grid grid-cols-2'>
                    <div className=''>
                        <img 
                            className='h-full w-full object-cover object-center'
                            src={imageURL || imgPholder}
                        />
                    </div> 
                    <div className='flex flex-col gap-[4px] text-xsm text-black-500 p-[var(--size-sm)]'>
                        <div className='text-sm font-bold text-black-600 border-b-1 border-black-100'>
                            <p className=''>{petReport.status.toUpperCase()}</p>
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <div className='flex flex-col gap-[2px]'>
                                <p className='truncate'>{petReport.name}</p>
                                <p className='truncate'>{petReport.breed}</p>
                                <p className='truncate'>{petReport.last_seen_city}, {petReport.last_seen_region}</p>
                                <p className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tite tite tite titeeeeeeeeeeeeeeeeee</p>
                            </div>
                        </div>
                    </div>                  
                </div>             
            </Link>
        </div>
    )
}

export default PetReportDetails
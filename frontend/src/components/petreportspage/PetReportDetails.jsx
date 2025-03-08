import { useGetPetImage } from '../../hooks/pet_reports/useGetPetImage';
import { Link } from 'react-router-dom';
import imgPholder from '../../assets/pet_profile/most-recent-pholder.png';
import SmallButtonNeg from '../buttons/SmallButtonNeg';

const PetReportDetails = ({ petReport }) => {
    const { imageURL, getPetImage } = useGetPetImage();

    getPetImage(petReport.status, petReport._id);

    return (
        // Container
        <div className='h-[172px] bg-blue-100 overflow-hidden rounded-[var(--size-sm)]'>
            <Link to={'/petprofile/' + petReport._id}>
                {/* Wrapper */}
                <div className='grid grid-cols-2 h-full'>
                    <div className=''>
                        <img 
                            className='h-full w-full object-cover object-center'
                            src={imageURL || imgPholder}
                        />
                    </div> 
                    <div className='flex flex-col gap-[4px] p-[var(--size-sm)] text-xsm text-black-500'>
                        <div className='text-sm font-bold text-black-600 border-b-1 border-black-100'>
                            <p className=''>{petReport.status.toUpperCase()}</p>
                        </div>
                        <div className='flex flex-col gap-[var(--size-sm)]'>
                            <div className='flex flex-col gap-[2px]'>
                                <p>{petReport.name}</p>
                                <p>{petReport.breed}</p>
                                <p>{petReport.last_seen_city}, {petReport.last_seen_region}</p>
                            </div>
                            <div className=''>
                                <SmallButtonNeg innerHTML={"View"}/>
                            </div>
                        </div>
                    </div>                  
                </div>             
            </Link>
        </div>
    )
}

export default PetReportDetails
import { Link } from 'react-router-dom';

import imagePlaceholder from '../../assets/pet_profile/most-recent-pholder.png';
import editPost from "../../assets/view_post/edit-icon.svg";
import deletePost from "../../assets/view_post/delete-icon.svg";

const ViewOwnPostContent = ({ petProfile, setIsModalOpen }) => {
  return (
    <div className='bg-coral-600 p-[24px]'>
          <div className='flex flex-col bg-blue-100 rounded-[10px]'>
            <div className='flex flex-col items-center'>
              <img className="w-full object-cover object-center rounded-t-[10px]" src={ imagePlaceholder } alt={petProfile._id} />
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
                  <Link to="/edit/dummy123">
                    <img
                      className="h-[24px] cursor-pointer"
                      src={ editPost }
                      alt='edit post'
                    />
                  </Link>
                  <img
                    className="h-[24px] cursor-pointer"
                    src={ deletePost }
                    alt='delete post'
                    onClick={() => {setIsModalOpen(true)}}
                  />
                </div>
              </div>
              {/* Additional Information */}
              <div className='text-black-500 text-[16px]'>
                <p className=''>{petProfile.pet_type}</p>
                {petProfile.breed && <p>{petProfile.breed}</p>}
                <p>Last seen {petProfile.last_seen_date}</p>
                {petProfile.notes && <p>Notes: {petProfile.notes}</p>}
              </div>
            </div>
          </div>
        </div>
  )
}

export default ViewOwnPostContent
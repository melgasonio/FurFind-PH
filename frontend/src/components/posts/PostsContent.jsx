import { Link } from 'react-router-dom';

import imgPholder from '../../assets/pet_profile/most-recent-pholder.png';
import editIcon from "../../assets/posts/edit-icon.svg";
import deleteIcon from "../../assets/posts/delete-icon.svg";
import viewIcon from "../../assets/posts/eye-icon.svg";

const PostsContent = ({ reports, setIsModalOpen }) => {

  return (
    <div className='flex-grow flex flex-col justify-center text-black-500 px-[var(--size-md)] p-[var(--size-l)]'>
          {/* Texts */}
          <div className='flex flex-col gap-[8px] mb-[24px]'>
            <div className='flex flex-col gap-[4px] items-center'>
              <p className='text-[24px] font-semibold text-black-600'>My Posts</p>
              <p>View and manage all your posts.</p>
            </div>
            <div className='flex flex-col gap-[4px]'>
              <p className='font-semibold'>Rules:</p>
              <ul className='list-disc list-outside px-[24px]'>
                <li>Posts can be edited within 30 days of the last update.</li>
                <li>Pet reports can only be submitted once every 60 days.</li>
                <li>Suspended posts are hidden from the platform and cannot be edited.</li>
              </ul>
            </div>
          </div>
          {/* Pet Cards Wrapper */}
          <div className='flex flex-col gap-[16px]'>
            {reports.map((petReport) => (
            <div className='h-[172px] w-full bg-blue-100 overflow-hidden rounded-[var(--size-sm)]' key={petReport._id}>             
              {/* Wrapper */}
              <div className='grid grid-cols-2'>
                <div className=''>
                  <img
                      className='h-full w-full object-cover object-center'
                      src={imgPholder}
                  />
                </div>
                <div className='flex flex-col gap-[8px] text-xsm text-black-500 p-[var(--size-sm)]'>
                  <div className='text-sm font-bold text-black-600 border-b-1 border-black-100'>
                      <p className=''>{petReport.status.toUpperCase()}</p>
                  </div>
                  <div className='flex flex-col gap-[8px]'>
                    <div className='flex flex-col gap-[2px]'>
                        <p className='truncate'>{petReport.name}</p>
                        <p className='truncate'>{petReport.breed}</p>
                        <p className='truncate'>{petReport.last_seen_city}, {petReport.last_seen_region}</p>
                        <p className='truncate'>{petReport.notes}</p>
                    </div>
                  </div>
                  <div className='flex flex-row items-center gap-[8px]'>
                    <Link to="/edit/dummy123">
                      <img
                        src={editIcon}
                        alt="edit post"
                        className="h-[24px] cursor-pointer"
                      />
                    </Link>
                    <img 
                        src={deleteIcon} 
                        alt="delete-post"
                        className="h-[24px] cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    />
                    <Link to="/view/dummy123">
                      <img 
                        src={viewIcon} 
                        alt="view-post"
                        className="h-[24px] cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>          
            </div>
            ))}
          </div>
        </div>
  )
}

export default PostsContent
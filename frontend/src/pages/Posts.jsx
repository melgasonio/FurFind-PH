import { Link } from 'react-router-dom';

import BodyContainer from '../components/BodyContainer';
import Footer from '../components/Footer';

import imgPholder from '../assets/pet_profile/most-recent-pholder.png';
import editIcon from "../assets/posts/edit-icon.svg";
import deleteIcon from "../assets/posts/delete-icon.svg";
import viewIcon from "../assets/posts/eye-icon.svg";

import { useNavigationContext } from '../hooks/navigation/useNavigationContext'
import { useDashboardContext } from "../hooks/dashboard/useDashboardContext"
import { useModalContext } from '../hooks/modal/useModalContext';

const Posts = () => {
  const { isNavOpen } = useNavigationContext();
  const { isDashboardOpen } = useDashboardContext();
  const { setIsModalOpen } = useModalContext();

  const dummyReports = [
    {
      _id: 1415,
      status: "happy",
      pet_type: "Cat",
      name: "dummy1",
      last_seen_city: "manila",
      last_seen_region: "ncr",
      breed: "dog",
      notes: "whuteve"
    },
    {
      _id: 151561,
      status: "idk",
      pet_type: "Cat",
      name: "hatdog",
      last_seen_city: "valenzuela",
      last_seen_region: "ncr",
      breed: "",
      notes: "hmm?"
    },
    {
      _id: 15566,
      status: "ok",
      pet_type: "Cat",
      name: "ambot",
      last_seen_city: "qc",
      last_seen_region: "ncr",
      breed: "haa",
      notes: "wala"
    },
  ];

  return (
    <div className={isNavOpen || isDashboardOpen ? 'hidden' : 'font-lato text-black-500'}>
      <BodyContainer className="h-screen flex flex-col">
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
            {dummyReports.map((petReport) => (
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
                    <Link to="/delete/dummy123">
                      <img 
                        src={deleteIcon} 
                        alt="delete-post"
                        className="h-[24px] cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                      />
                    </Link>
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
        <Footer />
      </BodyContainer>
    </div>
  )
}

export default Posts
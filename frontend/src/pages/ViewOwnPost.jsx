import { useModalContext } from '../hooks/modal/useModalContext';

import BodyContainer from '../components/BodyContainer';
import Footer from '../components/Footer';
import ViewOwnPostContent from '../components/view_own_post/ViewOwnPostContent';
import DeletePostModal from '../components/modals/DeletePostModal';

const ViewOwnPost = () => {

  const { isModalOpen, setIsModalOpen } = useModalContext();

  const petProfile = {
    _id: 151561,
    status: "Found",
    pet_type: "Cat",
    name: "hatdog",
    last_seen_city: "City of Valenzuela",
    last_seen_region: "NCR",
    last_seen_date: "2025-10-15",
    breed: "",
    notes: "hmm?",
}

  return (
    <div>
      <BodyContainer className='h-screen flex flex-col'>
        {!isModalOpen ? (
          <ViewOwnPostContent 
          petProfile={petProfile}
          setIsModalOpen={setIsModalOpen}
        />
        ) : (
          <>
            <DeletePostModal />
            <ViewOwnPostContent 
              petProfile={petProfile}
              setIsModalOpen={setIsModalOpen}
            />
          </>
        )}
        <Footer />
      </BodyContainer>
    </div>
  );
};

export default ViewOwnPost;

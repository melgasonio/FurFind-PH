import BodyContainer from "../components/BodyContainer";
import Footer from "../components/Footer";
import EditOwnPostContent from "../components/edit_own_post/EditOwnPostContent";
import CancelEditModal from "../components/modals/CancelEditModal";

import { useModalContext } from "../hooks/modal/useModalContext";


const EditOwnPost = () => { 
  const { isModalOpen } = useModalContext();

  return (
    <div>
      <BodyContainer>
        {!isModalOpen ? (
          <EditOwnPostContent />
        ) : (
          <>
            <CancelEditModal />
            <EditOwnPostContent />
          </>
        )}
        <Footer />
      </BodyContainer>
    </div>
  )
}

export default EditOwnPost
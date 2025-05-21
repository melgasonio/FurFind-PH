import BodyContainer from '../components/BodyContainer';
import Footer from '../components/Footer';
import PostsContent from '../components/posts/PostsContent';
import DeletePostModal from '../components/modals/DeletePostModal';

import { useModalContext } from '../hooks/modal/useModalContext';

const Posts = () => {
  const { isModalOpen, setIsModalOpen } = useModalContext();

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
    <div>
      <BodyContainer className="h-screen flex flex-col">
        {!isModalOpen ? (
          <PostsContent 
            reports={dummyReports}
            setIsModalOpen={setIsModalOpen}
          />
        ) : (
          <>
            <DeletePostModal />
            <PostsContent
              reports={dummyReports}
              setIsModalOpen={setIsModalOpen}
            />
            </>
        )}
        <Footer />
      </BodyContainer>
    </div>
  )
}

export default Posts
import Modal from "../Modal";
import NormalButton from "../buttons/NormalButton";

import closeIcon from "../../assets/delete_post/close-icon.svg"

import { useModalContext } from "../../hooks/modal/useModalContext"
import { useDeleteOwnPost } from "../../hooks/delete_own_post/useDeleteOwnPost";


const DeletePostModal = () => {
  const { setIsModalOpen } = useModalContext();
  
  const { deletePostHandler } = useDeleteOwnPost();

  return (
    <div>
      <Modal>
          {/* Close Icon */}
          <div className="flex flex-row justify-end">
            <img 
              className="cursor-pointer"
              src={closeIcon}
              onClick={() => setIsModalOpen(false)}
            />
          </div>
          {/* Content */}
          <div className="flex flex-col gap-[12px] items-center justify-center">
            {/* Text */}
            <div>
              <p className="text-center font-black text-[24px]">Are you sure?</p>
              <p className="text-center text-black-500">Are you sure you want to delete this post? This action cannot be undone.</p>
            </div>
            {/* Buttons */}
            <div className="flex flex-col gap-[4px] items-stretch w-full">
              <NormalButton
                innerHTML={"Delete"}
                type="submit"
                className="flex-1 bg-black-700 text-white-100 hover:bg-black-600"
                onClick={deletePostHandler}
              />
              <NormalButton 
                innerHTML={"Cancel"}
                type="submit" 
                className="flex-1 text-black-600 hover:bg-black-100 border-1 border-black-600"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
          </div>
      </Modal>
    </div>
  )
}

export default DeletePostModal
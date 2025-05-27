import Modal from "../Modal";
import NormalButton from "../buttons/NormalButton";

import closeIcon from "../../assets/delete_post/close-icon.svg"

import { useModalContext } from "../../hooks/modal/useModalContext"
import { useDiscardPostEdit } from "../../hooks/discard_post_edit/useDiscardPostEdit";


const CancelEditModal = () => {
  const { setIsModalOpen } = useModalContext();
  
  const { discardEditHandler } = useDiscardPostEdit();

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
              <p className="text-center font-black text-[24px]">Warning</p>
              <p className="text-center text-black-500">You have unsaved changes. Are you sure you want to discard them?</p>
            </div>
            {/* Buttons */}
            <div className="flex flex-col gap-[4px] items-stretch w-full">
              <NormalButton
                innerHTML={"Keep editing"}
                type="submit"
                className="flex-1 bg-black-700 text-white-100 hover:bg-black-600"
                onClick={() => setIsModalOpen(false)}
              />
              <NormalButton 
                innerHTML={"Discard changes"}
                type="submit" 
                className="flex-1 text-black-600 hover:bg-black-100 border-1 border-black-600"
                onClick={discardEditHandler}
              />
            </div>
          </div>
      </Modal>
    </div>
  )
}

export default CancelEditModal
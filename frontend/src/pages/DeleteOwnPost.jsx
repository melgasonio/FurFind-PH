import { useEffect } from "react";
import { Link } from "react-router-dom";

import Modal from "../components/Modal";
import Posts from "./Posts";
import NormalButton from "../components/buttons/NormalButton";

import closeIcon from "../assets/delete_post/close-icon.svg"

import { useModalContext } from "../hooks/modal/useModalContext"


const DeleteOwnPost = () => {
  const { setIsModalOpen } = useModalContext();

  const closeHandler = () => {
    setIsModalOpen(false);
  }

  useEffect(()=> {
    setIsModalOpen(true);
  }, [])


  return (
    <div>
      <Modal>
          {/* Close Icon */}
          <div className="flex flex-row justify-end">
            <Link to="/posts">
              <img 
                className="cursor-pointer"
                src={closeIcon}
                onClick={closeHandler}
              />
            </Link>
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
              />
              <NormalButton 
                innerHTML={"Cancel"}
                type="submit" 
                className="flex-1 text-black-600 hover:bg-black-100 border-1 border-black-600"
              />
            </div>
          </div>
      </Modal>
      <Posts />
    </div>
  )
}

export default DeleteOwnPost
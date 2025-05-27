import PetReportForm from "../petreportform/PetReportForm";
import NormalButton from "../buttons/NormalButton";

import avatar from "../../assets/pet_profile/most-recent-pholder.png";

import { useEditPostForm } from "../../hooks/edit_post/useEditPostForm";
import { useModalContext } from "../../hooks/modal/useModalContext";

const EditOwnPostContent = () => {

    const { setIsModalOpen } = useModalContext();

    const {
      formData,
      regions,
      cities,
      handleChange,
      formStatus,
      handleSubmit,
      error,
      imgURL
    } = useEditPostForm();

  return (
    <div>
        <div className='bg-coral-700 px-[var(--size-xsm)] pt-[var(--size-md)] pb-[var(--size-sm)] flex flex-col gap-[8px]'>
          <div >
            <h2 className='text-white-200 text-md font-semibold '>Update your post</h2>
            <p className='text-white-300'>Ensure that all information is correct before saving. Note that edits are only allowed every 30 days.</p>
          </div>
          <div>
            <PetReportForm
              formData={formData} 
              regions={regions}
              cities={cities}
              handleChange={handleChange}
              formStatus={formStatus}
              handleSubmit={handleSubmit}
              error={error}
              imgURL={imgURL}
              avatar={avatar}
              imgBtnText={"Change Photo"}
              imgRequired={false}
              buttons={
                <div className="flex flex-col gap-[8px] items-stretch">
                  <NormalButton 
                    innerHTML={"Save"}
                    type="submit" 
                    disabled={formStatus === "saving"}
                    className="flex-1 bg-black-700 text-white-100 hover:bg-black-600"
                  />
                  <NormalButton 
                    innerHTML={"Cancel"}
                    type="submit" 
                    disabled={formStatus === "cancelling"}
                    className="flex-1 text-black-600 hover:bg-black-100 border-1 border-black-600"
                    onClick={() => setIsModalOpen(true)}
                  />
                </div>
              }
            />
          </div>
        </div>
    </div>
  )
}

export default EditOwnPostContent;
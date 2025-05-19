import React from 'react'
import PetReportForm from '../components/petreportform/PetReportForm.jsx'
import BodyContainer from '../components/BodyContainer.jsx';
import Footer from '../components/Footer.jsx';
import NormalButton from '../components/buttons/NormalButton.jsx';

import avatar from "../assets/report_pet/cat-avatar.jpg"

import { UploadProgressProvider } from '../context/upload_context/UploadContext..jsx';
import { useNavigationContext } from '../hooks/navigation/useNavigationContext.jsx';
import { usePetReportForm } from "../hooks/report_form/usePetReportForm.jsx"


const ReportPet = () => {
  const { isNavOpen } = useNavigationContext();
  const {
    formData,
    regions,
    cities,
    handleChange,
    formStatus,
    handleSubmit,
    error,
    imgURL
  } = usePetReportForm();
  
  return (
    <div className={isNavOpen ? "hidden" : "font-lato"}>
      <BodyContainer>
        <div className='bg-coral-700 px-[var(--size-xsm)] pt-[var(--size-md)] pb-[var(--size-sm)] flex flex-col gap-[8px]'>
          <div className='text-center'>
            <h2 className='text-white-200 text-md font-semibold '>Pet Report Form</h2>
            <p className='text-white-300'>Complete the form to report a missing or found pet.</p>
          </div>
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
            imgBtnText={"Add Photo*"}
            imgRequired={true}
            buttons={
              <div className='flex flex-col gap-[8px] items-stretch'>
                <NormalButton 
                  innerHTML={"Report Pet"}
                  type="submit" 
                  disabled={formStatus === "submitting"}
                  className="flex-1 bg-black-700 text-white-100 hover:bg-black-600 shadow-[0px_2px_4px_rgba(136,125,125,0.4)]"
                />
              </div>
            }
          />
        </div>
        <Footer />
      </BodyContainer>
    </div>
  )
}

export default ReportPet
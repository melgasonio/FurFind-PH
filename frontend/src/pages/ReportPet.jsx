import React from 'react'
import PetReportForm from '../components/petreportform/PetReportForm.jsx'
import BodyContainer from '../components/BodyContainer.jsx';
import Footer from '../components/Footer.jsx';

import { UploadProgressProvider } from '../context/upload_context/UploadContext..jsx';
import { useNavigationContext } from '../hooks/navigation/useNavigationContext.jsx';


const ReportPet = () => {
  const { isNavOpen } = useNavigationContext();

  return (
    <UploadProgressProvider>
      <div className={isNavOpen ? "hidden" : "font-lato"}>
        <BodyContainer>
          <div className='bg-coral-700 px-[var(--size-xsm)] pt-[var(--size-md)] pb-[var(--size-sm)] flex flex-col gap-[8px]'>
            <div className='text-center'>
              <h2 className='text-white-200 text-md font-semibold '>Pet Report Form</h2>
              <p className='text-white-300'>Complete the form to report a missing or found pet.</p>
            </div>
            <PetReportForm />
          </div>
          <Footer />
        </BodyContainer>
      </div>
    </UploadProgressProvider>
  )
}

export default ReportPet
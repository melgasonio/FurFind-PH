import React from 'react'
import PetReportForm from '../components/petreportform/PetReportForm.jsx'
import { UploadProgressProvider } from '../context/upload_context/UploadContext..jsx';

const ReportPet = () => {
  return (
    <UploadProgressProvider>
      <PetReportForm />
    </UploadProgressProvider>
  )
}

export default ReportPet
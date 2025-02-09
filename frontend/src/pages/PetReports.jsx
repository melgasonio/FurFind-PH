import { useEffect } from "react";
import PetReportsGroup from "../components/petreportspage/PetReportsGroup";
import PetReportsPageButtons from "../components/petreportspage/PetReportsPageButtons";
import { useGetPetReports } from "../hooks/pet_reports/useGetPetReports";
import { LastButtonContextProvider } from "../context/pet_report/LastButtonContext";

const PetReports = () => {
  const getPetReports = useGetPetReports();

  useEffect(() => {
    getPetReports();
  }, []);
    
  return (
    <div className="pet-reports-page">
      <PetReportsGroup/>
      <PetReportsPageButtons />
    </div>
  )
}

export default PetReports
import { useEffect } from "react";
import PetReportsGroup from "../components/PetReportsGroup";
import PetReportsPageButtons from "../components/PetReportsPageButtons";
import { useGetPetReports } from "../hooks/pet_reports/useGetPetReports";
import { LastButtonContextProvider } from "../context/pet_report/LastButtonContext";

const PetReports = () => {
  const getPetReports = useGetPetReports();

  useEffect(() => {
    getPetReports();
  }, []);
    
  return (
    <LastButtonContextProvider>
      <div className="pet-reports-page">
        <PetReportsGroup/>
        <PetReportsPageButtons />
      </div>
    </LastButtonContextProvider>


  )
}

export default PetReports
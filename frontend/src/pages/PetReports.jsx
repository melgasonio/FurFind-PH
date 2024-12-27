import { useEffect } from "react";
import PetReportsGroup from "../components/PetReportsGroup";
import { useGetPetReports } from "../hooks/pet_reports/useGetPetReports";

const PetReports = () => {
  const { getPetReports } = useGetPetReports();

  useEffect(() => {
    getPetReports;
  }, [getPetReports]);
    

  return (
    <div className="pet-reports-page">
        <PetReportsGroup/>
    </div>
  )
}

export default PetReports
import PetReportDetails from './PetReportDetails';
import { usePetReportContext } from '../hooks/pet_reports/usePetReportContext';

const PetReportsGroup = () => {
    const { petReports } = usePetReportContext();

    return (
        <div className="pet-reports-page">
            <div className="pet-reports">
                {petReports && petReports.map((petReport) => (
                    <PetReportDetails key={petReport._id} petReport={petReport} />
                ))}
            </div>
        </div>
      )
}

export default PetReportsGroup
import PetReportDetails from './PetReportDetails';
import { useGetPage } from '../../hooks/pet_reports/useGetPage';

const PetReportsGroup = () => {
    const { pageReports } = useGetPage();

    return (
        <div className="pet-reports-page">
            <div className="pet-reports">
                {pageReports && pageReports.map((p) => (
                    <PetReportDetails key={p._id} petReport={p} />
                ))}
            </div>
        </div>
      )
}

export default PetReportsGroup
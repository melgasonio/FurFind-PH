import PetReportDetails from './PetReportDetails';
import { useGetPage } from '../../hooks/pet_reports/useGetPage';

const PetReportsGroup = () => {
    const { pageReports } = useGetPage();

    return (
        <div className="flex flex-col items-center gap-[8px] p-[4px]">
            {pageReports && pageReports.map((p) => (
                <PetReportDetails key={p._id} petReport={p} />
            ))}
        </div>
      )
}

export default PetReportsGroup
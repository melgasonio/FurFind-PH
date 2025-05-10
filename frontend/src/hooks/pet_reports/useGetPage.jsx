import { useFilteredPetReportContext } from "./useFilteredPetReportContext";
import { useLastButtonContext } from "./useLastButtonContext";
import { usePetReportContext } from "./usePetReportContext";
import { useHasFilterAppliedContext } from "./useHasFilterAppliedContext";
import { useReportsPerPageContext } from "./useReportsPerPageContext";

export const useGetPage = () => {
  const { lastClicked = 1 } = useLastButtonContext();
  const { filteredPetReports } = useFilteredPetReportContext();
  const { petReports } = usePetReportContext();
  const { hasFilterApplied } = useHasFilterAppliedContext();
  const { reportsPerPage } = useReportsPerPageContext();

  const reports = hasFilterApplied ? filteredPetReports : petReports;
  
  const startInd = reportsPerPage * (lastClicked - 1);
  const lastInd = reportsPerPage * lastClicked;

  const pageReports = reports.slice(startInd, lastInd);

  return { pageReports };
};

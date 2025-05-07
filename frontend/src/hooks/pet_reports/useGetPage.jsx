import { useFilteredPetReportContext } from "./useFilteredPetReportContext";
import { useLastButtonContext } from "./useLastButtonContext";
import { usePetReportContext } from "./usePetReportContext";
import { useHasFilterAppliedContext } from "./useHasFilterAppliedContext";

export const useGetPage = () => {
  const { lastClicked = 1 } = useLastButtonContext();
  const { filteredPetReports } = useFilteredPetReportContext();
  const { petReports } = usePetReportContext();
  const { hasFilterApplied } = useHasFilterAppliedContext();

  const reports = hasFilterApplied ? filteredPetReports : petReports;

  const startInd = 20 * (lastClicked - 1);
  const lastInd = 20 * lastClicked;

  const pageReports = reports.slice(startInd, lastInd);

  return { pageReports };
};

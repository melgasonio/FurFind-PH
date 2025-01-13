import { usePetReportContext } from "./usePetReportContext";
import { useLastButtonContext } from "./useLastButtonContext";

export const useGetPage = () => {
    const { petReports } = usePetReportContext();
    const { lastClicked } = useLastButtonContext();

    const startInd = 3 * (lastClicked - 1)
    const lastInd = 3 * lastClicked

    const pageReports = petReports.slice(startInd, lastInd);

    return { pageReports }
}
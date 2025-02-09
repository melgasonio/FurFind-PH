import { usePetReportContext } from "./usePetReportContext";
import { useLastButtonContext } from "./useLastButtonContext";

export const useGetPage = () => {
    const { petReports } = usePetReportContext();
    const { lastClicked } = useLastButtonContext();

    const startInd = 20 * (lastClicked - 1)
    const lastInd = 20 * lastClicked

    const pageReports = petReports.slice(startInd, lastInd);

    return { pageReports }
}
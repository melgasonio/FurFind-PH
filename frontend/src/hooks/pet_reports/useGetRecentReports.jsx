import { usePetReportContext } from "./usePetReportContext";

export const useGetRecentReports = () => {
    const { petReports } = usePetReportContext();

    petReports.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    const recentReports = petReports.slice(0, 5);

    return { recentReports };
};

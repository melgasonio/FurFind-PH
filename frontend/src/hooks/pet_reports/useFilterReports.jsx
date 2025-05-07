import { usePetReportContext } from "./usePetReportContext";
import { useFilteredPetReportContext } from "./useFilteredPetReportContext";

export const useFilterReports = () => {
    const { petReports } = usePetReportContext();
    const { setFilteredPetReports } = useFilteredPetReportContext();

    const filterReports = (data) => {
        const date = new Date(data.date_range);

        const filteredReports = petReports.filter((petReport) => {
            const matchesType = data.type === "" || petReport.status === data.type;
            const matchesPet = data.pet === "" || data.pet === "All" || petReport.pet_type === data.pet;
            const matchesRegion = data.region === "" || data.region === petReport.last_seen_region;
            const matchesCity = data.city === "" || petReport.last_seen_city === data.city;
            const matchesDateRange = data.date_range === "" || date === petReport.last_seen_date;

            return matchesType && matchesPet && matchesRegion && matchesCity && matchesDateRange;
    });

        setFilteredPetReports(filteredReports);
    }

    return { filterReports };
}
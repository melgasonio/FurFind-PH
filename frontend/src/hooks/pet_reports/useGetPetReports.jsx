import { usePetReportContext } from "./usePetReportContext";

export const useGetPetReports = () => {
    const { setPetReports } = usePetReportContext();

    const getPetReports = async () => {
        const response = await fetch('http://localhost:5000/api/petreports/');
        const json = await response.json();

        if(response.ok) {
            await setPetReports(json);
            return json;
        }
    };

    return { getPetReports };
}
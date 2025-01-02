import { usePetReportContext } from "./usePetReportContext";

export const useGetPetReports = () => {
    const { dispatch } = usePetReportContext();

    const getPetReports = async () => {
        const response = await fetch('http://localhost:5000/api/petreports/');
        const json = await response.json();

        if(response.ok) {
            dispatch({ type: 'SET_PETREPORTS', payload: json});
        }
    };

    return getPetReports;
}
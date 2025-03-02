import { usePetReportContext } from "./usePetReportContext";
import { useQuery } from "@tanstack/react-query"

export const useGetPetReports = () => {
    const { dispatch } = usePetReportContext();

    const getPetReports = async () => {
        const response = await fetch('http://localhost:5000/api/petreports/');
        const json = await response.json();

        if(response.ok) {
            dispatch({ type: 'SET_PETREPORTS', payload: json});
        }
    };

    return useQuery({
        queryKey: ["petReports"],
        queryFn: getPetReports,
        staleTime: 1000 * 60 * 10, // Cache for 10 minutes,
        cacheTime: 1000 * 60 * 15, // Keep cache for 15 minutes before garbage collection
    })
}
import { useContext } from "react";
import { FilteredPetReportContext } from "../../context/pet_report/FilteredPetReportContext";

export const useFilteredPetReportContext = () => {
    const context = useContext(FilteredPetReportContext);

    if (!context) {
        throw Error('useFilteredPetReport must only be used in FilteredPetReportContextProvider');
    }

    return context;
}
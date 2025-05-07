import { useContext } from "react";
import { FilteredCitiesContext } from "../../context/pet_report/FilteredCitiesContext";

export const useFilteredCitiesContext = () => {
    const context = useContext(FilteredCitiesContext);

    if (!context) {
        throw Error('FilteredCitiesContext must be only used within FilteredCitiesContextProvider');
    }

    return context;
}
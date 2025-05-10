import { useContext } from "react";
import { ReportsPerPageContext } from "../../context/pet_report/ReportsPerPageContext";

export const useReportsPerPageContext = () => {
    const context = useContext(ReportsPerPageContext);

    if (!context) {
        throw Error('ReportsPerPageContext must be used within ReportsPerPageContextProvider')
    }

    return context;
}
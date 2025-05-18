import { useContext } from "react";
import { DashboardContext } from "../../context/dashboard/DashboardContext";

export const useDashboardContext = () => {
    const context = useContext(DashboardContext);

    if (!context) {
        throw Error("DashboardContext must only be used inside DashboardContextProvider")
    }

    return context;
}
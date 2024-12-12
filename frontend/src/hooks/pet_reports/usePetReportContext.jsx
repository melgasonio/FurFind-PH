import { useContext } from "react"
import { PetReportContext } from "../../context/petReport/PetReportContext"

export const usePetReportContext = () => {
    const context = useContext(PetReportContext)

    if (!context) {
        throw Error('usePetReportContext must be used only in PetReportContextProvider')
    }

    return context
}
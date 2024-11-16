import { useEffect, useState } from "react"
import PetReportDetails from "../components/PetReportDetails"

const PetReports = () => {
    const [petReports, setPetReports] = useState(null)

    useEffect(() => {
        const fetchPetReports = async () => {
            const response = await fetch('http://localhost:5000/api/petreports')
            const json = await response.json()

            if (response.ok) {
                setPetReports(json)
            }
        }

        fetchPetReports()
    }, [])

  return (
    <div className="pet-reports-page">
        <div className="pet-reports">
            {petReports && petReports.map((petReport) => (
                <PetReportDetails key={petReport._id} petReport={petReport}/>
            ))}
        </div>
    </div>
  )
}

export default PetReports
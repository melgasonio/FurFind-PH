import { usePsgcData } from "./usePsgcData"
import { useState } from "react";

export const usePetReportChange = (

) => {
    const { fetchCities } = usePsgcData();
    const [cities, setCities] = useState([]);

    const handleFormChange = async ( e, setFormData, setFile) => {
        const { name, value, type, files } = e.target;

        if (type === "file") {
            setFile(files[0]);
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    
        if (name === "last_seen_region") {
            const region = value;
            const cities = await fetchCities(region);
            setCities(cities);
        }
    }

    return { cities, handleFormChange };
}
import { usePsgcData } from "./usePsgcData"
import { useState } from "react";

export const usePetReportChange = (

) => {
    const { fetchCities } = usePsgcData();
    const [cities, setCities] = useState([]);
    const [imgURL, setImgURL] = useState(null);

    const handleFormChange = async ( e, setFormData, setFile ) => {
        const { name, value, type, files } = e.target;
        const reader = new FileReader();

        if (type === "file") {
            const image = files[0]
            setFile(image);
            
            reader.onload = () => {
                const url = reader.result;
                setImgURL(url);
            }

            reader.readAsDataURL(image);
            
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

    return { cities, handleFormChange, imgURL };
}
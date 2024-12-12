import getPsgcRegions from "../../apis/psgc/psgcRegions";
import getPsgcCities from "../../apis/psgc/psgcCities";
import { useState, useEffect } from "react";

export const usePsgcData = () => {
    const [regions, setRegions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRegions = async () => {
            try {
                const regionsArray = await getPsgcRegions();
                setRegions(regionsArray);
            } catch (err) {
                console.error("Error fetching regions:", err);
                setError("Failed to load regions");
            }
        };
    
        fetchRegions();
    }, [])

    const fetchCities = async (name) => {
        try {
            const region = regions.find((r) => r.name === name);
            const regionCode = region.code;
            const cities =  await getPsgcCities(regionCode);
            return cities;
        } catch (err) {
            console.error("Error fetching cities:", err);
            setError("Failed to load cities")
        }
    };

    return { 
        regions,
        fetchCities,
        error
    };
}
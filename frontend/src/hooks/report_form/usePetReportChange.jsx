import { usePsgcData } from "./usePsgcData";
import { useState } from "react";

export const usePetReportChange = () => {
  const { fetchCities } = usePsgcData();
  const [imgURL, setImgURL] = useState(null);

  const handleFormChange = async (e, setFormData, setFile, setCities) => {
    const { name, value, type, files } = e.target;
    const reader = new FileReader();

    if (type === "file") {
      const image = files[0];
      setFile(image);

      reader.onload = () => {
        const url = reader.result;
        setImgURL(url);
      };

      reader.readAsDataURL(image);
    } 
    
    // Handle region change
    else if (name === "last_seen_region") {
      const cities = await fetchCities(value);
      setCities(cities);

      // Update region and reset city
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        last_seen_city: "", // reset city selection
      }));
    } 
    
    // Handle other fields
    else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return { handleFormChange, imgURL };
};

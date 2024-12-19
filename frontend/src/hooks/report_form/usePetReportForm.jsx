 import { useState, useRef } from "react";
import { usePetReportContext } from "../pet_reports/usePetReportContext";
import { usePsgcData } from "./usePsgcData";
import { usePetReportChange } from "./usePetReportChange";
import { usePetReportSubmit } from "./usePetReportSubmit";

export const usePetReportForm = () => {
    const { dispatch } =usePetReportContext();

    // Local states
    const [formData, setFormData] = useState({
      name: "",
      status: "lost",
      breed: "",
      last_seen_date: "",
      last_seen_region: "",
      last_seen_city: "",
      notes: "",
    });

    const [imageFile, setImageFile] = useState(null);

    const {
      regions,
      error
    } = usePsgcData();

    const { cities, handleFormChange } = usePetReportChange();

    const handleChange = (e) => {
        handleFormChange(e, setFormData, setImageFile);
    }

    const { submitPetReport, submitted } = usePetReportSubmit(dispatch);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await submitPetReport(formData, imageFile);
        
        setFormData({
            name: "",
            status: "lost",
            breed: "",
            last_seen_date: "",
            last_seen_region: "",
            last_seen_city: "",
            notes: "",
        });

        setImageFile(null);
    }

    return {
        formData,
        regions,
        cities,
        handleChange,
        handleSubmit,
        submitted,
        error
    };
}

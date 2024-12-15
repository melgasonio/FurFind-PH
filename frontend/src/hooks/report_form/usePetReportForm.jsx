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

    const fileInputRef = useRef(null);

    const {
      regions,
      error
    } = usePsgcData();

    const { cities, handleFormChange } = usePetReportChange();

    const handleChange = (e) => {
        handleFormChange(e, setFormData, setImageFile);
    }

    const { submitPetReport } = usePetReportSubmit(dispatch);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await submitPetReport(formData, imageFile);
        
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

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }

    return {
        formData,
        regions,
        cities,
        fileInputRef,
        handleChange,
        handleSubmit,
        error
    };
}

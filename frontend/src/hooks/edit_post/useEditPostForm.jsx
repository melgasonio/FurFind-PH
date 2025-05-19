import { useState, useEffect } from "react";
import { usePetReportContext } from "../pet_reports/usePetReportContext";
import { usePsgcData } from "../report_form/usePsgcData";
import { usePetReportSubmit } from "../report_form/usePetReportSubmit";
import { usePetReportChange } from "../report_form/usePetReportChange";
import getPsgcCities from "../../apis/psgc/psgcCities";

export const useEditPostForm = () => {
    const { setPetReports } = usePetReportContext();

    // Change this with a dynamic object
    const [formData, setFormData] = useState({
        _id: 151561,
        status: "Found",
        pet_type: "Cat",
        name: "hatdog",
        last_seen_city: "City of Valenzuela",
        last_seen_region: "NCR",
        last_seen_date: "2025-10-15",
        breed: "",
        notes: "hmm?",
    });

    const [imageFile, setImageFile] = useState(null);

    const {
      regions
    } = usePsgcData();

    const regionInit = formData.last_seen_region;
    const [cities, setCities] = useState([]);
    const fetchCities = async (name) => {
        const region = regions.find((r) => r.name === name);
        const regionCode = region.code;
        const cities =  await getPsgcCities(regionCode);
        setCities(cities);
    };
    useEffect(() => {
        if (!regions.length) return;
        fetchCities(regionInit);
    }, [regions]);

    const { handleFormChange, imgURL } = usePetReportChange();

    const handleChange = (e) => {
        handleFormChange(e, setFormData, setImageFile, setCities);
    }

    const { submitPetReport, formStatus } = usePetReportSubmit(setPetReports);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await submitPetReport(formData, imageFile);
        
        setFormData({
            name: "",
            status: "lost",
            breed: "",
            pet_type: "",
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
        formStatus,
        imgURL
    };
}

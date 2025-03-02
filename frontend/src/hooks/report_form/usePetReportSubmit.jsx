import { useState } from "react";
import { useImageUploader } from "./useImageUploader";
import { compressImage } from "../../apis/imagecompression/imageCompression";
import { useUserContext } from "../user/useUserContext";

export const usePetReportSubmit = (dispatch) => {
    const [formStatus, setFormStatus] = useState("filling");
    const [error, setError] = useState(null);
    const { uploadImage } = useImageUploader();
    const { user } = useUserContext();

    const submitPetReport = async (formData, imageFile) => {      
        try {
            setFormStatus("submitting");
            const ownerId = await user._id;

            const lastSeenDate = new Date(formData.last_seen_date);
            const dateToday = new Date();
            const reportData = {...formData, last_seen_date: lastSeenDate, owner_id: ownerId, created_at: dateToday};
            const response = await fetch("http://localhost:5000/api/petreports/", {
                method: "POST",
                body: JSON.stringify(reportData),
                credentials: "include",
                headers: { "Content-Type": "application/json" },
            });
            if(!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to create pet report");
            }

            const json = await response.json();
            const _id = await json._id;

            console.log(json)

            if (imageFile) {
                const compressedImage = await compressImage(imageFile);
                await uploadImage(compressedImage, formData.status, _id);
            }
            dispatch({ type: "CREATE_REPORT", payload: {...formData, _id} });
        } catch (err) {
                console.error("Error in form submission:", err)
                setError(err.message)
                return err.message;
        } finally {
            setFormStatus("completed");
        }
   };

   return { submitPetReport, formStatus , error };
}
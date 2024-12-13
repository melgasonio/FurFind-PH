import { useState } from "react";
import { uploadImage } from "../../apis/firebase/firebaseStorage";
import { compressImage } from "../../apis/imagecompression/imageCompression";

export const usePetReportSubmit = (dispatch) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const submitPetReport = async (formData, imageFile) => {
        console.log("FormData before submission:", formData);
            
        try {
            const lastSeenDate = new Date(formData.last_seen_date);
            const reportData = {...formData, last_seen_date: lastSeenDate};
            const response = await fetch("http://localhost:5000/api/petreports/", {
                method: "POST",
                body: JSON.stringify(reportData),
                headers: { "Content-Type": "application/json" },
            });
            if(!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to create pet report");
            }
            const {_id} = await response.json();
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
            setIsSubmitting(false);
        }
   };

   return { submitPetReport, isSubmitting, error };
}
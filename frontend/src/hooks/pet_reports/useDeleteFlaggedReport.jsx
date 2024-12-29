import { usePetReportContext } from "./usePetReportContext";
import { useGetPetReport } from "./useGetPetReport";
import { useSendFlaggedEmail } from "./useSendFlaggedEmail";

export const useDeleteFlaggedReport = (petProfile) => {
    const { petReports, dispatch } = usePetReportContext();
    const { setPetProfile } = useGetPetReport();
    const { sendEmail } = useSendFlaggedEmail();

    const flaggedHandler = async () => {
        const id = petProfile?._id;
        const prevCount = petProfile.flagged_counter;
        const updateData = { flagged_counter: prevCount + 1 };
  
        try {
  
          if (prevCount < 60) {
            const response = await fetch(`http://localhost:5000/api/petreports/${id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updateData)
            });
    
            const updatedReport = await response.json();
            console.log("Report successful. Updated document:", updatedReport);

            dispatch({ type: 'UPDATE_PETREPORT', payload: updatedReport });
            setPetProfile(updatedReport);
          } else {
            try {
              const response = await fetch(`http://localhost:5000/api/petreports/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                }
              });
    
              const updatedReport = await response.json();
              console.log("Report deleted:", updatedReport);

              dispatch({ type: 'DELETE_PETREPORT', payload: updatedReport });
              setPetProfile(null);

              await sendEmail();
            } catch (err) {
              console.log("Error taking down report:", err)
            }
          }
        } catch (err) {
          console.error('Error updating flagged_counter:', err);
        };

        console.log("Pet reports:", petReports);
    };

    return { flaggedHandler };
}
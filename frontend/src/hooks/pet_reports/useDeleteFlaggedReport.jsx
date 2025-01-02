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
          
          // Max report count is 30
          if (prevCount < 4) {
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
              const responseGet = await fetch(`http://localhost:5000/api/petreports/${id}`);
              const jsonGet = await responseGet.json();
              const {
                name,
                status,
                breed,
              } = jsonGet;

              const responseDelete = await fetch(`http://localhost:5000/api/petreports/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                }
              });
    
              const updatedReport = await responseDelete.json();
              console.log("Report deleted:", updatedReport);

              dispatch({ type: 'DELETE_PETREPORT', payload: updatedReport });
              setPetProfile(null);

              // Send emal to owner
              await sendEmail({ name, status, id, breed });
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
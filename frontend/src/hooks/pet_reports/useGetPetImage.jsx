import { useState } from 'react';
import { app } from '../../apis/firebase/firebaseApp';
import { getStorage, ref , getDownloadURL } from 'firebase/storage'

export const useGetPetImage = () => {
    const [imageURL, setImageURL] = useState("");
    
    const getPetImage = async (status, id) => {
        const storage = getStorage(app);
        const reference = ref(storage, `${status}/${id}`);
        
        await getDownloadURL(reference)
            .then((url) => {
                setImageURL(url);
            })
            .catch((error) => {
                throw Error("Error getting URL", error);
            })
    }

    return { imageURL, getPetImage };
}
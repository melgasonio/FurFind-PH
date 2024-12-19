import { app } from '../../apis/firebase/firebaseApp';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { useUploadProgress } from '../upload_progress/useUploadProgress';

export const useImageUploader = () => {
  const { setProgress } = useUploadProgress();

  // Upload image to Firebase Storage
  const uploadImage = async (file, status, id) => {
    const storage = getStorage(app)
    const petImagesRef = ref(storage, `${status}/${id}`)
    const metadata = {
      contentType: file.type, // Dynamically set content type
    }

    return new Promise((resolve, reject) => {
      const uploadTask = uploadBytesResumable(petImagesRef, file, metadata)
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const uploadedPer = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log(`Upload is ${uploadedPer}% done`);
          setProgress(uploadedPer);
        },
        (uploadError) => {
          console.error('Error during upload:', uploadError)
          reject(uploadError)
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
          console.log('File available at', downloadURL)
          resolve(downloadURL)
          setProgress(0);
        }
      )
    })
  }

  return { uploadImage };
}


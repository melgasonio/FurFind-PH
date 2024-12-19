import { useContext } from "react";
import { UploadProgressContext } from "../../context/upload_context/UploadContext.";

export const useUploadProgress = () => useContext(UploadProgressContext);
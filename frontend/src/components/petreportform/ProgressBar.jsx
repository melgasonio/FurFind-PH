import { useUploadProgress } from "../../hooks/upload_progress/useUploadProgress";

export const ProgressBar = () => {
  const { progress } = useUploadProgress();
  const roundedProgress = Math.round(progress);

  return (
    <div>
        {progress !== 0 && (
          <>
            <p>Submission in progress: {roundedProgress}%</p>
            <div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
              <div className='bg-blue-600 text-xs font-medium text-blue-100text-center p-0.5 leading-none rounded-full' style={{width: `${roundedProgress}%`}}>
              </div>
            </div>
          </>
        )}
    </div>
  );
}
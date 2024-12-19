
export const ProgressBar = () => {

  return (
    <div>
        <p>Submission in progress:</p>
        <div className='w-full bg-gray-200 rounded-full dark:bg-gray-700'>
            <div className='bg-blue-600 text-xs font-medium text-blue-100text-center p-0.5 leading-none rounded-full' style={{width: progress}}>
                {progress}
                {progress === 0 ? "" : `${progress}%`}
            </div>
        </div>
    </div>
  );
}
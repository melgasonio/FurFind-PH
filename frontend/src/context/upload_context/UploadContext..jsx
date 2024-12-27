import { createContext, useState } from 'react';

export const UploadProgressContext = createContext();

export const UploadProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  return (
    <UploadProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </UploadProgressContext.Provider>
  );
};



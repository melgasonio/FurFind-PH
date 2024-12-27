import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PetReportContextProvider } from './context/petReport/PetReportContext.jsx'
import { PetProfileProvider } from './context/petProfile.jsx/PetProfileContext.jsx'

createRoot(document.getElementById('root')).render(
    <PetReportContextProvider>
        <PetProfileProvider>
            <App />
        </PetProfileProvider>
    </PetReportContextProvider>
    
)

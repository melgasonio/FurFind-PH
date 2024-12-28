import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PetReportContextProvider } from './context/pet_report/PetReportContext.jsx'
import { PetProfileProvider } from './context/pet_profile/PetProfileContext.jsx'

createRoot(document.getElementById('root')).render(
    <PetReportContextProvider>
        <PetProfileProvider>
            <App />
        </PetProfileProvider>
    </PetReportContextProvider>
    
)

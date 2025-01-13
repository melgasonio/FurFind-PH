import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PetReportContextProvider } from './context/pet_report/PetReportContext.jsx'
import { PetProfileProvider } from './context/pet_profile/PetProfileContext.jsx'
import { LastButtonContextProvider } from './context/pet_report/LastButtonContext.jsx'

createRoot(document.getElementById('root')).render(
    <PetReportContextProvider>
        <PetProfileProvider>
            <LastButtonContextProvider>
                <App />
            </LastButtonContextProvider>
        </PetProfileProvider>
    </PetReportContextProvider>
    
)

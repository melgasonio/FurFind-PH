import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PetReportContextProvider } from './context/pet_report/PetReportContext.jsx'
import { PetProfileProvider } from './context/pet_profile/PetProfileContext.jsx'
import { LastButtonContextProvider } from './context/pet_report/LastButtonContext.jsx'
import { UserContextProvider } from './context/user/UserContext.jsx'
import { NavigationContextProvider } from './context/navigation/NavigationContext.jsx'

createRoot(document.getElementById('root')).render(
    <PetReportContextProvider>
        <PetProfileProvider>
            <LastButtonContextProvider>
                <UserContextProvider>
                    <NavigationContextProvider>
                        <App />
                    </NavigationContextProvider>
                </UserContextProvider>
            </LastButtonContextProvider>
        </PetProfileProvider>
    </PetReportContextProvider>
    
)

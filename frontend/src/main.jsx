import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PetReportContextProvider from './context/petReport/PetReportContextProvider.jsx'

createRoot(document.getElementById('root')).render(
    <PetReportContextProvider>
        <App />
    </PetReportContextProvider>
    
)

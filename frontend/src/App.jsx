import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import PetReports from './pages/PetReports';
import ReportPet from './pages/ReportPet';

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className='pages'>
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/petreports"
                element={<PetReports />}
              />
              <Route 
                path="/reportpet"
                element={<ReportPet />}
              />            
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

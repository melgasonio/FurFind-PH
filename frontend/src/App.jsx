import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import PetReports from './pages/PetReports';
import ReportPet from './pages/ReportPet';
import PetProfile from './pages/PetProfile';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className=''>
            <Routes className=''>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route
                path="/petreports/page/:num"
                element={<PetReports />}
              />
              <Route 
                path="/reportpet"
                element={<ReportPet />}
              />
              <Route
                path="/petprofile/:id"
                element={<PetProfile />}
              />
              <Route
                path="/login" 
                element={<Login />}
              />
              <Route
                path="/signup" 
                element={<Signup />}
              />               
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

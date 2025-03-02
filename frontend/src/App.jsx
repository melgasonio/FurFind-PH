import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import PetReports from './pages/PetReports';
import ReportPet from './pages/ReportPet';
import PetProfile from './pages/PetProfile';
import Login from './pages/Login';
import Signup from './pages/Signup';

// hooks
import { useEffect } from 'react';
import { useGetPetReports } from "./hooks/pet_reports/useGetPetReports";

function App() {

  const { refetch } = useGetPetReports();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <div className="">
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

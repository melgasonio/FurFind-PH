import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

// pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import PetReports from './pages/PetReports';
import ReportPet from './pages/ReportPet';
import PetProfile from './pages/PetProfile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUs from './pages/AboutUs';
import MVP from './pages/MVP';
import CommunityGuidelines from './pages/CommunityGuidelines';
import Dashboard from './components/Dashboard';
import Posts from './pages/Posts';
import Settings from './pages/Settings';
import ViewOwnPost from './pages/ViewOwnPost';
import EditOwnPost from './pages/EditOwnPost';
import ChatList from './pages/ChatList';
import Modal from './components/Modal';

import { useGetPetReports } from "./hooks/pet_reports/useGetPetReports";
import { useNavigationContext } from './hooks/navigation/useNavigationContext';
import { useDashboardContext } from './hooks/dashboard/useDashboardContext';
import { useModalContext } from './hooks/modal/useModalContext';


function App() {
  const { getPetReports } = useGetPetReports();
  const { isNavOpen } = useNavigationContext();
  const { isDashboardOpen } = useDashboardContext();
  const { isModalOpen } = useModalContext();

  useEffect(() => {
    const fetchReports = async () => {
        await getPetReports();
    };
    fetchReports()
  }, []);

  return (
    <>
      <div className="scroll-smooth">
        <BrowserRouter>
          {isModalOpen && (
            <>
              <Modal />
            </>
          )}
          <Navbar />
          <Dashboard />
          <div className={isNavOpen || isDashboardOpen ? "hidden" : "font-lato"}>
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
              <Route 
                path="/privacypolicy"
                element={<PrivacyPolicy />}
              />
              <Route 
                path="/about"
                element={<AboutUs />}
              />
              <Route 
                path="/mvpdisclaimer"
                element={<MVP />}
              />
              <Route 
                path="/community"
                element={<CommunityGuidelines />}
              /> 
              <Route 
                path="/posts"
                element={<Posts />}
              />
              <Route 
                path="/settings"
                element={<Settings />}
              />
              <Route
                path="/edit/dummy123"
                element={<EditOwnPost />}
              />
              <Route
                path="/view/dummy123"
                element={<ViewOwnPost />}
              />
              <Route
                path="/messages"
                element={<ChatList />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

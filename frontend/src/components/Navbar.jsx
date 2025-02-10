import { Link } from 'react-router-dom'
import { useLastButtonContext } from '../hooks/pet_reports/useLastButtonContext';
import { useLogoutUser } from '../hooks/user/useLogoutUser';


const Navbar = () => {
  const { lastClicked } = useLastButtonContext();
  const { handleLogout } = useLogoutUser();

  return (
    
    <div className='container'>
        <Link to="/">
            <h1>FurFind PH</h1>
        </Link>
        <div className='nav-list'>
          <ul>
            <li className='nav-item'>
              <Link to={`/petreports/page/${lastClicked}`}>Lost & Found Pets</Link>
            </li>
            <li className='nav-item'>
              <Link to="/reportpet">Report a Pet</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/login'}>Login</Link>
            </li>
            <li className='nav-item'>
              <Link to={'/signup'}>Sign Up</Link>
            </li>
            <li className='nav-item' onClick={handleLogout}>
              <Link to={'/'}>Logout</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
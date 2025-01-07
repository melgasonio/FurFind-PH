import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
        <Link to="/">
            <h1>FurFind PH</h1>
        </Link>
        <div className='nav-list'>
          <ul>
            <li className='nav-item'>
              <Link to="/petreports/page/1">Lost & Found Pets</Link>
            </li>
            <li className='nav-item'>
              <Link to="/reportpet">Report a Pet</Link>
            </li>
            <li className='nav-item'>
              <Link to="/petreports/page/1">Lost & Found Pets</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
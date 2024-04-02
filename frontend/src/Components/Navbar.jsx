
import { useState } from 'react';
import '../Style/Navbar.css'

// import '../Style/navstyl.css';
import logo from '../Images/logo-light.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked(!clicked);
  };

  const handleCloseMenu = () => {
    setClicked(false);
  };

  const handle = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <nav>
        <div className="todavs">

          <Link to="/">
            <img src={logo} alt="" className='siddhi-logo' onClick={handle} />
          </Link>

          <div className="nav-menus">
            <ul id='navbars' className={clicked ? "active" : ""}>
              <li><Link to="/" onClick={handleCloseMenu}>Home</Link></li>
              <li><Link to="/About" onClick={handleCloseMenu}>ADD CAR</Link></li>
            </ul>
          </div>
          <div className='mobil'>
            <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'} onClick={handleclick}></i>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar

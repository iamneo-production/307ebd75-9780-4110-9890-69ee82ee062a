import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

    const closeMobileMenu = () => setClick(false);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <img src="images/Logo (4).png" width={155} height={50} alt="isdifds" />
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/locations"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Locations
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/heatwave"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                HEATWAVE/AQI
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                to="/predictions"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PREDICTIONS
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="/team"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Team
              </Link>
            </li>
          </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
import React from 'react'
import { NavLink } from "react-router-dom";
import './NavBar.css'
import { CiCalendar } from "react-icons/ci";

const NavBar = () => {
  return (
     
     <ul className="nav">
        <li><NavLink
            to="/"
            className={({ isActive}) =>
                 isActive ? "active" : ""
            }
            >
            Home
            </NavLink></li>
            <li><NavLink
            to="/about"
            className={({ isActive}) =>
                 isActive ? "active" : ""
            }
            >
            Properties
            </NavLink></li>
            <li> <NavLink
            to="/details"
            className={({ isActive}) =>
                 isActive ? "active" : ""
            }
            >
            Property Details
            </NavLink></li>
            <li><NavLink
            to="/contact"
            className={({ isActive}) =>
                 isActive ? "active" : ""
            }
            >
            Contact Us
            </NavLink></li>
            <li><NavLink
            to="/contact"
            className={({ isActive}) =>
                 isActive ? "active" : ""
            }
            ><CiCalendar/>
            Schedule a visit
            </NavLink></li>
     </ul> 
  )
}

export default NavBar
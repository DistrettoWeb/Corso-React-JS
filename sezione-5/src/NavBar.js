import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
          <div class="nav-wrapper">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
    )
}

export default NavBar
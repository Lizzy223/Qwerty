import React from 'react'
import { NavLink } from "react-router-dom"
const Nav = () => {
  return (
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        {/* <!-- ***** Logo Start ***** --> */}
                        <NavLink to="index.html" className="logo">Qwerty<em> INC</em></NavLink>
                        {/* <!-- ***** Logo End ***** --> */}
                        {/* <!-- ***** Menu Start ***** --> */}
                        <ul className="nav">
                            <li><NavLink to="/" className="active">Home</NavLink></li>                           
                            <li><NavLink to="/about">About</NavLink></li> 
                            <li><NavLink to="/jobs">Jobs</NavLink></li>                           
                            <li><NavLink to="/contact">Contact</NavLink></li> 
                            <li><NavLink to="/login">Login</NavLink></li> 
                            <li><NavLink to="/register">Register</NavLink></li> 
                        </ul>        
                        <a href='.' className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        {/* <!-- ***** Menu End ***** --> */}
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Nav
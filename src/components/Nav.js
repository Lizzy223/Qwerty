import React from 'react'

const Nav = () => {
  return (
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        {/* <!-- ***** Logo Start ***** --> */}
                        <a href="index.html" className="logo">Qwerty<em> INC</em></a>
                        {/* <!-- ***** Logo End ***** --> */}
                        {/* <!-- ***** Menu Start ***** --> */}
                        <ul className="nav">
                            <li><a href="index.html" className="active">Home</a></li>
                            <li><a href="jobs.html">Jobs</a></li>
                            <li><a href="jobs.html">About</a></li>                            
                            <li><a href="contact.html">Contact</a></li> 
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
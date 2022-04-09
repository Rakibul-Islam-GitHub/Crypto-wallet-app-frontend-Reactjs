import React from 'react'

function Header() {
  return (
    <header
    id="header"
    className="fixed-top d-flex align-items-center header-transparent"
  >
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto">
        <a href="index.html">Bitx</a>
      </h1>

      {/* <a href="index.html" className="logo me-auto"><img src={require("../assets/img/logo.png")} alt="" className="img-fluid"/></a> */}

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              Home
            </a>
          </li>
         
          <li>
            <a className="nav-link scrollto" href="#about">
              About
            </a>
          </li>
       
         
          <li>
            <a className="nav-link scrollto" href="#team">
              Team
            </a>
          </li>

        
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}

      <div className="social-links">
        <a href="#" className="twitter">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="#" className="facebook">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" className="linkedin">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="#" className="instagram">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  </header>

  )
}

export default Header
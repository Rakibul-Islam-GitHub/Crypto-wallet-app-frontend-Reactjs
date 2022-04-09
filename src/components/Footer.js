import React from 'react'

function Footer() {
  return (
    <footer id="footer" className="section-bg">
          <div class='footer2-links'>

        <ul>
              <li>
                <a className="nav-link scrollto active">
                Contact Us
                </a>
              </li>
             
              <li>
                <a className="nav-link scrollto" >
                White Paper
                </a>
              </li>
           
             
              <li>
                <a className="nav-link scrollto">
                Discord
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" >
                FORUM
                </a>
              </li>
           
             
              <li>
                <a className="nav-link scrollto">
                Lorem Ipsum
                </a>
              </li>

            
            </ul>
          </div>
          <div className="row footer2">
            <div className="col-lg-3 col-md-6 footer-social-links text-center">
              <a href="#" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 text-center copyright">
              &copy; Copyright <strong>BitX</strong>. All Rights Reserved
            </div>
            <div className="col-lg-3 col-md-6 footer-bitx">
              <strong>BitX</strong>
            </div>
            <a
              href="#"
              className="back-to-top d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-arrow-up-short"></i>
            </a>
          </div>
        </footer>
  )
}

export default Footer
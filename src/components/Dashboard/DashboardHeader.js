import React from "react";
import { NavLink } from "react-router-dom";

const DashboardHeader = () => {
    
    
      return (
        <header
          id="header"
          className="fixed-top d-flex align-items-center header-transparent"
        >
          <div className=" d-flex align-items-center header-div">
            <h1 className="logo me-auto">
              <NavLink exact to="/">
                Bitx
              </NavLink>
            </h1>
    
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                
                <li>
                    <NavLink exact to="#"
                  className="nav-link scrollto">
                    Terra
                  
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    
                    to="/dashboard"
                    className="nav-link active scrollto"
                    
                  >
                      <img src={require('../../assets/img/dashboard/user.png')} alt="" height='20px' width='20px' style={{marginRight:'5px'}}/>
                    Username
                    <i class="bi bi-chevron-down"></i>
                  </NavLink>
                </li>
              </ul>
              
            </nav>
          </div>
        </header>
      );
};

export default DashboardHeader;
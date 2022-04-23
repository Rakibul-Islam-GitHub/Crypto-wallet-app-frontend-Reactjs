import React from 'react';
import { Link } from 'react-router-dom';
import "../../pages/Dashboard/dashboard.css"

const Sidebar = ({activeMenu}) => {
    return (
        <>
        <div className="sidebar col-md-3">
            <div className="sidebar2">
              <ul className="sidebar-items sidebar-wrapper">
                <li className="">
                  <Link
                    // activeClassName="active"
                    

                    to="/dashboard"
                    className="nav-link"
                  >
                    <i className="bi bi-menu-app"></i>
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link to="/exchange" className="nav-link">
                    <i class="bi bi-currency-exchange"></i>
                    Exchange
                  </Link>
                </li>

                <li>
                  <Link to="/liquidity" className="nav-link">
                    <i class="bi bi-droplet-half"></i>
                    Liquidaty
                  </Link>
                </li>

                <li>
                  <Link to="/farming" className="nav-link">
                    <i class="bi bi-graph-up"></i>
                    Farming
                  </Link>
                </li>
              </ul>
            </div>
          </div>
            
        </>
    );
};

export default Sidebar;
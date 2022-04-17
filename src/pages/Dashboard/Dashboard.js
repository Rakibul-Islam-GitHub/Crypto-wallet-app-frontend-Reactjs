import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Chart from "../../components/Dashboard/Chart";
import DashboardHeader from '../../components/Dashboard/DashboardHeader';
import Footer from '../../components/Footer';
import './dashboard.css';

const Dashboard = () => {


    useEffect(() => {
        /**
         * Easy selector helper function
         */
        const select = (el, all = false) => {
          el = el.trim();
          if (all) {
            return [...document.querySelectorAll(el)];
          } else {
            return document.querySelector(el);
          }
        };
    
        /**
         * Easy event listener function
         */
        const on = (type, el, listener, all = false) => {
          let selectEl = select(el, all);
          if (selectEl) {
            if (all) {
              selectEl.forEach((e) => e.addEventListener(type, listener));
            } else {
              selectEl.addEventListener(type, listener);
            }
          }
        };
    
        /**
         * on scroll adding to event listener
         */
        const onscroll = (el, listener) => {
          el.addEventListener("scroll", listener);
        };
    
        /**
         * Navbar links active state on scroll
         */
        let navbarlinks = select("#navbar .scrollto", true);
        const navbarlinksActive = () => {
          let position = window.scrollY + 200;
          navbarlinks.forEach((navbarlink) => {
            if (!navbarlink.hash) return;
            let section = select(navbarlink.hash);
            if (!section) return;
            if (
              position >= section.offsetTop &&
              position <= section.offsetTop + section.offsetHeight
            ) {
              navbarlink.classList.add("active");
            } else {
              navbarlink.classList.remove("active");
            }
          });
        };
        window.addEventListener("load", navbarlinksActive);
        onscroll(document, navbarlinksActive);
    
       
    
        /**
         * Toggle .header-scrolled class into #header when page is scrolled
         */
        let selectHeader = select("#header");
        if (selectHeader) {
          const headerScrolled = () => {
            if (window.scrollY > 100) {
              selectHeader.classList.add("header-scrolled");
            } else {
              selectHeader.classList.remove("header-scrolled");
            }
          };
          window.addEventListener("load", headerScrolled);
          onscroll(document, headerScrolled);
        }
    
        /**
         * Back to top button visibility (toggle)
         */
        let backtotop = select(".back-to-top");
        if (backtotop) {
          const toggleBacktotop = () => {
            if (window.scrollY > 100) {
              backtotop.classList.add("active");
            } else {
              backtotop.classList.remove("active");
            }
          };
          window.addEventListener("load", toggleBacktotop);
          onscroll(document, toggleBacktotop);
        }
    


        /**
         * Mobile nav toggle
         */
        on("click", ".mobile-nav-toggle", function (e) {
          select("#navbar").classList.toggle("navbar-mobile");
          this.classList.toggle("bi-list");
          this.classList.toggle("bi-x");
        });
    
        /**
         * Mobile nav dropdowns activate
         */
        on(
          "click",
          ".navbar .dropdown > a",
          function (e) {
            if (select("#navbar").classList.contains("navbar-mobile")) {
              e.preventDefault();
              this.nextElementSibling.classList.toggle("dropdown-active");
            }
          },
          true
        );



    
      }, []);
    return (
      <>
        <div className="header-container">
          <DashboardHeader />
        </div>
        <div className="dashboard-main">
          {/* this is sidebar of dashboard */}
          <div className="sidebar">
            <div className="sidebar2">
              <ul className="sidebar-items sidebar-wrapper">
                <li>
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
                  <Link to="/dashboard" className="nav-link">
                    <i class="bi bi-currency-exchange"></i>
                    Exchange
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard" className="nav-link">
                    <i class="bi bi-droplet-half"></i>
                    Liquidaty
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard" className="nav-link">
                    <i class="bi bi-graph-up"></i>
                    Farming
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* this is dashboard contents */}
          <div className="dashboard-item">
            <div className="account-section row">
              <div className="account col-md-4">
                <h5>Accounts</h5>
                <div className="account-card card text-center d-flex flex-column justify-content-center">
                  <strong>$4,123</strong>
                  <p>Total Balance</p>

                  <div className="account-card-circle"></div>
                  <div className="account-card-circle2"></div>
                  <div className="account-card-circle3"></div>
                </div>
              </div>
              <div className="portfolio col-md-7">
                <h5>My Portfolio</h5>
                <div className="portfolio-chart">
                  <Chart></Chart>
                </div>
              </div>
            </div>

            {/* wallet table */}

            <div className="wallet-table col-md-11">
              <div className="wallet-icon d-flex flex-row">
                <img
                  style={{ marginRight: "10px" }}
                  src={require("../../assets/img/dashboard/wallet.png")}
                  alt="wallet"
                />
                <p>Wallet</p>
              </div>
              <div className="wallet-table-wrapper">
                <table class="table table-striped">
                  <thead className="table-dark">
                    <tr style={{borderRadius:'8px'}}>
                      
                      <th scope="col">Assets</th>
                      <th scope="col">Price</th>
                      <th scope="col">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{borderRadius:'8px'}}>
                      
                      <td> <img src={require("../../assets/img/dashboard/usdt.png")} width="30px" height="30px" alt="" /> USDT</td>
                      <td>$1.00</td>
                      <td>385.73</td>
                    </tr>
                    <tr>
                      
                      <td><img src={require("../../assets/img/dashboard/bnb.png")} width="30px" height="30px" alt="" /> BNB</td>
                      <td>$448.60</td>
                      <td>385.77</td>
                    </tr>
                    <tr>
                      
                      <td ><img src={require("../../assets/img/dashboard/ftm.png")} width="30px" height="30px" alt="" /> FTM</td>
                      <td>$1.67</td>
                      <td>385.73</td>
                    </tr>

                    <tr>
                      
                      <td ><img src={require("../../assets/img/dashboard/eth.png")} width="30px" height="30px" alt="" /> ETH</td>
                      <td>$3478.14</td>
                      <td>385.73</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* wallet table end */}

            <div className="bitx-platform col-md-11">
                <p>BitX Platform</p>

                <div className="bitx-platform-chart-container row">

                    <div className="bitx-platform-chart col-md-7">
                        <div className="chart-header">
                            <div className="chart-header-left">
                                <h6>$2.62 <span className="chartspan">UST</span> </h6>
                                <p>ANC Price</p>
                            </div>

                        </div>
                    <Chart></Chart>
                    </div>
                    <div className="bitx-platform-piechart col-md-4">

                        pie chart
                    </div>
                </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
};

export default Dashboard;
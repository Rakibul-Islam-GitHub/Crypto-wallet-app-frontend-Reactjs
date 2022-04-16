import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
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
                  <Link
                    
                    to="/dashboard"
                    className="nav-link"
                  >
                      <i class="bi bi-currency-exchange"></i>
                    Exchange
                  </Link>
                </li>
                
                <li>
                  <Link
                   
                    to="/dashboard"
                    className="nav-link"
                  >
                      <i class="bi bi-droplet-half"></i>
                    Liquidaty
                  </Link>
                </li>
                
                <li>
                  <Link
                    
                    to="/dashboard"
                    className="nav-link"
                  >
                      <i class="bi bi-graph-up"></i>
                    Farming
                  </Link>
                </li>

              </ul>
            </div>
          </div>

{/* this is dashboard items */}
          <div className="dashboard-item">

              <div className="account-section row">
                  <div className="account col-md-4">
                        account card
                  </div>
                  <div className="portfolio col-md-8">
                      portfolio chart

                  </div>


              </div>
          </div>
        </div>

        <Footer />
      </>
    );
};

export default Dashboard;
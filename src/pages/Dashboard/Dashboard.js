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


            {/* bitx platform start */}
            <div className="bitx-platform row col-md-11">
                <p>BitX Platform</p>

                

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
            {/* bitx platform end */}

            {/* bitx platform 2nd row start */}
            <div className="bitx-p-row2 row col-md-11">
                <div className="bitx-p-row2-chart div-bc col-md-7">
                    <div className="bitx-p-row2-chart-header">
                        <img src={require('../../assets/img/dashboard/bluebar.png')} height="51px" alt="" />
                        <h6 className="total-diposit">12,007,738,396  UST  <span className="total-diposit-monitor-green"> +5.13%</span><br/> <span className="t-d-b">Total Diposit</span> </h6> 
                        

                        <img src={require('../../assets/img/dashboard/blackbar.png')} height="51px" alt="" />
                        <h6>12,007,738,396 UST  <span className="total-diposit-monitor-green"> +5.13%</span> <br/> <span className="t-d-b"> Total Borrow</span> </h6>
                        
                    </div>
                    {/* to do : have to add double line chart */}
                    <div className="bitx-p-row2-doublelinechart-wrapper mt-4">
                        <Chart></Chart>
                    </div>
                </div>
                <div className="bitx-p-row2-right div-bc col-md-4">
                    <p className="pt-3 pb-0 mb-0 anc-buyback">ANC Buyback (72HR)</p>
                    <div className=" d-flex flex-row ">
                        <p className="anc me-4">118,321 <span className="ancust">ANC</span> </p>
                        <p className="ust">318,867 <span className="ancust">UST</span></p>
                    </div>
                    <hr />

                    <p className="pt-3 pb-0 mb-0 anc-buyback">ANC Buyback (Total)</p>
                    <div className="anc-buybac-total d-flex flex-row">
                    <p className="anc me-4">118,321 <span className="ancust">ANC</span></p>
                        <p className="ust">318,867 <span className="ancust">UST</span></p>
                    </div>
                </div>
            </div>

            {/* stablecoin table start */}
            <div className="stablecoin-table-container col-md-11 div-bc">
            <table class="table">
  <thead>
    <tr>
      
      <th className="stc-head" >Stablecoin Market</th>
      <th scope="col">Total Deposit</th>
      <th scope="col">Deposit APY</th>
      <th scope="col">Total Borrow</th>
      <th scope="col">Borrow APR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td> <img src={require("../../assets/img/dashboard/ust.png")} alt="" /> data1</td>
      <td>data2</td>
      <td>data3</td>
      <td>data4</td>
      <td>data5</td>
      
    </tr>
   
  </tbody>
</table>

            </div>

            {/* last chart start */}
            <div className="last-chart-container col-md-11 mb-5 div-bc">
            <div className="bitx-platform-chart">
                        <div className="chart-header mb-2 ps-5 pt-4">
                            <div className="chart-header-left">
                                <h6>6,653,854,787<span className="chartspan"> UST</span> <span className="percentage-red">-5.13%</span> </h6>
                                <p>Total Collateral Value</p>
                            </div>

                        </div>
                    <Chart></Chart>
                    </div>
            </div>

            {/* Collateral Market table start */}
            <div className="collarate-market-table-container col-md-11 div-bc">

            <table class="table">
  <thead>
    <tr>
      
      <th className="stc-head" >Collateral Market</th>
      <th scope="col">Price</th>
      <th scope="col">Total Collateral</th>
      <th scope="col">Total Collateral Value</th>
      
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>
          <div className="d-flex flex-row">
          <img className="me-2" src={require("../../assets/img/dashboard/bluna.png")} height="46" width="46"alt="" /> 
      
      <p>bLuna <br /> <span className="collarate-markt-span">Bonded Luna </span> </p>

          </div>
           
      
      </td>
      <td>$12,006M</td>
      <td>45.143M</td>
      <td>$4,896.23M</td>
    </tr>
    
    <tr>
      <td>
          <div className="d-flex flex-row">
          <img className="me-2" src={require("../../assets/img/dashboard/beth.png")} height="46" width="46"alt="" /> 
      
      <p>bETH <br /> <span className="collarate-markt-span">Bonded bETH </span> </p>

          </div>
           
      
      </td>
      <td>$12,006M</td>
      <td>45.143M</td>
      <td>$4,896.23M</td>
    </tr>

    <tr>
      <td>
          <div className="d-flex flex-row">
          <img className="me-2" src={require("../../assets/img/dashboard/wasavax.png")} height="46" width="46"alt="" /> 
      
      <p>wasAVAX <br /> <span className="collarate-markt-span">BENQI Staked AVAX (Wormhole) </span> </p>

          </div>
           
      
      </td>
      <td>$12,006M</td>
      <td>45.143M</td>
      <td>$4,896.23M</td>
    </tr>
   
  </tbody>
</table>

            </div>
          </div>
        </div>

        <Footer  />
      </>
    );
};

export default Dashboard;
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import DashboardHeader from "../../../components/Dashboard/DashboardHeader";
import Footer from "../../../components/Footer";
import "./exchange.css"
import "../dashboard.css"
import Sidebar from "../../../components/Dashboard/Sidebar";
// import Sidebar from "../../../components/Dashboard/Sidebar";



const Exchange = () => {
    return (
      <>
        <div className="header-container">
          <DashboardHeader />
        </div>

       
        <div className="dashboard-main row col-md-12">

           {/* this is sidebar */}
           <Sidebar/>
          {/* sidebar end */}

          <div className="exchange-container col-md-8">
              {/* swap and button part */}
              <div className="exchange-header swap">
                    <p className="swap">Swap</p>
                    <div className="btn-div">
                        <button className="btn-mrkt active"> <p>Market</p> </button>
                        <button className=" btn-lmt"> <p>Limit</p> </button>

                    </div>
              </div>

            {/* xchnge card body */}
              <div className="exchange-card-body">
                  <div className="from-to-card row col-lg-12">
                      <div className="from col-lg-5">
                          <p className="from-to-p">From</p>
                          <div className="from-card">
                          <div className="fromcoin d-flex justify-content-end">
                              <img src={require('../../../assets/img/dashboard/coinfrom.png')} alt="" />
                          </div>
                              <div className="coin-name d-flex justify-content-start"> <p>Bitcoin</p> </div>
                              <div className="arrow d-flex justify-content-end">
                              <img src={require('../../../assets/img/dashboard/arror.png')} alt="" />
                              </div>
                              <div className="balance-value d-flex">
                                  <div className="balance">
                                      <p>1.14 BTC <br />  <span>Balance</span> </p>
                                  </div>
                                  <div className="value">
                                      <p>$45,256 <br />  <span>Value</span> </p>
                                  </div>
                              </div>
                          </div>

                      </div>

                      
                      <div className="arror col-lg-2 d-flex flex-row justify-content-center align-items-center">
                          <img src={require('../../../assets/img/dashboard/arrow-left-right.png')} height="30px" width="30px" alt="" />
                      </div>
                      <div className="to col-lg-5">
                          <p className="from-to-p">To</p>

                          <div className="to-card">
                          <div className="to-coin d-flex justify-content-end">
                              <img src={require('../../../assets/img/dashboard/cointo.png')} alt="" />
                          </div>
                              <div className="coin-name d-flex justify-content-start"> <p>Tether</p> </div>
                              <div className="arrow d-flex justify-content-end">
                              <img src={require('../../../assets/img/dashboard/arror.png')} alt="" />
                              </div>
                              <div className="balance-value d-flex">
                                  <div className="balance">
                                      <p>1.14 BTC <br />  <span>Balance</span> </p>
                                  </div>
                                  <div className="value">
                                      <p>$45,256 <br />  <span>Value</span> </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>



                  <div className="fee-div">
                      <div className="row col-lg-12">
                          <div className="col-lg-5"></div>
                          <div className="col-lg-2 d-flex justify-content-center">
                              <div className="fee-body">
                                  <h6 className="d-flex align-items-center justify-content-center">0.2%</h6>
                                  <p className="shipping">Slipping <span> <img src={require('../../../assets/img/dashboard/edit.png')} height="20px" width="20px" alt="" /> </span></p>
                              </div>
                          </div>
                          <div className="col-lg-5"></div>
                      </div>
                  </div>


                  <div className="coin-value-div">
                  <div className="row col-lg-12">
                          <div className="col-lg-5 input-coin ">
                              {/* <input type="text"
                               /> */}
                                <p className="value p-2 d-flex flex-row align-items-center">0.43 BTC</p>
                             
                          </div>

                          <div className="col-lg-2 d-flex justify-content-center">
                              <div className="fee-body">
                                  <div className="d-flex align-items-center justify-content-center"><img src={require('../../../assets/img/dashboard/strightline.png')}   alt="" /></div>
                                  
                              </div>
                          </div>
                          <div className="col-lg-5  output-coin">
                              {/* <input type="text"
                               /> */}
                                <p className="value p-2 d-flex flex-row align-items-center">$20,000</p>
                             
                          </div>
                      </div>
                  </div>
                  <div className="connect-wallet-div">
                     <button><h6>Connect Wallet</h6></button>
                  </div>
              </div>
          </div>
        </div>


        <Footer></Footer>
      </>
    );
};

export default Exchange;
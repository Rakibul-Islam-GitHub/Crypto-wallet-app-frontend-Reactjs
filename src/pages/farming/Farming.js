import React, { useState } from 'react';
import DashboardHeader from '../../components/Dashboard/DashboardHeader';
import Sidebar from '../../components/Dashboard/Sidebar';
import Footer from '../../components/Footer';
import "./farming.css";
import "../Dashboard/dashboard.css"

const Farming = () => {
    const [isActive, setIsActive]= useState('active');
    return (
      <>
        <div className="header-container">
          <DashboardHeader />
        </div>

        <div className="dashboard-main row col-md-12">
          {/* sidebar here */}
          <Sidebar />

          {/* farming container */}
          <div className="farming-container col-md-9">
            <div className="exchange-header swap">
              <p className="swap">Farming</p>
              
              <div className="btn-and-search row col-md-12">

              <div className="btn-div col-md-6">
                <button onClick={() =>setIsActive('active')} className={`btn-mrkt ${isActive==='active' && "active"}`}>
                  {" "}
                  <p>Active</p>{" "}
                </button>
                <button  className={`btn-lmt ${isActive==='inactive' && ""}`}>
                  {" "}
                  <p>Inactive</p>{" "}
                </button>
              </div> 


              <div className="search-field-farm  col-lg-6 col-sm-10 mt-sm-3 mt-lg-0">
                    <input className="float-lg-end search-input" placeholder="Search Farms..." type="text" />
                    <button className="search-btn"><i class="bi bi-search"></i></button>
                </div>



              </div>

              


               {/* farming card body */}
               {/* {liquidity==='createliquidity' ? 
               <CreateLiquidity/> : 
               <MyLiquidity/>
            } */}
            {isActive==='active' ?
            //   here farming will be render since the selected tab is active
            <div className="farming-table-container mt-3 col-md-12 col-lg-10 table-responsive-sm">

            <table class="table table-striped">
                  <thead className="">
                    
                      
                      <th scope="col">Fearured <img src={require("../../assets/img/dashboard/arrow-up.png")}  alt="" /></th>
                      <th scope="col">APR <img src={require("../../assets/img/dashboard/arrow-up.png")}  alt="" /></th>
                      <th scope="col">Liquidity <img src={require("../../assets/img/dashboard/arrow-up.png")}  alt="" /></th>
                      <th scope="col">Earning <img src={require("../../assets/img/dashboard/arrow-up.png")}  alt="" /></th>
                    
                  </thead>
                  <tbody>
                    <tr >
                      
                      <td> <img className="coinicon-lq" src={require("../../assets/img/dashboard/usdt.png")} width="30px" height="30px" alt="" />  USDT</td>
                      <td>$1.00</td>
                      <td>385.73</td>
                      <td> - <img src={require("../../assets/img/dashboard/boo.png")} width="22px" height="22px" alt="" /></td>
                      
                    </tr>
                    <tr>
                      
                      <td><img src={require("../../assets/img/dashboard/bnb.png")} width="30px" height="30px" alt="" />  BNB</td>
                      <td>$448.60</td>
                      <td>385.77</td>
                      <td> - <img src={require("../../assets/img/dashboard/boo.png")} width="22px" height="22px" alt="" /></td>
                      
                    </tr>
                    <tr>
                      
                      <td ><img src={require("../../assets/img/dashboard/ftm.png")} width="30px" height="30px" alt="" />  FTM</td>
                      <td>$1.67</td>
                      <td>385.73</td>
                      <td> - <img src={require("../../assets/img/dashboard/boo.png")} width="22px" height="22px" alt="" /></td>
                      
                    </tr>

                    <tr>
                      
                      <td ><img src={require("../../assets/img/dashboard/eth.png")} width="30px" height="30px" alt="" />  ETH</td>
                      <td>$3478.14</td>
                      <td>385.73</td>
                      <td> - <img src={require("../../assets/img/dashboard/boo.png")} width="22px" height="22px" alt="" /></td>
                      
                    </tr>
                  </tbody>
                </table>

            </div>




            : <></>
        }
               
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </>
    );
};

export default Farming;
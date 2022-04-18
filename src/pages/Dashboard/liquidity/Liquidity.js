import React, { useState } from 'react';
import DashboardHeader from '../../../components/Dashboard/DashboardHeader';
import Sidebar from '../../../components/Dashboard/Sidebar';
import Footer from '../../../components/Footer';
import "../exchange/exchange.css"
import "./liquidity.css"
import "../dashboard.css"
import CreateLiquidity from '../../../components/Dashboard/liquidity/CreateLiquidity';
import MyLiquidity from '../../../components/Dashboard/liquidity/MyLiquidity';

const Liquidity = () => {
    const [liquidity, setLiquidity]= useState('createliquidity');
    return (
      <>
        <div className="header-container">
          <DashboardHeader />
        </div>

        <div className="dashboard-main row col-md-12">
          {/* sidebar here */}
          <Sidebar />

          {/* Liquidity container */}
          <div className="liquidity-container col-md-8">
            <div className="exchange-header swap">
              <p className="swap">Liquidity</p>
              <div className="btn-div">
                <button onClick={() =>setLiquidity('createliquidity')} className={`btn-mrkt ${liquidity==='createliquidity' && "active"}`}>
                  {" "}
                  <p>Create Liquidity</p>{" "}
                </button>
                <button onClick={() =>setLiquidity('myliquidity')} className={`btn-lmt ${liquidity==='myliquidity' && "active"}`}>
                  {" "}
                  <p>My Liquidity</p>{" "}
                </button>
              </div>

               {/* liquidity card body */}
               {liquidity==='createliquidity' ? 
               <CreateLiquidity/> : 
               <MyLiquidity/>
            }
               
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </>
    );
};

export default Liquidity;
import React from 'react';
import "./myliquidity.css"

const MyLiquidity = () => {
    return (
        <>
            <div className="myliquidity-container mt-3 col-md-10">

            <table class="table table-striped">
                  <thead className="">
                    
                      
                      <th scope="col">Fearured</th>
                      <th scope="col">APR</th>
                      <th scope="col">Liquidity</th>
                      <th scope="col">Earning</th>
                    
                  </thead>
                  <tbody>
                    <tr >
                      
                      <td> <img className="coinicon-lq" src={require("../../../assets/img/dashboard/usdt.png")} width="30px" height="30px" alt="" />  USDT</td>
                      <td>$1.00</td>
                      <td>385.73</td>
                      <td> - <img src={require("../../../assets/img/dashboard/boo.png")} width="22px" height="22px" alt="" /></td>
                      
                    </tr>
                    <tr>
                      
                      <td><img src={require("../../../assets/img/dashboard/bnb.png")} width="30px" height="30px" alt="" />  BNB</td>
                      <td>$448.60</td>
                      <td>385.77</td>
                      <td> - <img src={require("../../../assets/img/dashboard/boo.png")} width="22px" height="22px" alt="" /></td>
                      
                    </tr>
                    <tr>
                      
                      <td ><img src={require("../../../assets/img/dashboard/ftm.png")} width="30px" height="30px" alt="" />  FTM</td>
                      <td>$1.67</td>
                      <td>385.73</td>
                      <td> - <img src={require("../../../assets/img/dashboard/boo.png")} width="22px" height="22px" alt="" /></td>
                      
                    </tr>

                    <tr>
                      
                      <td ><img src={require("../../../assets/img/dashboard/eth.png")} width="30px" height="30px" alt="" />  ETH</td>
                      <td>$3478.14</td>
                      <td>385.73</td>
                      <td> - <img src={require("../../../assets/img/dashboard/boo.png")} width="22px" height="22px" alt="" /></td>
                      
                    </tr>
                  </tbody>
                </table>

            </div>
        </>
    );
};

export default MyLiquidity;
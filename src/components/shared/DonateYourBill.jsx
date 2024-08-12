

import React, {useState} from 'react';
import { extend } from 'lodash';
import { Spin } from 'antd';

const DonateYourBillSection = (props) => {
  const { selectedBillsToDisplay, finalAmountOfSelectedBills, selectedBills, parentComponentType, loading, data, setBills, handleSelect, checkbox, isMobile } = props;
  const [isReadMore, setIsReadMore] = useState(false)
  return (
    <div>
      <section style={{ paddingBottom: '15px' }} className="donate-your-bills">
        <div className="container container-lg">
          {
            parentComponentType !== 'donateMoney' ?
            // <h2 className="main-heading text-center mb-4 mb-md-5 pb-md-4"> <span> Donate </span> your Bills</h2>
              <h2 className="main-heading text-center mb-4"> <span>Switch  </span> And Donate</h2> : ''
          }
          <h6 className='text-center mb-md-5 pb-md-4'>Click the utility providers below to see how much you could donate simply by switching your bills through our utility partner.</h6>
          <Spin spinning={loading}>
            <div className="row no-gutters">
              {
                data && data.map(({ method, icon, name, final_amount: finalAmount }, index) => {
                  const divParams = { cursor: finalAmount === 0 ? "unset":"pointer" };
                  const isSelected = selectedBills.find((bill) => bill.method === method);
                  if (isSelected) {
                    // extend(divParams, {
                    //   background: '#fffcdb'
                    // })
                  }
                  return <div style={divParams} onClick={() => {
                    if(finalAmount !== 0){
                      setBills({ method, name, finalAmount })
                    }
                  }} key={index} className={(!isMobile && isSelected) ? " custom-border col-lg-3 col-md-4 col-sm-6 active_desktop" : "custom-border col-lg-3 col-md-4 col-sm-6"} >
                    <div className={isSelected ? (finalAmount === 0 ? `bills_box active box_overlay` : `bills_box active`)  : (finalAmount === 0 ? `bills_box box_overlay` : `bills_box`)}>
                      
                      <p className={finalAmount === 0 ? "price unavailable" : "price"}>${finalAmount}</p>
                      <span className="top_border"></span><span className="bottom_border"></span><span className="right_border"></span>
                      <div className="icon-wrap">
                        <img className="img-fluid" style={{ width: 66, height: 65.979 }} src={`${icon}`} alt='' />
                      </div>
                      <h3 style={{ color: (isSelected && !isMobile) ? '#3cb64f' : 'black' }}>{name || 'N/A'}</h3>
                    </div>
                  </div>
                })
              }
            </div>
          </Spin>
        </div>
        
        {selectedBillsToDisplay &&
          <div className="container total-bill-box">
            <div style={{ marginBottom: '5px' }} className="total">
              <div className="left_text">
                <h4>Total</h4>
                <p>
                  <span className="font-weight-bold">Bills :</span>
                  <span className=" ml-2">
                    {
                      selectedBillsToDisplay
                    }
                  </span>
                </p>
              </div>
              <div className="right_text text-right">
                <p className="total-tag">Total donations</p>
                <h4 className="total-amount text_green">AU$ {finalAmountOfSelectedBills}</h4>
              </div>
            </div>
          </div>
        }
        <div className="container ">
          <div className="row">
            <div className="bill-input col-12 col-md-12 mx-auto mt-sm-3">
              <div className="cust-cehck">
                <input type="checkbox" checked={checkbox} name="check" value={checkbox} onChange={handleSelect} />
                <label htmlFor="">
                  {/* <a className="utility-plan" target="_blank" rel="noreferrer" href="https://www.icause.com.au/guarantee">
                    
                  </a> */}
                   {isMobile ?
                    <p>By selecting Switch and Donate as your donation method,{isReadMore && <span>
                 you are agreeing to provide your chosen utility bill(s) for review. Raise Capital Holding trading as icause, ABN 56 650 137 607, has partnered with CheapBills Pty Ltd, ABN 66 168 166 667. CheapBills Pty Ltd will give 30% of the applicable commission to your chosen cause when you successfully switch utility provider(s). Please read and accept our Terms and Conditions
                    </span>}<span style={{color:'#3cb64f'}} onClick={()=>setIsReadMore(!isReadMore)}>{isReadMore ? " Read Less" : "... Read More"}</span>
                    
                  </p>
                  :
                  <a className="utility-plan" target="_blank" rel="noreferrer" href="https://www.icause.com.au/guarantee">
                    <p>
                   By selecting Switch and Donate as your donation method, you are agreeing to provide your chosen utility bill(s) for review. Raise Capital Holding trading as icause, ABN 56 650 137 607, has partnered with CheapBills Pty Ltd, ABN 66 168 166 667. CheapBills Pty Ltd will give 30% of the applicable commission to your chosen cause when you successfully switch utility provider(s). Please read and accept our Terms and Conditions
                    </p>
                  </a>
                  }
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DonateYourBillSection;

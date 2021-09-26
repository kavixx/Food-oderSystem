import React from 'react';
import { IoFastFood } from "react-icons/io5";
import { GiScooter } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import './Index.css';

function SectionServ(){
  return(
    <section id="payment">
        <div id="services" className="container">
          <div className="services-top">
            <div className="container bootstrap snippets bootdey">
              <div className="row text-center">
                <div className="col-sm-12 col-md-12 col-md-12">
                  <h5>Why you choose</h5>
                  <h2 style={{fontSize: '35px', lineHeight: '30px', marginBottom: '25px', fontWeight: '600'}}>OUR SERVICES</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-offset-1 col-sm-12 col-md-12 col-md-10">
                  <div className="services-list">
                    <div className="row">
                      <div className="col-sm-6 col-md-4 col-md-4">
                        <div className="service-block" style={{visibility: 'visible'}}>
                          <div className="text-block">
                            <div className="name">Quality Foods <IoFastFood style={{marginBottom:'12px'}}/></div>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-md-4">
                        <div className="service-block" style={{visibility: 'visible'}}>
                          <div className="text-block">
                            <div className="name">Fast Delivery   <GiScooter style={{marginBottom:'8px',fontSize:'35px'}}/></div>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-md-4">
                        <div className="service-block" style={{visibility: 'visible'}}>
                          <div className="text-block">
                            <div className="name">Unique Taste     <GiFullPizza style={{marginBottom:'8px',fontSize:'30px'}}/></div>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></section>
  )
}
export default SectionServ;
import React, { useState } from 'react';
import './BestDeal.css';
import deal1 from '../../../assets/images/deal-01.jpg'
import deal2 from '../../../assets/images/deal-02.jpg'
import deal3 from '../../../assets/images/deal-03.jpg'
const BestDeal = () => {
  const [activeTab, setActiveTab] = useState('appartment');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="section best-deal">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-heading">
              <h6>| Best Deal</h6>
              <h2>Find Your Best Deal Right Now!</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tabs-content">
              <div className="row">
                <div className="nav-wrapper">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === 'appartment' ? 'active' : ''}`}
                        onClick={() => handleTabClick('appartment')}
                      >
                        Appartment
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === 'villa' ? 'active' : ''}`}
                        onClick={() => handleTabClick('villa')}
                      >
                        Villa House
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === 'penthouse' ? 'active' : ''}`}
                        onClick={() => handleTabClick('penthouse')}
                      >
                        Penthouse
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div
                    className={`tab-pane fade ${activeTab === 'appartment' ? 'show active' : ''}`}
                    id="appartment"
                    role="tabpanel"
                    aria-labelledby="appartment-tab"
                  >
                    <div className="row">
                            <div className="col-lg-3">
                              <div className="info-table">
                                <ul>
                                  <li>Total Flat Space <span>185 m2</span></li>
                                  <li>Floor number <span>26th</span></li>
                                  <li>Number of rooms <span>4</span></li>
                                  <li>Parking Available <span>Yes</span></li>
                                  <li>Payment Process <span>Bank</span></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <img src={deal1} alt="" />
                            </div>
                            <div className="col-lg-3">
                              <h4>Extra Info About Property</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. 
                                <br /><br />When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                              <div className="icon-button">
                                <a href="property-details.html"><i className="fa fa-calendar" /> Schedule a visit</a>
                              </div>
                            </div>
                          </div>
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === 'villa' ? 'show active' : ''}`}
                    id="villa"
                    role="tabpanel"
                    aria-labelledby="villa-tab"
                  >
                    <div className="row">
                            <div className="col-lg-3">
                              <div className="info-table">
                                <ul>
                                  <li>Total Flat Space <span>250 m2</span></li>
                                  <li>Floor number <span>26th</span></li>
                                  <li>Number of rooms <span>5</span></li>
                                  <li>Parking Available <span>Yes</span></li>
                                  <li>Payment Process <span>Bank</span></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <img src={deal2} alt="" />
                            </div>
                            <div className="col-lg-3">
                              <h4>Detail Info About Villa</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. <br /><br />Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
                              <div className="icon-button">
                                <a href="property-details.html"><i className="fa fa-calendar" /> Schedule a visit</a>
                              </div>
                            </div>
                          </div>
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === 'penthouse' ? 'show active' : ''}`}
                    id="penthouse"
                    role="tabpanel"
                    aria-labelledby="penthouse-tab"
                  >
                    <div className="row">
                            <div className="col-lg-3">
                              <div className="info-table">
                                <ul>
                                  <li>Total Flat Space <span>320 m2</span></li>
                                  <li>Floor number <span>34th</span></li>
                                  <li>Number of rooms <span>6</span></li>
                                  <li>Parking Available <span>Yes</span></li>
                                  <li>Payment Process <span>Bank</span></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <img src={deal3} alt="" />
                            </div>
                            <div className="col-lg-3">
                              <h4>Extra Info About Penthouse</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. <br /><br />Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
                              <div className="icon-button">
                                <a href="property-details.html"><i className="fa fa-calendar" /> Schedule a visit</a>
                              </div>
                            </div>
                          </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
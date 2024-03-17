import React from 'react'
import infoIcon1 from '../../../assets/images/info-icon-01.png'
import infoIcon2 from '../../../assets/images/info-icon-02.png'
import infoIcon3 from '../../../assets/images/info-icon-03.png'
import infoIcon4 from '../../../assets/images/info-icon-04.png'
const InfoTable = () => {
  return (
    <div className="info-table">
                  <ul>
                    <li>
                      <img src={infoIcon1} alt="" style={{maxWidth: '52px'}} />
                      <h4>450 m2<br /><span>Total Flat Space</span></h4>
                    </li>
                    <li>
                      <img src={infoIcon2} alt="" style={{maxWidth: '52px'}} />
                      <h4>Contract<br /><span>Contract Ready</span></h4>
                    </li>
                    <li>
                      <img src={infoIcon3} alt="" style={{maxWidth: '52px'}} />
                      <h4>Payment<br /><span>Payment Process</span></h4>
                    </li>
                    <li>
                      <img src={infoIcon4} alt="" style={{maxWidth: '52px'}} />
                      <h4>Safety<br /><span>24/7 Under Control</span></h4>
                    </li>
                  </ul>
                </div>
  )
}

export default InfoTable
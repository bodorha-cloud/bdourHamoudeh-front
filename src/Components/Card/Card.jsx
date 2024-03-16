import React from 'react'

const Card = ({photo , category, price , button , Bedrooms , Bathrooms , Area , Floor , Parking ,detail }) => {
 
  return (
      <div className="item">
        <a href="property-details.html"><img src={photo} alt="" /></a>
        <span className="category">{category}</span>
        <h6>{price}</h6>
        <h4><a href="property-details.html">{detail}</a></h4>
        <ul>
          <li>Bedrooms: <span>{Bedrooms}</span></li>
          <li>Bathrooms: <span>{Bathrooms}</span></li>
          <li>Area: <span>{Area}</span></li>
          <li>Floor: <span>{Floor}</span></li>
          <li>Parking: <span>{Parking}</span></li>
        </ul>
        <div className="main-button">
          <a href="property-details.html">{button}</a>
        </div>
      </div>
  )
}

export default Card

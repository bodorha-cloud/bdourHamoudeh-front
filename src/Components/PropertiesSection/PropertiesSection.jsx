import React from 'react'
import './PropertiesSection.css'
import Card from '../Card/Card'
const PropertiesSection = () => {
  const cardData = [
    {
      photo: "assets/images/property-01.jpg",
      category: "Luxury Villa",
      price: "$2.264.000",
      button: "Schedule a visit",
      bedrooms: 8,
      bathrooms: 8,
      area: "545m2",
      floor: 3,
      parking: "6 spots",
      detail: "18 Old Street Miami, OR 97219",
      typeOf :"adv",
      classy:"col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6"
    },
    {
      photo: "assets/images/property-02.jpg",
      category: "Luxury Villa",
      price: "$1.180.000",
      button: "Schedule a visit",
      bedrooms: 6,
      bathrooms: 5,
      area: "450m2",
      floor: 3,
      parking: "8 spots",
      detail: "54 New Street Florida, OR 27001",
      typeOf :"str",
      classy:"col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6"
    },
    {
      photo: "assets/images/property-03.jpg",
      category: "Luxury Villa",
      price: "$1.460.000",
      button: "Schedule a visit",
      bedrooms: 5,
      bathrooms: 4,
      area: "225m2",
      floor: 3,
      parking: "10 spots",
      detail: "26 Mid Street Portland, OR 38540",
      typeOf :"rac",
      classy:"col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6"
    },
    {
      photo: "assets/images/property-04.jpg",
      category: "Apartment",
      price: "$584.500",
      button: "Schedule a visit",
      bedrooms: 4,
      bathrooms: 3,
      area: "125m2",
      floor: "25th",
      parking: "2 cars",
      detail: "12 Hope Street Portland, OR 12650",
      typeOf :"str",
      classy:"col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6"
    },
    {
      photo: "assets/images/property-05.jpg",
      category: "Penthouse",
      price: "$925.600",
      button: "Schedule a visit",
      bedrooms: 4,
      bathrooms: 4,
      area: "180m2",
      floor: "38th",
      parking: "2 cars",
      detail: "34 Hope Street Portland, OR 42680",
      typeOf :"str",
      classy:"col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6",
      
    },
    {
      photo: "assets/images/property-06.jpg",
      category: "Modern Condo",
      price: "$450.000",
      button: "Schedule a visit",
      bedrooms: 3,
      bathrooms: 2,
      area: "165m2",
      floor: "26th",
      parking: "3 cars",
      detail: "22 Hope Street Portland, OR 16540",
      typeOf :"adv",
      classy:"col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6"
    }]
  return (
    <div className="properties section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 offset-lg-4">
                  <div className="section-heading text-center">
                    <h6>| Properties</h6>
                    <h2>We Provide The Best Property You Like</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                {cardData.map((element ,index)=>{return(
               <div key={index} className="col-lg-4 col-md-6"><Card  photo={element.photo} category={element.category} price={element.price}
               button={element.button} Bedrooms={element.bedrooms} Bathrooms={element.bathrooms} Area={element.area}
               Floor={element.floor} Parking={element.parking} detail={element.detail} /></div>
               )})}
              </div>
            </div>
          </div>
  )
}

export default PropertiesSection
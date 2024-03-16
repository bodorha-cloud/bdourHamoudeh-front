import React, { useState } from 'react';
import Card from '../Card/Card';
import './AllPropertiesSection.css';

const AllPropertiesSection = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

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
    },
    {
      photo: "assets/images/property-03.jpg",
      category: "Luxury Villa",
      price: "$980.000",
      button: "Schedule a visit",
      bedrooms: 8,
      bathrooms: 8,
      area: "550m2",
      floor: 3,
      parking: "12 spots",
      detail: "14 Mid Street Miami, OR 36450",
      typeOf :"str",
      classy:"col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6"
    },
    {
      photo: "assets/images/property-02.jpg",
      category: "Luxury Villa",
      price: "$1.520.000",
      button: "Schedule a visit",
      bedrooms: 12,
      bathrooms: 15,
      area: "380m2",
      floor: 3,
      parking: "14 spots",
      detail: "26 Old Street Miami, OR 12870",
      typeOf :"adv",
      classy:"col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6"
    },
    {
      photo: "assets/images/property-01.jpg",
      category: "Luxury Villa",
      price: "$3.145.000",
      button: "Schedule a visit",
      bedrooms: 10,
      bathrooms: 12,
      area: "860m2",
      floor: 3,
      parking: "10 spots",
      detail: "34 New Street Miami, OR 24650",
      typeOf :"adv",
      classy:"col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6"
    }
  ];

  return (
    <div className="section properties">
      <div className="container">
        <ul className="properties-filter">
          <li>
            <a
              className={activeFilter === '*' ? 'is_active' : ''}
              href="#!"
              onClick={() => handleFilterClick('*')}
              data-filter="*"
            >
              Show All
            </a>
          </li>
          <li>
            <a
              className={activeFilter === '.adv' ? 'is_active' : ''}
              href="#!"
              onClick={() => handleFilterClick('.adv')}
              data-filter=".adv"
            >
              Apartment
            </a>
          </li>
          <li>
            <a
              className={activeFilter === '.str' ? 'is_active' : ''}
              href="#!"
              onClick={() => handleFilterClick('.str')}
              data-filter=".str"
            >
              Villa House
            </a>
          </li>
          <li>
            <a
              className={activeFilter === '.rac' ? 'is_active' : ''}
              href="#!"
              onClick={() => handleFilterClick('.rac')}
              data-filter=".rac"
            >
              Penthouse
            </a>
          </li>
        </ul>
        <div className="row properties-box">
          {cardData.map((element, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 ${element.typeOf}
              `}
              data-filter={element.typeOf}
            >
              <Card
                photo={element.photo}
                category={element.category}
                price={element.price}
                button={element.button}
                Bedrooms={element.bedrooms}
                Bathrooms={element.bathrooms}
                Area={element.area}
                Floor={element.floor}
                Parking={element.parking}
                detail={element.detail}
              />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="pagination">
              <li><a href="#">1</a></li>
              <li><a className="is_active" href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">&gt;&gt;</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPropertiesSection;
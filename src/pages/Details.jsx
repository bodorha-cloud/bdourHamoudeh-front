import React from 'react'
import SubBanner from '../Components/SubBanner/SubBanner';
import SingleProperty from '../Components/SingleProperty/SingleProperty';
import BestDeal from '../Components/BestDeal/BestDeal';

const Details = () => {
  const title = "Home";
  const section = "Single Property";
  return (
    <div>
        <SubBanner title={title} section={section}/>
        <SingleProperty />
        <BestDeal />
      </div>
  )
}

export default Details
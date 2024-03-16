import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import SubBanner from '../Components/SubBanner/SubBanner'
import Card from '../Components/Card/Card'
import AllPropertiesSection from '../Components/AllPropertiesSection/AllPropertiesSection'
const About = () => {
  const title = "Home";
  const section = "Properties";
  return (
    <div>
          <SubBanner title={title} section={section}/>
          <AllPropertiesSection />
        </div>
  )
}

export default About
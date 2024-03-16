import React from 'react'
import { useNavigate } from "react-router-dom";
import MainBanner from '../Components/MainBanner/MainBanner';
import Featured from '../Components/Featured/Featured';
import Videoo from '../Components/Videoo/Videoo';
import VideoContent from '../Components/VideoContent/VideoContent';
import FunFact from '../Components/FunFact/FunFact';
import BestDeal from '../Components/BestDeal/BestDeal';
import PropertiesSection from '../Components/PropertiesSection/PropertiesSection';
import ContactSection from '../Components/ContactSection/ContactSection';
import ContactContent from '../Components/ContactContent/ContactContent';

const Home = () => {
    const navigate = useNavigate();
    const GoToAbout =()=>{
        navigate('/about')
    }
  return (
       <div>
          <MainBanner />
          <Featured />
          <Videoo />
          <VideoContent />
          <FunFact />
          <BestDeal />
          <PropertiesSection />
          <ContactSection />
          <ContactContent />
    </div>
  )
}

export default Home
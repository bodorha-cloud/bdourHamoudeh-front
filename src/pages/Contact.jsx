import React from 'react'
import SubBanner from '../Components/SubBanner/SubBanner';
import ContactPage from '../Components/ContactPage/ContactPage';
const Contact = () => {
  const title = "Home";
  const section = "Contact Us";
  return (
          <div>
            <SubBanner title={title} section={section}/>
            <ContactPage />
          </div>
        );
      }
   
export default Contact
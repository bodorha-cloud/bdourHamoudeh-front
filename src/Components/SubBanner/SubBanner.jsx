import React from 'react'
import './SubBanner.css'
const SubBanner =({photo , title , section , visible , children , button}) => {
    return (
      <div className="page-heading header-text">
      <div className="container">
        <div className="row">s
          <div className="col-lg-12">
            <span className="breadcrumb"><a href="#">{title}</a> / {section}</span>
            <h3>{section}</h3>
          </div>
        </div>
      </div>
    </div>
    )
  }

export default SubBanner
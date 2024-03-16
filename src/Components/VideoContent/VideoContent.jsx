import React from 'react'
import './VideoContent.css'
const VideoContent = () => {
  return (
    <div className="video-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="video-frame">
                    <img src="assets/images/video-frame.jpg" alt="" />
                    <a href="https://youtube.com" target="_blank"><i className="fa fa-play" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default VideoContent
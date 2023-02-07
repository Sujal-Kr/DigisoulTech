import React, { Component } from 'react'
import video from './video banner.mp4'
export default class VideoBanner extends Component {
  render() {
    return (
      <div>
        <div className='video-cont' style={{height:"80vh"}}>
        <video  controls={false} autoPlay={true}  loop={true}style={{height:"100%",width:"100%"}}>
        <source src={video} type="video/mp4" />
        </video>
        </div>
      </div>
    )
  }
}

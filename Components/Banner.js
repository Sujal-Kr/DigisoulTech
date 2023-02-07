import React, { Component } from 'react'
import logo from './banner.svg'
export default class Banner extends Component {
  render() {
    return (
      <div className='banner-cont' style={{padding:" 2rem"}}>
        <div className="text-area" >
            <h4 className='line-1 anim-typewriter'>Welcome to <span style={{color:"#7e22ce"}}>DigiSoul Tech</span></h4>
            <h1><span style={{color:"white",backgroundColor:"black",padding:" 0.2rem 0.6rem"}}>Empower</span> Your business with all the latest technology</h1>
            <p style={{color:"#6b7280"}}>We have a dedicated team with Angular , TypeScript , VueJs as well as CMS for Ecommerce and business Website like Wordpress,Magento and Drupal etc.</p>
            <div className="btn-cont">
                <button className='btn-contact'>
                <span>Contact us</span>
                <i class="fa-solid fa-angle-right mx-2"></i>
                </button>
                <button className='btn-service '>
                    <span>Our Services</span>
                    <i class="fa-solid fa-angle-right mx-2"></i>
                </button>
            </div>
        </div>
        <div className="wall-cont">
            <img src={logo} alt="" className='banner-image'/>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-cont " style={{padding:"0.5rem"}}>
        <div className="logo-cont">
            <i class="fa-brands fa-google" style={{fontSize:"3rem"}}></i>
        </div>
        <div className="nav-list " style={{color:"#6b7280"}}>
            <div className="item"><Link to="/">Home</Link></div>
            <div className="item"><Link to="/about">About Us</Link></div>
            <div className="item"><Link to="/">Services</Link></div>
            <div className="item"><Link to="/team">Team</Link></div>
            <div className="item"><Link to="/career">Career</Link></div>
            <div className="item"><Link to="/blog">Blog</Link></div>
            <div className="item"><Link to="/contact">Contact Us</Link></div>
        </div>
        < div className="mode-cont">
            <i class="fa-solid fa-lightbulb" style={{fontSize:"2.4rem"}}></i> 
            <span>Change Mode</span>
        </div>
        <div className="ham-cont">
        <i class="fa-regular fa-square-caret-down" style={{fontSize:"2rem"}}></i>
        </div>
      </div>
    )
  }
}

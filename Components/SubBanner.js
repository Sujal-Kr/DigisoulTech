import React, { Component } from 'react'

export default class SubBanner extends Component {
  render() {

    //   let url="https://img.freepik.com/free-vector/flat-geometric-background_23-2148945954.jpg?w=1060&t=st=1674928596~exp=1674929196~hmac=73bbad402af8c5b4a60837287dca8caaeed888c414d9f70a7c388a4fae9a0885"
    return (
      <div style={{
        backgroundColor:"#ee5253",
        margin:"3rem 0",
        padding:"2rem ",
        color:"white"
        }}>
        <div className='container' style={{padding:"4rem"}}>
            <h1 style={{color:"#222f3e"}}>Grow Your Business With Technology.</h1>
            <p style={{lineHeight:"28px",letterSpacing:"2px"}}>We are commited to deliver quality driven world class software solutions at affordable price with art of various technolgy. We provide wide range of products and services deep domain expertise close knit associated with leading technologies,the origin of comapny is deeply rooted in the web and software development technology.</p>
            <div>
                <button className='btn btn-dark'>
                    <span>Email</span>
                    <i class=" mx-2 fa-solid fa-share"></i>
                </button>
                <button className='btn btn-light mx-3'>Call +91 9835940608</button>
            </div>
            
        </div>
      </div>
    )
  }
}

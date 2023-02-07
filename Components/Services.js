import React, { Component } from 'react'

export default class Services extends Component {
  render() {
    return (
      <div  className='' style={{padding:"2rem",margin:"2rem"}}>
        <h1 style={{ fontWeight:"500",color:"#7e22ce",textTransform:"uppercase"}}>Services We <span> Provide</span></h1>
        <h5 style={{borderBottom:"3px solid #d1d5db",display:"inline-block",padding:"0.5rem",marginBottom:"3rem"}}>What We Can Do For You</h5>
        <div className="grid-wrapper">
          <div className="item ">
            <div className="ft-icon-cont" >
            <i className="fa-solid fa-people-group" style={{color:"#c8d6e5"}}></i>
            </div>
            <div className="desc" >
              <h4 style={{fontWeight:"600",color:"#636e72"}}>KPO</h4>
              <p style={{color:"#64748b"}}>We also provide a process to complete your challenge through our expert team on basis of hours / number.</p>
            </div>
            <div className="go-icon">
            <i className="fa-solid fa-arrow-right" ></i>
            </div>
          </div>
          <div className="item ">
            <div className="ft-icon-cont" >
            <i className="fa-solid fa-magnifying-glass-chart" style={{color:"#fdcb6e"}}></i>
            </div>
            <div className="desc" >
              <h4 style={{fontWeight:"600",color:"#636e72"}}>SEO and SMO</h4>
              <p style={{color:"#64748b"}}>We provide lots of idea to increasing the quantity and quality of traffic to your website through organic search.</p>
            </div>
            <div className="go-icon">
            <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="item ">
            <div className="ft-icon-cont">
            <i className="fa-solid fa-server" style={{color:"#30336b"}}></i>
            </div>
            <div className="desc" >
              <h4 style={{fontWeight:"600" ,color:"#636e72"}}>Web Hosting</h4>
              <p style={{color:"#64748b"}}>Host your Web application with us in a cheapest rate.</p>
            </div>
            <div className="go-icon">
            <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="item ">
            <div className="ft-icon-cont" >
            <i className="fa-solid fa-mobile" style={{color:"#686de0"}}></i> 
            </div>
            <div className="desc" >
              <h4 style={{fontWeight:"600",color:"#636e72"}}>App Development</h4>
              <p style={{color:"#64748b"}}>We have a expert team in App Development.</p>
              
            </div>
            <div className="go-icon">
            <i className="fa-solid fa-arrow-right" ></i>
            </div>
          </div>
        </div>
        <div  style={{display:"flex",justifyContent:"center"}}>
        <button className='btn btn-outline-dark' style={{margin:" 2rem 0"}}>
          <span>Learn More</span>
          <i className="fa-solid fa-angle-down mx-2"></i>
          </button>
        </div>
      </div>
    )
  }
}

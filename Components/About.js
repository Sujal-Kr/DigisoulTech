import React, { Component } from 'react'
import Form from './Form'
export default class About extends Component {
  render() {
    // About.defaultProps.heading={
    //   heading:"This is a heading",
    //   subheading:"This is a subheading"
    // }
    return (
      <div>
        <div  className='container about-us-cont'style={{
          display: "flex",
          justifyContent: "center",
        }}>
          <div className="pic-left " style={{backgroundColor:"red"}}>
            <img style={{objectFit:"cover"}}src="https://img.freepik.com/free-vector/flat-design-web-developers_23-2148817994.jpg?w=740&t=st=1674982450~exp=1674983050~hmac=574e9d12a8fb90dbdb3f460e177fecb9d212904b00a754b653444553b66d8399" alt="" />
          </div>
          <div className="content-right" >
            <h2>Welcome to</h2>
            <h1 style={{padding:"0.4rem",backgroundColor:"black",display:"inline-block",color:"white"}}>DigiSoulTech</h1>
            <p style={{lineHeight:"27px",letterSpacing:"2px", textAlign:"justify" ,color:"#6b7280"}}>Refresh Infratech is the fastest reputed and rapidly growing software
              IT company in Ranchi. we have a team of highly skilled talented and dedicated designers and developers have experience to complete the projects within the specific deadline. Being a leader software company
              we believe in providing quality service towards the clients in field of
              software we are in the top and fully committed for our services to the clients.
              we provide best quality products we are leaders in web solutions interactive products demos IT consulting services software development and digital marketing.
            </p>
            <div className="ft-cont" style={{display:"flex"}}>
              <div>
              <i className="fa-solid fa-award my-2" style={{fontSize:"3rem",color:"#1abc9c"}}></i>
              <h4>Quality Service</h4>
              <p style={{color:"#6b7280"}}>we  provide best quality services in web and software solutions at best price to the clients.</p>
              </div> 
              <div>
                <i  style={{fontSize:"3rem",color:"red"}}className=' my-2 fa-solid fa-headset'></i>
                <h4>Good Support</h4>
                <p style={{color:"#6b7280"}}>we provide good support in maintenance and development to clients  in complete IT solutions.</p>
              </div>
            </div>
          </div>
        </div>
        <Form/>
      </div>
    )
  }
}

import React, { Component } from 'react'

// import logo from './about.jpg'
export default class Who extends Component {
  render() {
    return (

      <div className='about' style={{padding:"2rem",margin:"2rem 0"}}>
        <div className="about-left" >
            <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=1060&t=st=1674833693~exp=1674834293~hmac=32e4271b130dc51652932843d02fd3e6cb87d03c700d81cfa2d7673428fd92df" alt="" style={{hieght:"100%",width:"100%"}}/>
        </div>
        <div className="content">
            <h2>Heading</h2>
            <h4>Sub Heading</h4>
            <p style={{color:"#64748b"}}>
            Refresh Infratech established in Lalpur, Ranchi the heart of city is a hub of various companies and educational institution . we are committed to deliver quality driven world class software solutions at affordable price with art of various technology. we provide range of products and services deep domain expertise close knit associated with leading technologies, the origin of company is deeply rooted in the software development technology. Refresh Infratech provides designing and developing software solutions for a wide range of commercial and scientific applications.
            </p>
            <button type="button" class="btn btn-outline-dark">
                <span>Explore</span>
                <i className=" mx-2 fa-solid fa-arrow-right"></i>
            </button>
            
        </div>
        
      </div>
     

    )
  }
}

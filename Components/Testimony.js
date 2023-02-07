import React, { Component } from 'react'

export default class Testimony extends Component {
  render() {
    return (
      <div style={{padding:" 0 3rem"}}>
        <h1  style={{fontWeight:"700",color:"#7e22ce"}}>TESTIMONIALS</h1>
        <h5 style={{borderBottom:"3px solid #d1d5db",display:"inline-block",padding:"0.5rem"}}>What Clients Say About Us?</h5>
        <div className='container grid my-3'>
        <div className="card" >
            <div className="profile">
                <img src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=1060&t=st=1674748971~exp=1674749571~hmac=24e82fbcb5e6863641c929c84b3d6e48c716ca7918b964e41df67f23e0d4d9f7" alt="" />
            </div>
            <h3 style={{color:"#76daff"}}>Abhinav Jha</h3>
            <h6 style={{color:"#666b7a  "}}>CEO (RS TECHNO)</h6>
            <div className="quotes-cont">
            <i class="fa-solid fa-quote-left"></i>
            </div>  
            <p style={{color:"aaaebc"}}>
                DigiSoul Tech is Great.I just designed new website and it is so simple .I am blown away.You guys are truly master .Thanks for being so awesome.
            </p>
            
        </div>
        <div className="card" >
            <div className="profile">
                <img src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=1060&t=st=1674717553~exp=1674718153~hmac=8369708f4287c8d1b804e89a9939d13d92ecaa4008bad2c60381e35ce2042ec9" alt="" />
            </div>

            <h3 style={{color:"#76daff",}}>Clark Mei</h3>
            <h6 style={{color:"#666b7a "}}>Graphic Designer</h6>
            <div className="quotes-cont">
            <i class="fa-solid fa-quote-left"></i>
            </div>  
            <p style={{color:"aaaebc",}}>
                <img src="" alt="" />
                Wow,I just updated my site and it was so simple . I am blown away.Thanks for being so awesome.High Fives!
            </p>
            
        </div>
        <div className="card" >
            <div className="profile">
                <img src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?w=1060&t=st=1674748860~exp=1674749460~hmac=2791aa9ea9e0dd655e573fca5ed2012df2a263baa3ea0850437fe162a4abd13b" alt="" />
            </div>
            <h3 style={{color:"#76daff"}}>Mr Santosh</h3>
            <h6 style={{color:"#666b7a  "}}>CEO (SS SERVICES)</h6>
            <div className="quotes-cont">
            <i class="fa-solid fa-quote-left"></i>
            </div>  
            <p style={{color:"aaaebc"}}>
                DigiSoul Tech was great!They helped to imporve my business through Website,SEO and social media stuff. They
            </p>
        </div>

      </div>
      <div className="more my-5">
      <button className='btn btn-outline-dark'>
        <span>About US</span>
        <i className=" mx-2 fa-solid fa-angle-right"></i>
      </button>
      </div>
      </div>
    )
  }
}

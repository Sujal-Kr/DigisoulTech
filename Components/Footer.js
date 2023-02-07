import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer style={{backgroundColor:"#e2e8F0"}}>
        <div className="foot-cont">
            <div className="info-section">
                <h3>Let's Keep in touch</h3>
                <p>Find us on any of these platforms, we respond 1-2 business days.</p>
                <div className="social-cont">
                <i className="fa-brands fa-square-facebook social-icon"></i>
                <i className="fa-brands fa-instagram social-icon mx-2"></i>
                <i className="fa-brands fa-square-twitter social-icon "></i>
                </div>
            </div>
            <div className="links-cont" style={{margin:"1rem",padding:"0.7rem"}}>
                <h6>USEFUL LINKS</h6>
                <span>About us | </span>
                <span>Blog | </span>
                <span>Team | </span>
                <span>Career | </span>
                <span>Contact us</span>
                
            </div>
            <div className="contact-cont" style={{margin:"1rem",padding:"0.7rem"}}>
                <h6>CONTACT INFORMATION</h6>
                <div className='my-1'>
                <i class="fa-solid fa-phone"></i>
                <span className='mx-2'>+91 7903668268</span>
                </div>
                <div>
                <i class="fa-solid fa-signs-post"></i>
                <span className='mx-2'>Pantaloons, 4th Floor 412, Ranchi</span>
                </div>
                <div className='my-1'>
                <i class="fa-solid fa-at"></i>
                <span className='mx-2'>info@refreshinfratech.com</span>
                </div>
                <div className='my-1'>
                <i class="fa-regular fa-clock"></i>
                <span className='mx-2'>Mon - Fri : 11.00 am - 7.00 pm</span>
                </div>
            </div>
        </div>
        <hr />
        <div className="sub-footer">
            <span>Copyright© 2020 DigiSoulTech</span>
        </div>
      </footer>
    )
  }
}

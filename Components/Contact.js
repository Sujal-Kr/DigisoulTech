import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <div>
            <div className='container my-5'>
                <div>
                    <h2>Get In Touch</h2>
                    <h4>We accept challenge with passion</h4>
                </div>
                <div className='contact-list'>
                    <div className="list">
                    <i class="fa-solid fa-earth-asia"></i>
                    <h3>Address</h3>
                    <h6>Pantaloons, 4th Floor 412, Ranchi</h6>
                    </div>
                    <div className="list">
                    <i class="fa-solid fa-tty"></i>
                    <h3>Phone</h3>
                    <h6>+91 9835940608(O)(W)</h6>
                    <h6>+91 9835940608</h6>
                    <h6>91 9835940608</h6>
                    </div>
                    <div className="list">
                    <i class="fa-regular fa-hourglass-half"></i>
                    <h3>Address</h3>
                    <h6>Mon - Fri : 9:30am - 5:30pm</h6>
                    <h6>Saturday : 9:00am - 2:00pm </h6>
                    <h6>Sunday : Closed</h6>
                    </div>
                    <div className="list">
                    <i class="fa-solid fa-envelope-open-text"></i>
                    <h3>Email</h3>
                    <h6>info@refreshinfratech.com</h6>
                    </div>
                </div>
                <div className="feedback-cont">
                    <div className="client-info-cont">
                        <form action="">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div class="input-group mb-3">
                            <input type="mail" class="form-control" placeholder="example@gmail.com" aria-label="email" aria-describedby="basic-addon1"/>
                        </div>
                        <div class="input-group">
                        {/* <span class="input-group-text">With textarea</span> */}
                        <textarea class="form-control" aria-label="With textarea" placeholder='Enter your message' style={{minHeight:"10rem"}}></textarea>
                        </div>
                        </form>
                    </div>
                    <div className="map-cont">
                    <iframe  title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.8548464853748!2d85.31661143684376!3d23.378025656446475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e16b7297e3ed%3A0x8d55ac13574e3fcc!2sREFRESH%20INFRATECH%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1675097518461!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

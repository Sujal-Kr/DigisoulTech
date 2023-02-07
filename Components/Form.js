import React, { Component } from 'react'

export default class Form extends Component {
   
  render() {
    return (
        <div>
            <div className="container my-5 form-card-cont" id="form-fill-up">
                
                <div className="image-cont">
                    <div className="card-heading">
                        <h3>Get Started</h3>
                        <h5>Join Us and Become one of Us</h5>
                    </div>
                </div>
                <div className="form-cont">
                    <div className="input">
                        <input  calssName='input-field'type="text" id="ename" />
                        <label className='input-label' htmlFor="ename">Full Name</label>
                    </div>
                    <div className="input my-3 ">
                        <input  calssName='input-field'type="mail" id="f-mail" />
                        <label className='input-label' htmlFor="f-mail">Email</label>
                    </div>
                    <div className="input my-3 ">
                        <input  calssName='input-field' type="number" id="phoneno"/>
                        <label className='input-label' htmlFor="phoneno" >Phone Number</label>
                    </div>
                    <div className="input my-3">
                    <input type="text" id="address"/>
                        <label className='input-label' htmlFor="address">Address</label>
                    </div>
                    <div className="options-cont my-3 d-flex">
                        <div>
                        <label htmlFor="role">Apply for</label>
                        <select name="" id="role" className='mx-3'>
                            <option value="">Internship</option>
                            <option value="">Remote Job</option>
                            <option value="">Onsite Job</option>
                        </select>
                        </div>
                        <div>
                        <label htmlFor="role">Select Role</label>
                        <select name="" id="role" className='mx-3'>
                            <option value="">Marketing Executive</option>
                            <option value="">Frontend Developer</option>
                            <option value="">Senior.Net Developer</option>
                        </select>
                        </div>
                        
                    </div>
                    <div className='file-uploader my-3'>
                        <label htmlFor="file" calssName="file-label">Upload Your Resume </label>

                        <input type="file" name="" id="file"/>
                    </div>
                    <div className="submit-cont ">
                        <button type="Submit" className="btn btn-secondary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

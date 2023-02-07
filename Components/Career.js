import React, { Component } from 'react'
import Form from './Form'
export default class Career extends Component {
  handleform=()=>{

  }
  render() {
    return (
      <div>
      <div>
        <div className='container my-5'>
              <h1> Career Opportunities</h1>
              <h4>What we can do for you</h4>
              <hr/>
           </div>
           
           {/* <aside className="aside col-3" >
              <h5>Current Openings</h5>
              <ul>
                <li>Marketing Executive</li>
                <li>Front-End Developer</li>
                <li>.Net Web Developer</li>

              </ul>
           </aside> */}
            <div className='container '>
                <h3>Overview</h3>
              <div className="overview">
                <p>Refresh Infratech is the fastest reputed and rapidly growing software
                  IT company in Ranchi. we have a team of highly skilled talented and dedicated designers and developers have experience to complete the projects within the specific deadline. Being a leader software company
                  we believe in providing quality service towards the clients in field of
                  software we are in the top and fully committed for our services to the clients.
                </p>
                <p>
                Refresh Infratech is looking for talented and enthusiastic team members. If you have the passion for challenge, technology and creativity in the web and software world then come join us.
                </p>
                <p><a href="#form-fill-up" style={{textDecoration:"none"}}><strong className='form-link' >Apply for job or Internship</strong></a></p>
                  <h6>Current Openings</h6>
                <ul className='career-list'>
                  <li>Marketing Executive</li>
                  <li>UI / Front-End Developer</li>
                  <li>Senior .Net Web Developer</li>
                </ul>
              </div>
              <h3 className='my-3'>Marketing Executive</h3>
              <div className="first">
                <h6>Position : 20</h6>
                <h6>Job Descrtiption</h6>
                <p>The candidate should have the minimum 2-7 Years of Marketing Executive Experience in the IT Industry. Comprehensive knowledge of</p>
                <ul className='career-list'>
                  <li>
                  Good understanding of market research techniques, data analysis and statistics methods
                  </li>
                  <li>
                  Thorough knowledge of strategic planning principles and marketing best practices
                  </li>
                  <li>
                  Proficient in MS Office and marketing software (e.g. CRM)
                  </li>
                  <li>
                  Familiarity with social media and web analytics (e.g. Web Trends)
                  </li>
                  <li>
                  Excellent communication and people skills
                  </li>
                  <li>
                  Strong organizational and time-management abilities
                  </li>
                  <li>
                  Creativity and commercial awareness
                  </li>
                  <li>
                  BSc/BA /MBA in marketing, business administration or relevant discipline
                  </li>
                </ul>
                <h6>Experience : 2-4 Years</h6>
                <h6>Location : Ranchi ( Lalpur )</h6>
                <h6>Contact :hr@refreshinfratech.com</h6>
              </div>
              <h3 className='my-3'>UI / Front-End Developer</h3>
              <div className='second'>
                <h6>Position : 5</h6>
                <h6>Job Description </h6>
                
                  <ul className="career-list">
                    <li>1 +year’s experience with front end / UI development</li>
                    <li>Expertise in responsive design and implementation</li>
                    <li>Notable skill-set with JavaScript UI frameworks such as Angular.JS,React.Js,Vue.js,Node.js (Any 1 Strong experience)</li>
                    <li>High degree of proficiency with HTML5, CSS3, JavaScript and Bootstrap.</li>
                    <li>Good Craft optimized CSS with LESS or SASS</li>
                    <li>Experience shipping and maintaining SaaS, browser-based applications</li>
                    <li>Experience integrating with REST APIs</li>
                    <li>The ability to deliver value on small teams</li>
                    <li>Proven attention to detail</li>
                    <li>Familiarity with front-end development tools such as npm, grunt, browserify.</li>
                    <li>Passion for shipping high quality, clean, tested code with an aim to delight users.</li>
                    <li>A passion for building pixel perfect applications to delight our UX designers.</li>
                    <li>Strong Communication Skills and Independent to work with creativity ideas</li>
                  </ul>
                  <h6>Shift Timing : 9:00 AM-7PM</h6>
                  <h6>Full-Time : Permanent Position</h6>
                  <h6>Joining Period : Imm-15 Days</h6>
                  <h6>Only : Male/Female Candidates Apply</h6>
                  <h6>Experience : 1-5 years</h6>
                  <h6>Location : Ranchi(Lalpur)</h6>
                  <h6>Contact : hr@refreshinfratech.com</h6>
              </div>
              <h3 className='my-3'>Senior .Net Web Developer</h3>
              <div className='third'>
                <h6>Position : 1</h6>
                <h6>Job Description</h6>
                <ul className='career-list'>
                  <li>Must have Practical Hands on Experience in C#, ASP.Net.</li>
                  <li>Should have experienced in ASP.NET and Web API.</li>
                  <li>Strong Knowledge on Advanced SQL concept ,Database and written SQL Queries, Triggers, Stored Procedures.</li>
                  <li>Must have good experience in Entity Framework and working exp in SQL-Server 2014.</li>
                  <li>Good to have MVC Experience and knowledge in Azure Technology.</li>
                  <li>Preferred Domain Exp for Projects in Finance and Banking Areas.</li>
                </ul>
                <h6>Shift Timing : Normal Shifts</h6>
                <h6>Full-Time : Permanent Position</h6>
                <h6>Joining Period : Imm-15 Days</h6>
                <h6>Only -Male Candidates Apply</h6>
                <h6>Experience : 2-6 years</h6>
                <h6>Location : Ranchi(Lalpur)</h6>
                <h6>Contact : hr@refreshinfratech.com</h6>
              </div>
            </div>
      </div>
      <Form/>
      </div>
    )
  }
}

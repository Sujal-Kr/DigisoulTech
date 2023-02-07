import React, { Component } from 'react'

export default class Steps extends Component {
  render() {
    return (

        <div style={{padding:"2rem"}}>
          <h1 className="my-3" style={{textAlign:"left"}}>Our Working Process</h1>
            <div className="timeline"> 
              <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                <div className="timeline__event__icon ">
                <i class="fa-solid fa-handshake"></i>

                </div>
                <div className="timeline__event__date">
                  Round 1
                </div>
                <div className="timeline__event__content ">
                  <div className="timeline__event__title">
                    Requirements
                  </div>
                  <div className="timeline__event__description">
                    <p>Start development after a approval of final design and scope</p>
                  </div>
                </div>
              </div>
              <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                <div className="timeline__event__icon">
                <i class="fa-solid fa-code"></i>

                </div>
                <div className="timeline__event__date">
                  Round 2
                </div>
                <div className="timeline__event__content">
                  <div className="timeline__event__title">
                    Design
                  </div>
                  <div className="timeline__event__description">
                    <p>Start development after a approval of final design and scope</p>
                  </div>
                </div>
              </div>
              <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                <div className="timeline__event__icon">
                <i class="fa-brands fa-connectdevelop"></i>

                </div>
                <div className="timeline__event__date">
                  Round 3
                </div>
                <div className="timeline__event__content">
                  <div className="timeline__event__title">
                    Development
                  </div>
                  <div className="timeline__event__description">
                    <p>We take care of all the require steps need to business growth at the time development</p>
                  </div>

                </div>
              </div>
              <div className="timeline__event animated fadeInUp timeline__event--type1">
                <div className="timeline__event__icon">
                <i class="fa-regular fa-file-code"></i>

                </div>
                <div className="timeline__event__date">
                  Round 4
                </div>
                <div className="timeline__event__content">
                  <div className="timeline__event__title">
                    Testing & Live
                  </div>
                  <div className="timeline__event__description">
                    <p>Perform unit testing, system testing  UAT and live the site. Provide a training  to client.</p>
                  </div>
                </div>
              </div>

            </div>
        </div>
    )
  }
}

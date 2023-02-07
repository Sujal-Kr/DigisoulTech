import React, { Component } from 'react'

export default class Poster extends Component {
  render() {
    return (
      <div>
        <header>
        <div className="overlay">
      <h1>{this.props.heading}</h1>
      <h3>{this.props.subheading}</h3>
        <br/>
        <button className='exp-btn'>Explore</button>
          </div>
      </header>

      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    return (
      <div style={{color:"black",textAlign:"right",padding:"0.6rem 0.1rem",borderBottom:"1px solid #e5e7eb"}}>
        <span className="text mx-1" style={{fontSize:"0.8rem"}}> Pantaloons, 4th Floor 412, Ranchi</span>
        <span className="text mx-1"style={{fontSize:"0.8rem"}}> +91 9835940608</span>
        <span className="text mx-1"style={{fontSize:"0.8rem"}}>HR@REFRESHINFRATECH.COM</span>
      </div>
    )
  }
}

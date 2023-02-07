import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Nav extends Component {
  render() {
    return (
      <div >
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{display:"sticky",top:"0",left:"0"}}>
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/about">About Us</Link>
        <Link class="nav-link" to="/feature">Features</Link>
        <Link class="nav-link" to="/pricing">Pricing</Link>
        <Link class="nav-link " to="/gallery">Gallery</Link>
      </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

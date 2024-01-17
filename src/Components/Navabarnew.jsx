import React from 'react'
import DeblurIcon from '@mui/icons-material/Deblur';
import { Link } from 'react-router-dom';
function Navabar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid ">
      <a class="navbar-brand  text-blue fw-bold fs-1" href="#"><DeblurIcon/>Jobpal</a>
      <button class="navbar-toggler  text-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
      <div class="collapse navbar-collapse text-lg-end" id="navbarNavAltMarkup">
        <div class="navbar-nav gap-1">
          <a class="nav-link " aria-current="page" href="/">Home</a>
          <Link to="/Signupdivder"><button type="button" class="btn btn-custom-outline-blue">Signup</button></Link>
          <Link to="/login"><button type="button" class="btn btn-custom-outline-blue">Login</button></Link>
        </div>
      </div>
      <div>
       
      </div>
  </nav>
  )
}

export default Navabar
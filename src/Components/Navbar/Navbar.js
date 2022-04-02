import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <>
       
  <header id="header" class="header fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="/" class="logo d-flex align-items-center">
    
       <h6 className='ggu-logo'><span>GGU </span>TNP</h6> 
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="/">Home</a></li>
          <li class="dropdown"><a href="#"><span>GGU</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/graduating-batch">Graduating Batch</a></li>
              <li><a href="#">Departments</a></li>
              <li><a href="#">Media Report</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Student</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Student login</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Placement policy</a></li>
              <li><a href="#">Internship policy</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Recruiter</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">why recruit</a></li>
              <li><a href="#">E-Brouchre</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Job Announcement Form</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Team</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">admin login</a></li>
              <li><a href="#">Student Team</a></li>
              <li><a href="#">Gallery</a></li>
              
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="/">Downloads</a></li>
          <li><a class="nav-link scrollto" href="/about">About</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </>
  )
}

export default Navbar
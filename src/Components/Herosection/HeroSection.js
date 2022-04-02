import React from 'react'
import './HeroSection.css'
function HeroSection() {
  return (
    <>
        <section id="hero" className="hero d-flex align-items-center">

<div className="container">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center">
      <h1>	
      School of Studies in Engineering & Technology GGU
</h1>
      <h2 >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo venenatis pellentesque. Etiam quis nisl ac nibh porttitor rutrum nec eget erat. Curabitur accumsan leo et bulum. Donec tincidunt nunc id auctor placerat. Sed efficitur magna id tortor commodo lacinia.</h2>
      <div>
        <div className="text-center text-lg-start">
          <a href="/about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
            <span>Know More-</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="footer-social-icon hero-section-icon">
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
    </div>
    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
    <img src="/Images/ghasidas.jpeg" className="img-fluid" alt="GGU TNP"/>
    </div>
  </div>
</div>

</section>
    </>
  )
}

export default HeroSection
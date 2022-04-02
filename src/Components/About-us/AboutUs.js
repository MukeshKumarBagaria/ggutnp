import React from 'react'
import InfoWideget from '../Info/InfoWideget'
import Navbar from '../Navbar/Navbar'
import './AboutUs.css'
function AboutUs() {
  return (
    <>
    <Navbar/>
    <section className="contact-page-sec">
    <div className='container-fluid'> 
    <div className='row'>
      <div className='col-md-4'>
      <InfoWideget 
      title="Address"
       imgUrl="https://embed.lottiefiles.com/animation/12587"
         line1="lorem ipsum dollar , "
         line2="Koni Bilaspur 495009"
       />
      </div>
      <div className='col-md-4'>
      <InfoWideget 
      title="E-Mail" 
      imgUrl="https://embed.lottiefiles.com/animation/72126"
      line1="info@lorem.com"
         line2="lorem@gmail.com"
      />
      </div>
      <div className='col-md-4'>
      <InfoWideget
       title="Office Time" 
       imgUrl="https://embed.lottiefiles.com/animation/60071"
       line1="Mon - Thu 10:00 am - 6.00 pm "
         line2="Thu - Mon 10.00 am - 6.00 pm"
       />
      </div>
    </div>
     </div>
     </section>
    <section className='about-us-section'>

    <div class="about-container">
      <div class="aboutus-title">
      <h1>About Us</h1>
      </div>
      <div class="our-mission">
        <img class="quote-icon" src="/Images/quote-icon.png" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sagittis ex, eget lacinia magna.</p>
      </div>
      <div class="about-description">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sagittis ex, eget lacinia magna.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sagittis ex, eget lacinia magna. Quisque mattis dapibus molestie. Phasellus ut ultricies risus. Vestibulum lacinia diam ac turpis ornare, et aliquet eros mollis. 
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>
        Donec euismod elit auctor lectus lobortis mattis. Etiam vehicula sollicitudin velit eu auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum dictum sapien a ipsum tempus, eu congue ipsum molestie. 
        </p>
       
        
        <p>
       <strong> Our Mission</strong>
        </p>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        </p>
        <p>
       <strong> Vision</strong>
        </p>
        <p>
        Nam ut commodo dui, vel elementum arcu. Phasellus elementum sit amet ex sit amet feugiat. Ut vestibulum nibh ut placerat volutpat. In molestie laoreet arcu, eget imperdiet odio cursus sit amet.
        </p>
        <p>
       <strong>Core Values</strong>
        </p>
        <p>
        Nam ut commodo dui, vel elementum arcu. Phasellus elementum sit amet ex sit amet feugiat. Ut vestibulum nibh ut placerat volutpat. In molestie laoreet arcu, eget imperdiet odio cursus sit amet.
        </p>
      </div>

     


      
    </div>

    </section>


  
    
    </>
  )
}

export default AboutUs
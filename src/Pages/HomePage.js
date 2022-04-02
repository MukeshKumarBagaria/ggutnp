import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HeroSection from '../Components/Herosection/HeroSection'
import Vision from '../Components/VisionMission/Vision'
import Partner from '../Components/Partner/Partner'
import Alumni from '../Components/AlumniSection/Alumni'
import Placement from '../Components/PlacementRecord/Placement'
import Testimonial from '../Components/Testimonial/Testimonial'
import Divider from '../Components/Divider/Divider'
import Footer from '../Components/Footer/Footer'
function HomePage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Vision/>
    <Partner/>
    <Alumni/>
    <Placement/>
    <Testimonial/>
    <Divider/>
    <Footer/>
    <Divider/>
    </>
  )
}

export default HomePage
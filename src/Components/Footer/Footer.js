import React,{useEffect,useState} from 'react'
import './Footer.css'
import axios from 'axios'
import WeatherCard from '../Weather/WeatherCard';
function Footer() {
    const baseURL = "https://api.openweathermap.org/data/2.5/weather?lat=22.131090897896573&lon=82.13631400370537&appid=b06cfb60ad2b834918d18e62d6080934&units=metric";
    const [post, setPost] = useState(null);
   const [temp,setTemp]=useState('30');
   const [description,setDescription]=useState('cloud');
   useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
          setTemp(post.main.temp);
          setDescription(post.weather[0].main);
        });
      }, [post]);
    
   
    
  return (
    <>
    
        <footer className="footer-section">
        <div className="container">
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src="Images/logo.png" className="img-fluid" alt="logo"/></a>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                      
                           
                           <WeatherCard temp={temp} description={description}/>
        
                       
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved GGU TNP</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                              
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
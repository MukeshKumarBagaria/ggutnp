import React,{useState,useEffect,useCallback} from 'react'
import './Testimonial.css'
import testimonials from './TestimonialData'
function Testimonial() {

   
    const firstreview= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sagittis ex, eget lacinia magna. Quisque mattis dapibus molestie. Phasellus ut ultricies risus. Vestibulum lacinia diam ac turpis ornare, et aliquet eros mollis"
    const firstname="Neelam Enterprises"
    const [newName, setnewName] = useState(firstreview);
    const [client,setClient]=useState(firstname)

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * testimonials.length);
        setnewName(testimonials[index].text);
        setClient(testimonials[index].name)
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 10000);
        return () => clearInterval(intervalID);
    }, [shuffle])
  return (
    <>
    <div className="testimonials-container">
	<div className="progress-bar"></div>
	<div className="fa fa-quote-right fa-quote"></div>
	<div className="fa fa-quote-left fa-quote"></div>
	<p className="testimonial">{newName}</p>
	<div className="centered-items">
		{/* <img class="logo" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6" alt="logo" /> */}
		<div className="user-details">
			<h4 className="username">~ {client} ~</h4>
		</div>
	</div>
</div>

    </>
  )
}

export default Testimonial
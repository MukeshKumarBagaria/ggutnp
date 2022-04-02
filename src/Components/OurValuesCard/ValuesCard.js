import React from 'react'
import './ValuesCard.css'
function ValuesCard(props) {
  return (

       <div class="section_our_solution">
      <div class="our_solution_category">
        <div class="solution_cards_box">
          <div class="solution_card">
            <div class="hover_color_bubble"></div>
            <div class="so_top_icon">
<img src={props.iconUrl} alt={props.alt}/>
            </div>
            <div class="solu_title">
              <h3>{props.title}</h3>
            </div>
            <div class="solu_description">
              <p>
{props.valueDescription}              </p>
              <button type="button" class="read_more_btn">Read More</button>
            </div>
          </div> 
          </div> 
          </div> 
          
          </div>
          
    
  )
}

export default ValuesCard
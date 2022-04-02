import React from 'react';
import './Partner.css'
function PartnerCard(props) {
  return <>
      <div class="partner-slide">
      <img id={props.id} src={props.imgURL} class="slide-image" alt={props.altText}/>
    </div>
  </>;
}

export default PartnerCard;

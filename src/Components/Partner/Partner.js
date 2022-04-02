import React from 'react';
import './Partner.css'
import PartnerCard from './PartnerCard';
import PartnerData from './PartnerData';
function Partner() {
  
function createCard(card){
  return (
<PartnerCard
id={card.id}
  imgURL={card.imgURL}
  altText={card.altText}
/>
  )

}

  return <>
  <div class="container">
<div class="row">
<div class="col partner-heading">
<h1 className='page-section-title'>Past Recruiters</h1>
</div>
<div class="col partner-slider-col">
<div class="slider">
  <div class="slider-wrap">
  {PartnerData.map(createCard)}

  </div>
</div>
</div>
</div>   
</div>
  </>;
}

export default Partner;

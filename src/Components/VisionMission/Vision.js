import React from 'react'
import Card from '../OurValuesCard/ValuesCard'
import valueData from '../OurValuesCard/ValuesCardData'
function Vision() {
  return (
    <>
<section id="values" className="values">

<div className="container" >
<h1 className='text-center page-section-title'>Our Values</h1>
  <div className="row">
    <div className="col-lg-4">
      <Card 
      title={valueData[0].title} 
      iconUrl={valueData[0].iconUrl}
      valueDescription={valueData[0].valueDescription}
        />
    </div>

    <div className="col-lg-4 mt-4 mt-lg-0">
    <Card 
      title={valueData[1].title} 
      iconUrl={valueData[1].iconUrl}
      valueDescription={valueData[1].valueDescription}
        />
    </div>

    <div className="col-lg-4 mt-4 mt-lg-0" >
    <Card 
      title={valueData[2].title} 
      iconUrl={valueData[2].iconUrl}
      valueDescription={valueData[2].valueDescription}
        />
    </div>

  </div>

</div>

</section>
    </>
  )
}

export default Vision
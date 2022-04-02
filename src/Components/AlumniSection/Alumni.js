import React from 'react'
import AlumniCard from './AlumniCard'

function Alumni() {
  return (
    <>
       <div className='container'>
            <div className='row'>
            <h1 className='text-center page-section-title'>Our Alumnis</h1>
                <div className='col-lg-3'>
                  <AlumniCard/>  
                </div>
                <div className='col-lg-3'>
                  <AlumniCard/>  
                </div>
                <div className='col-lg-3'>
                  <AlumniCard/>  
                </div>
                <div className='col-lg-3'> <h6 className='text-center'>and many more!</h6></div>
            </div>
        </div>
    </>
  )
}

export default Alumni
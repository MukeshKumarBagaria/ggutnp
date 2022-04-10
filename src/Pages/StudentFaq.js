import React from 'react'
import Faq from '../Components/FAQ SECTION/Faq'
import PageTitle from '../Components/PageTitle/PageTitle'
import FaqData from '../Components/FAQ SECTION/FaqData'

function createFaq(query){
    return <Faq
      question={query.question}
      answer={query.answer}
    />
}
function StudentFaq() {
  return (
    <>
        <div className='container'>
        <PageTitle/>
            <div className='row'>
                <div className='col-6'>
              {FaqData.map(createFaq)}
                </div>
            </div>
        </div>
    </>
  )
}

export default StudentFaq
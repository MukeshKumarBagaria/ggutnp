import React from 'react'
import './dashboard-wrapper.scss'

const DashboardWrapper = props => {
    return (
        <div className='dashboard-wrapper'>
            {props.children}
        </div>
    )
}


 const DashboardWrapperMain = props => {
    return (
        <div className='dashboard-wrapper__main'>
            {props.children}
        </div>
    )
}

export {DashboardWrapper,DashboardWrapperMain};


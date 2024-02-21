import React from 'react'
import DashNav from './DashNav'
import Topbar from './Topbar'
import useDashHook from './CustomHooks/DashHook'
import './Dash-css/Dashboard.css'
import Profile from './Profile'



const Dashboard = () => {
const {hideTopBar}= useDashHook();

  return (
    <div className='dashboard-section'>
      <DashNav/>
   {/* {
    !hideTopBar &&
    // <Topbar className='top-bar'/>
   } */}


    </div>
  )
}

export default Dashboard
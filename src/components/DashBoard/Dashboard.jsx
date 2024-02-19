import React from 'react'
import DashNav from './DashNav'
import Topbar from './Topbar'
import useDashHook from './CustomHooks/DashHook'
import './Dash-css/Dashboard.css'
import Profile from './Profile'
import CreateList from './CreateList'


const Dashboard = () => {
const {hideTopBar}= useDashHook();

  return (
    <div className='dashboard-section'>
      <DashNav/>
   {
    !hideTopBar &&
    <Topbar className='top-bar'/>
   }
{/* <Profile/> */}
<CreateList/>
    </div>
  )
}

export default Dashboard
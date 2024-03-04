import React from 'react'
import DashNav from './DashNav'
import Topbar from './Topbar'
import useDashHook from './CustomHooks/DashHook'
import Yourlist from './Yourlist'
import Profile from './Profile'

import './Dash-css/Dashboard.css'
import CreateList from './CreateList'

const Dashboard = () => {
  const { hideTopBar } = useDashHook();

  return (
    <div className='dashboard-section'>
      <DashNav />
      {
        !hideTopBar &&
        <Topbar className='top-bar' />
      }
      {/* <Profile /> */}
      <CreateList />
      <Yourlist />
    </div>
  )
}

export default Dashboard;
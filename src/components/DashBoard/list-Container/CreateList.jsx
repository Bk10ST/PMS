import React from 'react'
import DashBoard from '../Dashboard'
import '../Dash-css/CreateList.css'
import ListOptions from './ListOptions'
const CreateList = () => {
  return (
    <div>
      <DashBoard/>
      <div className="list-container">
        <ListOptions/>
      </div>
    </div>
  )
}

export default CreateList
import React, { Component } from 'react'
import CardTask from '../components/CardTask'
import Sidebar from '../components/Sidebar'
import TodayDate from '../components/TodayDate'
import {Calendar} from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../asset/css/CreateEvent.css'
import { CreateIcon } from '../asset/image/Index'
import Form from 'react-bootstrap/Form';
import CardForm from '../components/CardForm'



 class CreateEvent extends Component {
   render() {
    return (
      <div className='listEvent'>
        <Sidebar />
        <div style={{paddingLeft:80}}>
          <p className="list-p">Morning Aldy Anugrasdah!</p>
          <div className="cont-date">
        <div style={{width:"65px", height:'65px', backgroundColor:'#192049', borderRadius:50, justifyContent:'center', alignItems:'center', display:'flex'}}>
          <img src={CreateIcon} className="img-date" />
        </div>
        <text style={{fontWeight:'bold', color:"#192049", fontSize:20, marginLeft: 30, marginTop:15}}>Create New Event</text>
      </div>
         <div style={{display:'flex',  width:'50%', height:'40%', borderRadius:20, justifyContent:'center', alignItems:'center', marginTop:30}}>
          <Calendar style={{borderRadius:20}} />
         </div>
        </div>
        <div className="createEvent-continer3">
         <CardForm/>
        </div>
      </div>
    )
  }
}
export default CreateEvent

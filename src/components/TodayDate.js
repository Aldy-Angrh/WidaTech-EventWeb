import React, { Component } from 'react'
import '../asset/css/ListEvent.css'
import { EventCalIcon } from '../asset/image/Index'

export class TodayDate extends Component {
  render() {
    return (
        <div className="cont-date">
        <div>
          <img src={EventCalIcon} className="img-date" />
        </div>
        <div className="container-today">
          <text>Today</text>
          <text className="text-value">Monday 23 August</text>
        </div>
        <div className="container-time">
          <text>Now</text>
          <text className="text-value">11:26 PM</text>
        </div>
      </div>
    )
  }
}

export default TodayDate
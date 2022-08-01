import React, { Component } from "react";
import "../asset/css/ListEvent.css";
import TodayDate from "../components/TodayDate";
import CardTask from "../components/CardTask";
import Sidebar from "../components/Sidebar";


export default class ListEvent extends Component {
  render() {
    return (
      <div className="listEvent">
        <Sidebar />
        <div className="listEvent-continer2">
          <p className="list-p">Morning NICK!</p>
         <TodayDate />
         <p className="list-p">Your Task</p>
         <CardTask />
        </div>
        {/* <div className="listEvent-continer3">
          <h1>asdasdasdasdasd</h1>
        </div> */}
      </div>
    );
  }
}

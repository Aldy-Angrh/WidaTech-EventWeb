import React, { Component } from "react";
import "../asset/css/ListEvent.css";
import TodayDate from "../components/TodayDate";
import CardTask from "../components/CardTask";
import Sidebar from "../components/Sidebar";
import CardYour from "../components/CardYour";

export default class ListEvent extends Component {
  render() {
    return (
      <div className="listEvent">
        <Sidebar />
        <div className="listEvent-continer2">
          <p className="list-nickname">Morning Aldy Anugrah!</p>
          <TodayDate />
          <p className="list-p">Upcoming Event</p>
          <CardTask />
          <p className="list-p">Your Task</p>
          <CardYour />
        </div>
      </div>
    );
  }
}

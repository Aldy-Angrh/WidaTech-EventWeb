import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../asset/css/CreateEvent.css";
import { CreateIcon } from "../asset/image/Index";
import CardForm from "../components/CardForm";

class CreateEvent extends Component {
  render() {
    return (
      <div className="listEvent">
        <Sidebar />
        <div style={{ paddingLeft: 80 }}>
          <p className="list-nickname">Morning Aldy Anugrah!</p>
          <div className="cont-date">
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#192049",
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img src={CreateIcon} className="img-create" />
            </div>
            <text
              style={{
                fontWeight: "bold",
                color: "#192049",
                fontSize: '20px',
                marginLeft: 30,
                marginTop: 15,
                textDecoration:'underline'
              }}
            >
              Create New Event
            </text>
          </div>
          <div
            style={{
              display: "flex",
              width: "70%",
              height: "50%",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Calendar />
          </div>
        </div>
        <div className="createEvent-continer3">
          <CardForm />
        </div>
      </div>
    );
  }
}
export default CreateEvent;

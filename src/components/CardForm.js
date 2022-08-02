import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import { Button } from "./Button";
import "../asset/css/CreateEvent.css";
import { bindActionCreators } from "redux";
import { CreateEvent } from "../action/EventAction";
import { connect, useDispatch, useSelector } from "react-redux";
import { createEvent } from "../action/postSlice";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

function CardForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const HandleCrate = () => {
    Swal.fire({
      title: "Do you want to create the event?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "create",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(createEvent(formik.values));
        console.log("ISI PROPS ", props);
        Swal.fire("Saved!", "", "success").then(() => history.push("/"));
      } else if (result.isDenied) {
        Swal.fire("Event are not created", "", "info");
      }
    });
  };
  const formik = useFormik({
    initialValues: {
      event_name: "",
      date: "",
      start_time: "",
      end_time: "",
      desc: "",
    },
    validationSchema: Yup.object({
      event_name: Yup.string().required("Required!"),
      date: Yup.string().required("Required!"),
      start_time: Yup.string().required("Required!"),
      end_time: Yup.string().required("Required!"),
      desc: Yup.string().required("Required!"),
    }),
  });

  return (
    <div className="card-form">
      <form onSubmit={formik.handleSubmit}>
        <div className="card-form-container">
          <label className="label-form">Event Name</label>
          <Form.Control
            type="text"
            name="event_name"
            style={{
              borderTopColor: "#FFF",
              borderRightColor: "#FFF",
              borderLeftColor: "#FFF",
              borderWidth: 2,
              width: "80%",
            }}
            value={formik.values.event_name}
            onChange={formik.handleChange}
          />
          {formik.errors.event_name && formik.touched.event_name && (
            <p>{formik.errors.event_name}</p>
          )}
        </div>
        <div className="card-form-container">
          <label className="label-form">Date</label>
          <Form.Control
            type="date"
            name="date"
            style={{
              borderTopColor: "#FFF",
              borderRightColor: "#FFF",
              borderLeftColor: "#FFF",
              borderWidth: 2,
              width: "80%",
            }}
            value={formik.values.date}
            onChange={formik.handleChange}
          />
          {formik.errors.date && formik.touched.date && (
            <p>{formik.errors.date}</p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div className="card-form-container">
            <label className="label-form">Start Time</label>
            <Form.Control
              type="time"
              name="start_time"
              value={formik.values.start_time}
              onChange={formik.handleChange}
            />
            {formik.errors.start_time && formik.touched.start_time && (
              <p>{formik.errors.start_time}</p>
            )}
          </div>
          <div className="card-form-container">
            <label className="label-form">End Time</label>
            <Form.Control
              type="time"
              name="end_time"
              value={formik.values.end_time}
              onChange={formik.handleChange}
            />
            {formik.errors.end_time && formik.touched.end_time && (
              <p>{formik.errors.end_time}</p>
            )}
          </div>
        </div>
        <div className="card-form-container">
          <label className="label-form">Description</label>
          <Form.Control
            type="text"
            name="desc"
            style={{
              borderTopColor: "#FFF",
              borderRightColor: "#FFF",
              borderLeftColor: "#FFF",
              borderWidth: 2,
              width: "80%",
            }}
            value={formik.values.desc}
            onChange={formik.handleChange}
          />
          {formik.errors.desc && formik.touched.desc && (
            <p>{formik.errors.desc}</p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <Button
            type="submit"
            buttonStyle="btn--outline"
            onClick={() => HandleCrate()}
          >
            Create Event
          </Button>
          <Button buttonStyle="btn--outline" buttonColor="white">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      CreateEvent,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(CardForm);

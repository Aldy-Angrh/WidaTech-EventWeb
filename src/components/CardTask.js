import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { GdriveIcon, GmeetIcon } from "../asset/image/Index";

function CardTask() {
  const posts = useSelector((state) => state.posts.events);
  console.log("ISI STORE DI LIST EVENT ", posts);
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
      {posts.length !== 0 ? (
        posts.map((val) => {
          return (
            <Card className="list-card">
              <Card.Body
               className="list-card-body"
              >
                <div style={{ flexDirection: "row", display: "flex" }}>
                  <div className="container-cardtask">
                    <Form>
                      {["checkbox"].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check type={type} id={`default-${type}`} />
                        </div>
                      ))}
                    </Form>
                  </div>
                  <div className="container-cardtask">
                    <text className="list-text-event">{val.event_name}</text>
                    <text className="list-Link">{`${val.start_time} - ${val.end_time}`}</text>
                    <text className="list-Link">{val.desc}</text>
                  </div>
                </div>
                <div className="container-link">
                        <div className="container-linkGd">
                          <div>
                            <img src={GmeetIcon} className="img-task"/>
                          </div>
                          <div className="text-gmeet">Link To The Meeting</div>
                        </div>
                        <div className="container-linkGd">
                        <div>
                          <img src={GdriveIcon} className="img-task" />
                        </div>
                          <div>For Discussion</div>
                        </div>
                </div>
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <text>Data Kosong</text>
      )}
    </div>
  );
}

export default CardTask;

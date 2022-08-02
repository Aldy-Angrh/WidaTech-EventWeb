import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";

function CardYour() {
    const posts = useSelector((state) => state.posts.events);
    return (
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        {posts.length !== 0 ? (
          posts.map((val) => {
            return (
              <Card className="list-card">
                <Card.Body className="list-card-body">
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
                    <text className="list-Link" >{val.date}</text>
                      <text className="list-text-event">{val.event_name}</text>
                      <text className="list-Link">- Update UI- List Event</text>
                      <text className="list-Link">{val.desc}</text>
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

export default CardYour
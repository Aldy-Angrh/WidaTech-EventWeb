import React, { Component } from "react";
import { Background, bubbel1, bubbel2, Cal, CalIcon, FbIcon, IgIcon, TwitterIcon } from "../asset/image/Index";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Button } from "../components/Button";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Navbar />
        <motion.div
          style={{
            backgroundColor: "#98BDFE",
            height: "100vh",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            flexDirection: "row",
            display: "flex",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1, ease: "linear", delay: 0.5 },
          }}
        >
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              alignContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <img
              src={bubbel1}
              style={{ width: "90vh", height: "100vh", position: "absolute" }}
            />
            <img
              src={bubbel2}
              style={{ position: "absolute", width: "110vh", height: "100vh" }}
            />
            <div
              style={{
                backgroundColor: "transparent",
                width: "200vh",
                height: "30vh",
                position: "absolute",
              }}
            >
              <div
                style={{
                  height: "50vh",
                  width: "80vh",
                  backgroundColor: "transparent",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{
                    zIndex: 100,
                    color: "#000",
                    position: "absolute",
                    marginTop: 120,
                    marginLeft: 100,
                    fontSize: 70,
                    fontWeight: "bold",
                  }}
                >
                  Wida
                </h1>
                <h1
                  style={{
                    zIndex: 100,
                    color: "#000",
                    position: "absolute",
                    marginTop: 180,
                    marginLeft: 100,
                    fontSize: 70,
                    fontWeight: "bold",
                  }}
                >
                  Tech
                </h1>
                <h1
                  style={{
                    zIndex: 100,
                    color: "cyan",
                    position: "absolute",
                    marginTop: 270,
                    marginLeft: 100,
                    fontSize: 30,
                    fontWeight: "bold",
                  }}
                >
                  EVENT CARD
                </h1>
              </div>
              <div
                style={{
                  height: "40vh",
                  width: "80vh",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  paddingLeft:60
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    textAlign: "left",
                    // marginLeft: 100,
                    marginTop: 49,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes,
                </p>
                <Button buttonStyle="btn--outline">Learn More</Button>
                <div style={{display:'flex', flexDirection:'row', marginTop: 80}}>
                    <img src={IgIcon} style={{width:'50px', height:'50px', marginRight:30}}/>
                    <img src={TwitterIcon} style={{width:'50px', height:'50px', marginRight:29}}/>
                    <img src={FbIcon} style={{width:'50px', height:'50px'}}/>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "transparent", flex: 1 }}>
            <img
              src={CalIcon}
              style={{
                position: "absolute",
                alignSelf: "end ",
                alignItems: "center",
                marginTop: 140,
                marginLeft: -0,
              }}
            />
          </div>
        </motion.div>
      </>
    );
  }
}

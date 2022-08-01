import React from 'react'
import { Link } from 'react-router-dom'
import { CreateIcon, EventListIcon, HomeIcon } from '../asset/image/Index'

function Sidebar() {
  return (
    <div className="listEvent-continer1">
          <h2>Wida Tech</h2>
          <ul style={{ listStyleType: "none", marginLeft: -30, marginTop:20 }}>
            <li className="listEvent-li">
              <Link to="/" className="list-Link">
                <img src={HomeIcon} className="list-img" /> Home
              </Link>
            </li>
            <li className="listEvent-li">
              <Link to="/add" className="list-Link">
                <img src={CreateIcon} className="list-img" /> Create Event
              </Link>
            </li>
            <li>
              <Link to="/list" className="list-Link">
                <img src={EventListIcon} className="list-img" /> List Event
              </Link>
            </li>
          </ul>
        </div>
  )
}

export default Sidebar
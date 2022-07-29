import React from 'react'
import {  Route, Switch, useLocation} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import ListEvent from '../pages/ListEvent'

import {AnimatePresence} from 'framer-motion'
import CreateEvent from '../pages/CreateEvent'

function AnimationRoute() {
    const location = useLocation()
  return (
    <AnimatePresence>
    <Switch location={location} key={location.pathname}>
    <Route path="/" component={Dashboard} exact/>
    <Route path="/add" component={CreateEvent} exact/>
    <Route path="/list" component={ListEvent} exact />
  </Switch>
  </AnimatePresence>
  )
}

export default AnimationRoute
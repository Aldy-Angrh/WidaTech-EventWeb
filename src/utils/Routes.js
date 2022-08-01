import React from 'react'
import {  Route, Switch, useLocation} from 'react-router-dom'

import {AnimatePresence} from 'framer-motion'
import Dashboard from '../pages/Dashboard'
import CreateEvent from '../pages/CreateEvent'
import ListEvent from '../pages/ListEvent'

function Routes() {
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

export default Routes
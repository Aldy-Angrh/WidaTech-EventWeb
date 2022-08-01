import './App.css';
import {BrowserRouter as Router, Route, } from 'react-router-dom'

import Routes from './utils/Routes';
import { Provider } from 'react-redux';
import store from './reducer/Store';
import {AnimationRoute} from './components/AnimationRoute'
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';
import ListEvent from './pages/ListEvent';

function App() {
  return (


     <Router>
     <Routes /> 

     </Router>
  );
 
}

export default App;

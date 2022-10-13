import './App.css'
<<<<<<< HEAD
import { Route } from 'react-router-dom'

import Choose from './components/choose/Choose'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Dashboard from './components/dashboard/Dashboard'

function App () {
  return (
    <div className='App'>
      <h1>Template App</h1>
=======
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Error404 from './components/Error404/Error404.jsx'

function App () {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='*' component={Error404} />
      </Switch>
>>>>>>> 882e42964d0b162ea37bbec4bd52fe83797076f8
    </div>
  )
}

export default App

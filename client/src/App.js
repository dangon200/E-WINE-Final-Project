import './App.css'
import FormCreatePubli from './components/FormCreatePubli/FormCreatePubli.jsx'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Error404 from './components/Error404/Error404.jsx'
import About from './components/About/About.jsx'
import Nav from './components/Nav/Nav'

function App () {
  return (
    <div className='App'>
      <Route path='/' component={Nav} />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/about' component={About} />
        <Route path='/createPubli' exact component={FormCreatePubli} />
        <Route path='*' component={Error404} />
      </Switch>
    </div>
  )
}

export default App

import './App.css'
import FormCreatePubli from './components/FormCreatePubli/FormCreatePubli.jsx'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Error404 from './components/Error404/Error404.jsx'

function App () {
  return (
    <div className='App'>
      <Route path='/form' exact component={FormCreatePubli} />
      <Route exact path='/' component={LandingPage} />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='*' component={Error404} />
      </Switch>
    </div>
  )
}

export default App

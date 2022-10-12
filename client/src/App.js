import './App.css'
import { Route } from 'react-router-dom'
import FormCreatePubli from './components/FormCreatePubli/FormCreatePubli.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'

function App () {
  return (
    <div className='App'>
      <Route path='/form' exact component={FormCreatePubli} />
      <Route exact path='/' component={LandingPage} />
    </div>
  )
}

export default App

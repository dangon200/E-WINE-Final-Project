import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={LandingPage} />
      </div>
    </BrowserRouter>
  )
}

export default App

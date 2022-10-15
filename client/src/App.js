import './App.css'
import FormCreatePubli from './components/FormCreatePubli/FormCreatePubli.jsx'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Error404 from './components/Error404/Error404.jsx'
import About from './components/About/About.jsx'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home.jsx'
import PublicationDetail from './components/PublicationDetail/PublicationDetail'
import { useEffect } from 'react'
import { addCarrito } from '../src/store/actions/actions'
import { useDispatch } from 'react-redux'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    for (let x = 0; x < window.localStorage.length; x++) {
      dispatch(addCarrito(window.localStorage.key(x)))
    }
  })

  return (
    <div className='App'>
      <Route exact path='/' component={Nav} />
      <Route path='/home' component={Nav} />
      <Route path='/about' component={Nav} />
      <Route path='/createpubli' component={Nav} />
      <Route path='/publication/:id' component={Nav} />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/publication/:id' component={PublicationDetail} />
        <Route path='/createpubli' exact component={FormCreatePubli} />
        <Route path='*' component={Error404} />
      </Switch>
    </div>
  )
}

export default App

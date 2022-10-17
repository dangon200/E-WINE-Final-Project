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
import Footer from './components/Footer/Footer'
import Carrito from './components/Carrito/Carrito'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    for (let x = 0; x < window.localStorage.length; x++) {
      dispatch(addCarrito({ id: window.localStorage.key(x), count: parseInt(window.localStorage.getItem(window.localStorage.key(x))) }))
    }
  })

  return (
    <div className='App'>
      <Route exact path={['/', '/home', '/about', '/createPublication', '/publication/:id', '/carrito']} component={Nav} />

      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/publication/:id' component={PublicationDetail} />
        <Route path='/createPublication' exact component={FormCreatePubli} />
        <Route path='/carrito' component={Carrito} />
        <Route path='*' component={Error404} />
      </Switch>
      <Route exact path={['/', '/about', '/createPublication', '/publication/:id', '/carrito']} component={Footer} />
    </div>
  )
}

export default App

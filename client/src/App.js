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
import { addCarrito, loginUser, getFavorites } from '../src/store/actions/actions'
import { useDispatch } from 'react-redux'
import Footer from './components/Footer/Footer'
import Carrito from './components/Carrito/Carrito'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import UserFavorites from './components/UserFavorites/UserFavorites.jsx'
import FormEditUser from './components/FormEditUser/FormEditUser'
import UserProfile from './components/UserProfile/UserProfile'
import AdminDashboard from './components/AdminDashboard/AdminDashboard'
import CardStripe from './components/CardStripe/CardStripe'
import PurchasedProducts from './components/PurchasedProducts/PurchasedProducts'
import LogInit from './components/LoginInit/LoginInit'
import Messenger from './components/messenger/Messenger'

import Cookies from 'universal-cookie'

function App () {
  const cookies = new Cookies()
  const token = cookies.get('TOKEN')
  const dispatch = useDispatch()

  useEffect(() => {
    for (let x = 0; x < window.localStorage.length; x++) {
      const id = window.localStorage.key(x)
      dispatch(addCarrito({
        id,
        price: parseFloat(JSON.parse(window.localStorage.getItem(id)).price),
        title: JSON.parse(window.localStorage.getItem(id)).title,
        image: JSON.parse(window.localStorage.getItem(id)).image,
        name: JSON.parse(window.localStorage.getItem(id)).name,
        count: JSON.parse(window.localStorage.getItem(id)).count,
        stock: JSON.parse(window.localStorage.getItem(id)).stock
      }))
    }
    if (token) {
      dispatch(loginUser(token.user))
      dispatch(getFavorites(token.user.id))
    }
  })

  return (
    <div className='App'>
      <Route exact path={['/', '/home', '/about', '/createPublication', '/publication/:id', '/carrito', '/payment', '/register']} component={Nav} />

      <Switch>
        <Route exact path='/register' component={LogInit} />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/publication/:id' component={PublicationDetail} />
        <Route path='/createPublication' exact component={FormCreatePubli} />
        <Route exact path='/admin' component={AdminDashboard} />
        <ProtectedRoutes path='/createpublication' exact component={FormCreatePubli} />
        <Route path='/carrito' component={Carrito} />
        <Route path='/user/favorites' component={UserFavorites} />
        <Route path='/formEditUser' component={FormEditUser} />
        <Route path='/userProfile' component={UserProfile} />
        <Route path='/userpurchased' component={PurchasedProducts} />
        <Route exact path={['/', '/about', '/createpublication', '/publication/:id', '/carrito']} component={Footer} />
        <Route exact path='/payment/:totalAmount' component={CardStripe} />
        <Route exact path='/messenger' component={Messenger} />
        <Route path='*' component={Error404} />
      </Switch>
      <Route exact path={['/', '/about', '/createPublication', '/publication/:id', '/carrito', '/payment', '/register']} component={Footer} />
    </div>
  )
}

export default App

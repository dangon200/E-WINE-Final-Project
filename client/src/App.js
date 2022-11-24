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
import { addCarrito, loginUser, getFavorites, getVarietals } from '../src/store/actions/actions'
import { useDispatch } from 'react-redux'
import Footer from './components/Footer/Footer'
import Carrito from './components/Carrito/Carrito'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import ProtectedRoutesAdmin from './components/ProtectedRoutesAdmin/ProtectedRoutesAdmin'
import ProtectedRoutesSommelier from './components/ProtectedRoutesSommelier/ProtectedRoutesSommelier'
import UserFavorites from './components/UserFavorites/UserFavorites.jsx'
import FormEditUser from './components/FormEditUser/FormEditUser'
import UserProfile from './components/UserProfile/UserProfile'
import AdminDashboard from './components/AdminDashboard/AdminDashboard'
import CardStripe from './components/CardStripe/CardStripe'
import PurchasedProducts from './components/PurchasedProducts/PurchasedProducts'
import LogInit from './components/LoginInit/LoginInit'
import Messenger from './components/messenger/Messenger'
import FormForgotPassword from './components/FormForgotPassword/FormForgotPassword'
import RecoverPassword from './components/RecoverPassword/RecoverPassword'
import UserSales from './components/UserSales/UserSales'
import SommelierReviews from './components/SommelierReviews/SommelierReviews'
// import ReviewBuy from '../ReviewBuy/ReviewBuy'

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
      dispatch(getVarietals())
      dispatch(getVarietals())
    }
  }, []) //eslint-disable-line

  return (

    <div className='App'>
      <Route exact path={['/', '/about', '/createPublication', '/publication/:id', '/carrito', '/payment', '/register', '/forgotPassword', '/recoverPassword']} component={Nav} />

      <Switch>
        <Route exact path='/register' component={LogInit} />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/publication/:id' component={PublicationDetail} />
        <ProtectedRoutesAdmin exact path='/admin' component={AdminDashboard} />
        <ProtectedRoutes path='/createPublication' exact component={FormCreatePubli} />
        <Route path='/carrito' component={Carrito} />
        <ProtectedRoutes path='/user/favorites' component={UserFavorites} />
        <ProtectedRoutes path='/formEditUser' component={FormEditUser} />
        <ProtectedRoutes path='/userProfile' component={UserProfile} />
        <ProtectedRoutes path='/userpurchased' component={PurchasedProducts} />
        <Route exact path={['/', '/about', '/createpublication', '/publication/:id', '/carrito']} component={Footer} />
        <ProtectedRoutes exact path='/payment' component={CardStripe} />
        <ProtectedRoutes exact path='/messenger' component={Messenger} />
        <ProtectedRoutes exact path='/forgotPassword' component={FormForgotPassword} />
        <ProtectedRoutes exact path='/recoverPassword' component={RecoverPassword} />
        <ProtectedRoutes exact path='/userSales' component={UserSales} />
        <ProtectedRoutesSommelier exact path='/sommelierReviews' component={SommelierReviews} />
        <Route path='*' component={Error404} />
      </Switch>
      <Route exact path={['/', '/about', '/publication/:id', '/carrito', '/payment', '/register']} component={Footer} />
    </div>

  )
}

export default App

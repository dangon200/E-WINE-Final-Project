import React, { useState } from 'react'
import {
  FaStore,
  FaBars,
  FaHeart,
  FaUser
} from 'react-icons/fa'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { GoGraph } from 'react-icons/go'
import { MdReviews } from 'react-icons/md'
// import { BiLogOut } from 'react-icons/bi'
import s from './Sidebar.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../utils/images/logo.png'
import { useSelector } from 'react-redux'

/* import { logoutUser } from '../../store/actions/actions'
import Cookies from 'universal-cookie' */

const Sidebar = () => {
  /* const cookies = new Cookies()
  const dispatch = useDispatch() */
  const user = useSelector(state => state.user)
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  /* const untoggle = () => setIsOpen(isOpen) */
  /* function removeCookies () {
    dispatch(logoutUser())
    cookies.remove('TOKEN')
  } */
  const menuItem = [
    {
      path: '/home',
      name: 'Tienda',
      icon: <FaStore color='#91091E' size={25} />
    },
    {
      path: '/user/favorites',
      name: 'Favoritos',
      icon: <FaHeart color='#91091E' size={25} />
    },
    {
      path: '/userPurchased',
      name: 'Mis compras',
      icon: <HiOutlineShoppingBag color='#91091E' size={25} />
    },
    {
      path: '/userSales',
      name: 'Mis ventas',
      icon: <GoGraph color='#91091E' size={25} />
    },
    {
      path: '/userProfile',
      name: 'Datos de usuario',
      icon: <FaUser color='#91091E' size={25} />
    }
    /* {
      path: '/userReviews',
      name: 'Reviews',
      icon: <MdReviews color='#91091E' size={25} />
    } */
  ]
  return (
    <div className='container-fluid'>
      <div style={{ width: isOpen ? '180px' : '30px' }}>
        <div className={`${(isOpen ? 'd-flex justify-content-start align-items-center' : 'none')}`}>
          <img src={logo} alt={logo} style={{ display: isOpen ? 'block' : 'none' }} className='m-auto w-50 h50' />
          <div className='d-flex justify-content-center pb-5'>
            <FaBars role='button' size={25} onClick={toggle} />
          </div>
        </div>
        {
                menuItem.map((item, index) => (
                  <NavLink
                    to={item.path} key={index}
                    className='text-decoration-none'
                  >
                    <div className={`${(isOpen ? 'd-flex justify-content-start align-items-center mt-5' : 'mt-5')}`}>
                      <div className={location.pathname === item.path ? s.navlinkActive : s.navlink}>{item.icon}</div>
                      <div style={{ display: isOpen ? 'block' : 'none' }} className='fs-4 fw-semibold text-dark ms-5'><span>{item.name}</span></div>
                    </div>
                  </NavLink>
                ))
        }
        {user.isSommelier
          ? <NavLink
              to='/sommelierReviews'
              className='text-decoration-none'
            >
            <div className={`${(isOpen ? 'd-flex justify-content-start align-items-center mt-5' : 'mt-5')}`}>
              <div className={location.pathname === '/sommelierReviews' ? s.navlinkActive : s.navlink}><MdReviews color='#91091E' size={25} /></div>
              <div style={{ display: isOpen ? 'block' : 'none' }} className='fs-4 fw-semibold text-dark ms-5'><span>Reseñas</span></div>
            </div>
                  </NavLink>// eslint-disable-line
          : null}
        {/* <div className='pt-5'><button className={s.logout}><MdReviews color='#91091E' size={25} /></button></div>
        <div style={{ display: isOpen ? 'block' : 'none' }} className='pt-5 fs-4 fw-semibold text-dark ms-5'>
          <span>Reviews</span>
        </div>  */}
      </div>
    </div>
  )
}

export default Sidebar

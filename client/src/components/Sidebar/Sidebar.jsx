import React, { useState } from 'react'
import {
  FaStore,
  FaBars,
  FaHeart,
  FaRegChartBar,
  FaCommentAlt,
  FaUser
} from 'react-icons/fa'
import { HiOutlineShoppingBag } from 'react-icons/hi'
/* import { MdDashboard } from 'react-icons/md' */
/* import s from './Sidebar.module.css' */
import { NavLink } from 'react-router-dom'
import logo from '../../utils/images/logo.png'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  /* const untoggle = () => setIsOpen(isOpen) */
  const menuItem = [
    {
      path: '/home',
      name: 'Tienda',
      icon: <FaStore color='#630606' size={25} />
    },
    {
      path: '/user/favorites',
      name: 'Favoritos',
      icon: <FaHeart color='#630606' size={25} />
    },
    {
      path: '/analytics',
      name: 'Estadisticas',
      icon: <FaRegChartBar color='#630606' size={25} />
    },
    {
      path: '/comment',
      name: 'Reseñas',
      icon: <FaCommentAlt color='#630606' size={25} />
    },
    {
      path: '/purchased',
      name: 'Mis compras',
      icon: <HiOutlineShoppingBag color='#630606' size={25} />
    },
    {
      path: '/userProfile',
      name: 'Datos de usuario',
      icon: <FaUser color='#630606' size={25} />
    }
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
                  <NavLink to={item.path} key={index} className='text-decoration-none'>
                    <div className={`${(isOpen ? 'd-flex justify-content-start align-items-center mt-5' : 'mt-5')}`}>
                      <div>{item.icon}</div>
                      <div style={{ display: isOpen ? 'block' : 'none' }} className='fs-4 fw-semibold text-dark ms-5'><span>{item.name}</span></div>
                    </div>
                  </NavLink>
                ))
        }
      </div>
    </div>
  )
}

export default Sidebar

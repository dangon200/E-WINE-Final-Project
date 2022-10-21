import React from 'react'
import s from './Sidebar.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory'
import ListAltIcon from '@mui/icons-material/ListAlt'
// import QueryStatsIcon from '@mui/icons-material/QueryStats'
// import NotificationsIcon from '@mui/icons-material/Notifications'
// import HelpIcon from '@mui/icons-material/Help'
// import PsychologyIcon from '@mui/icons-material/Psychology'
// import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

function Sidebar () {
  return (
    <div className='sidebar bg-dark m-0 min-vh-100 d-flex justify-content-center'>
      <div className='top'>
        <span className='logo'>E-wine</span>
      </div>
      <hr />
      <div className={s.center}>
        <ul className={s.ul}>
          <p className={s.title}>PRINCIPAL</p>
          <li className={s.li}>
            <DashboardIcon className={s.icon} />
            <span>Tablero</span>
          </li>
          <p className={s.title}>LISTA</p>
          <li className={s.li}>
            <PersonOutlineOutlinedIcon className={s.icon} />
            <span>Usuarios</span>
          </li>
          <li className={s.li}>
            <StoreMallDirectoryIcon className={s.icon} />
            <span>Productos</span>
          </li>
          <li className={s.li}>
            <ListAltIcon className={s.icon} />
            <span>Ordenes</span>
          </li>
          {/* <p className={s.title}>ÚTIL</p>
          <li className={s.li}>
            <QueryStatsIcon className={s.icon} />
            <span>Estadísticas</span>
          </li>
          <li className={s.li}>
            <NotificationsIcon className={s.icon} />
            <span>Notificaciones</span>
          </li> */}
          <p className={s.title}>PERFIL</p>
          <li className={s.li}>
            <LogoutIcon className={s.icon} />
            <span>LogOut</span>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar

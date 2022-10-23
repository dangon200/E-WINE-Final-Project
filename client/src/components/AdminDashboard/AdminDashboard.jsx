import React, { useState } from 'react'
import s from './AdminDashboard.module.css'
import Widgets from '../Widgets/Widgets.jsx'
import Featured from '../Featured/Featured.jsx'
import Chart from '../Chart/Chart.jsx'
import TableAdmin from '../TableAdmin/TableAdmin.jsx'
import List from '../List/List.jsx'
import ListPublications from '../ListPublicataions/ListPublications.jsx'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory'
import ListAltIcon from '@mui/icons-material/ListAlt'
import LogoutIcon from '@mui/icons-material/Logout'
import { Button } from '@mui/material'

function AdminDashboard () {
  const [render, setRender] = useState({
    Adminppal: true,
    usersRoute: false,
    publicationsRoute: false
  })
  return (
    <div className={`container-fluid ${s.div}`}>

      <div className={`row ${s.div2}`}>
        <div className='text-white col-2 d-flex flex-column align-items-center align-items-sm-start min-vh-100 h-100 d-inline-block height: 100px'>
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
                  <Button onClick={() => setRender({ Adminppal: true, usersRoute: false, publicationsRoute: false })}> <span>Tablero</span> </Button>
                </li>
                <p className={s.title}>LISTA</p>
                <li className={s.li}>
                  <PersonOutlineOutlinedIcon className={s.icon} />
                  <Button onClick={() => setRender({ Adminppal: false, usersRoute: true, publicationsRoute: false })}><span>Usuarios</span> </Button>
                </li>
                <li className={s.li}>
                  <StoreMallDirectoryIcon className={s.icon} />
                  <Button onClick={() => setRender({ Adminppal: false, usersRoute: false, publicationsRoute: true })}><span>Productos</span></Button>
                </li>
                <li className={s.li}>
                  <ListAltIcon className={s.icon} />
                  <span>Ordenes</span>
                </li>
                <p className={s.title}>PERFIL</p>
                <li className={s.li}>
                  <LogoutIcon className={s.icon} />
                  <span>LogOut</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${!render.Adminppal ? 'd-none' : 'd-flex d-inline-block'}`}>
          <div className=' text-dark col-10 d-flex justify-content-end gap-3 h-25 d-inline-block'>
            <Widgets type='user' />
            <Widgets type='order' />
            <Widgets type='earning' />
            <Widgets type='balance' />
          </div>
          <div className='text-dark d-flex justify-content-center gap-3 h-25 d-inline-block'>
            <Featured />
            <Chart />
          </div>
          <div className='ultimasCompras'>
            Ultimas Compras
          </div>
          <TableAdmin />
        </div>
      </div>
      <div className={`${render.usersRoute ? ' d-block' : 'd-none'}`}>
        <List />
      </div>
      <div className={`${render.publicationsRoute ? ' d-block' : 'd-none'}`}>
        <ListPublications />
      </div>

    </div>

  )
}

export default AdminDashboard

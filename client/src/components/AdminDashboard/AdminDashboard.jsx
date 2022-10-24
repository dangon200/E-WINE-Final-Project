import React, { useState, useEffect } from 'react'
import s from './AdminDashboard.module.css'
import Widgets from '../Widgets/Widgets.jsx'
import Featured from '../Featured/Featured.jsx'
import Chart from '../Chart/Chart.jsx'
import TableAdmin from '../TableAdmin/TableAdmin.jsx'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory'
import ListAltIcon from '@mui/icons-material/ListAlt'
import LogoutIcon from '@mui/icons-material/Logout'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getPublicationsAdm, getUsers, getProducts, getBuys } from '../../store/actions/actions'
import Datatable from '../Datatable/Datatable.jsx'
import DatatablePublications from '../DatatablePublications/DatatablePublications.jsx'

function AdminDashboard () {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const publications = useSelector(state => state.publicationsAdm)
  // const products = useSelector(state => state.allProducts)
  // const buys = useSelector(state => state.buys)
  const cantidadUsers = users.length

  useEffect(() => {
    dispatch(getPublicationsAdm())
    dispatch(getBuys())
    dispatch(getUsers())
    dispatch(getProducts())
  }, [])//eslint-disable-line

  const [render, setRender] = useState({
    Adminppal: true,
    usersRoute: false,
    publicationsRoute: false
  })

  return (
    <div className={`container-fluid px-0 ${s.div}`}>
      <div className={`row ${s.div2}`}>
        <div className='text-white col-2 '>
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
        {/* Container padre que tiene todo al lado del dashboard */}
        <div className='col-10 row'>
          <div className={`${!render.Adminppal ? 'd-none' : 'd-flex'} col-12 text-dark mt-4`}>
            <Widgets type='user' cantidadUsers={cantidadUsers} />
            <Widgets type='order' />
            <Widgets type='earning' />
            <Widgets type='balance' />
          </div>

          <div className={`${!render.Adminppal ? 'd-none' : 'd-block'} col-12 text-dark mt-4`}>
            <TableAdmin />
          </div>

          <div className={`col-12 ${render.publicationsRoute ? ' d-block' : 'd-none'}`}>
            <DatatablePublications publications={publications} />
          </div>

          <div className={`col-12 ${render.usersRoute ? ' d-block' : 'd-none'}`}>
            <Datatable users={users} />
          </div>

          <div className={`${!render.Adminppal ? 'col-12 col-xl-6' : 'col-12 col-xl-6'}`}>
            <Chart />
          </div>

          <div className={`${!render.Adminppal ? 'd-none' : 'col-6'}`}>
            <Featured />
          </div>

          {/* <div className='ultimasCompras'>
            Ultimas Compras
          </div> */}

        </div>
        {/* Fin Container padre que tiene todo al lado del dashboard */}

      </div>

    </div>

  )
}

export default AdminDashboard

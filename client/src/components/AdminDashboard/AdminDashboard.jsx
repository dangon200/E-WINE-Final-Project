import React, { useState, useEffect } from 'react'
import s from './AdminDashboard.module.css'
import Widgets from '../Widgets/Widgets.jsx'
// import Featured from '../Featured/Featured.jsx'
// import Chart from '../Chart/Chart.jsx'
// import TableAdmin from '../TableAdmin/TableAdmin.jsx'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory'
import ListAltIcon from '@mui/icons-material/ListAlt'
import LogoutIcon from '@mui/icons-material/Logout'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getPublicationsAdm, getUsers, getProducts, getBuys, usersByProvinces } from '../../store/actions/actions'
import UserAdmin from '../UserAdmin/UserAdmin'
import PublicationsAdmin from '../PublicationsAdmin/PublicationsAdmin'
import { Link, useHistory } from 'react-router-dom'
import ProductsAdmin from '../ProductsAdmin/ProductsAdmin'
import Cookies from 'universal-cookie'
import BuyProfitsChart from '../BuysCharts/BuysProfitsChart'
import logo from '../../utils/images/logodefinitivosinfondopng.png'
// import DataTableBuys from '../DataTableBuys/DataTableBuys.jsx'
// import ProductsCharts from '../ProductsCharts/ProductsCharts'
import UsersByProvincesChart from '../UsersCharts/UsersByProvincesChart.jsx'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import BuysAdmin from '../BuysAdmin/BuysAdmin.jsx'

function AdminDashboard () {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const publications = useSelector(state => state.publicationsAdm)
  const userProv = useSelector(state => state.usersByProvinces)
  const products = useSelector(state => state.allProducts)
  const buys = useSelector(state => state.buys)
  const cookies = new Cookies()
  const history = useHistory()
  const cantidadUsers = users.length
  const cantidadPublications = publications.length
  const cantidadBuys = buys.length
  const cantidadProducts = products.length
  const token = cookies.get('TOKEN')

  // usuarios registrados últimos 7 días ____________________
  const cantidadNewUsers = () => {
    const arrayM = []
    for (let i = 0; i < users.length; i++) {
      if (!users[i]) return arrayM
      if (users[i]) {
        const fechaInicio = new Date(users[i].createdAt.slice(0, 10)).getTime()
        const fechaFin = Date.now()
        const diff = fechaFin - fechaInicio
        const dias = diff / (10006060 * 24)
        if (dias < 7)arrayM.push(dias)
      }
    }
    return arrayM.length
  }

  // publicaciones no Banned _______________________________
  const publicationsFilter = publications.filter((e) => e.isBanned === false)
  const publicationsNoIsBanned = publicationsFilter.length

  // total dinero en compras a la fecha ______________________
  const totalBuys = () => {
    let cont = 0
    for (let i = 0; i < buys.length; i++) {
      cont += buys[i].totalAmount
    } return cont
  }
  // compras realizadas en los últimos 7 días  _______________
  const cantidadLastBuys = () => {
    const arrayB = []
    for (let i = 0; i < buys.length; i++) {
      if (!buys[i]) return arrayB
      if (buys[i]) {
        const fechaInicio = new Date(buys[i].createdAt.slice(0, 10)).getTime()
        const fechaFin = Date.now()
        const diff = fechaFin - fechaInicio
        const dias = diff / (10006060 * 24)
        if (dias < 7)arrayB.push(dias)
      }
    }
    return arrayB.length
  }
  useEffect(() => {
    console.log(token)
    console.log('Este es el token de isAdmimn', token.user.isAdmin)
    !token.user.isAdmin && history.push('/')
  }, [])//eslint-disable-line

  useEffect(() => {
    dispatch(getPublicationsAdm())
    dispatch(getBuys())
    dispatch(getUsers())
    dispatch(getProducts())
    dispatch(usersByProvinces())
  }, [])//eslint-disable-line

  const [render, setRender] = useState({
    Adminppal: true,
    usersRoute: false,
    publicationsRoute: false,
    productsRoute: false,
    buysRoutes: false
  })

  return (
    <div className={`container-fluid px-0 ${s.div}`}>
      <div className={`row flex-nowrap h-100 ${s.div2}`}>
        <div className='bg-white col-auto px-0'>
          <div className='sidebar d-flex flex-column align-items-center align-items-sm-start px-5 text-white min-vh-100 h-100'>
            <Link className='text-decoration-none' to='/'>
              <div className='d-flex align-items-center pt-5 pb-3 mb-md-0 me-md-auto text-white text-decoration-none'>
                <div>
                  <img src={logo} alt='logo' className={`navbar-brand ${s.logo}`} />
                </div>
                <span className={`px-3 ${s.texto}`}>E-wine</span>
              </div>
            </Link>
            <hr />
            <div className={s.center}>
              <ul className={`pt-5 nav nav-pills flex-column mb-sm-auto align-items-center align-items-sm-start ${s.ul}`}>
                <p className={`fs-4 d-sm-inline ${s.title}`}>PRINCIPAL:</p>
                <li className={`pt-5 nav-item ${s.li}`}>

                  <Button onClick={() => setRender({ Adminppal: true, usersRoute: false, publicationsRoute: false, productsRoute: false, buysRoutes: false })}>
                    <DashboardIcon style={{ fontSize: 30 }} className={` ${s.icon}`} />
                    <span className={` ms-1 d-none d-sm-inline ${s.text}`}>Tablero</span>

                  </Button>
                </li>
                <p className={`pt-5 fs-4 d-none d-sm-inline ${s.title}`}>LISTA</p>
                <li className={`pt-5 nav-item ${s.li}`}>

                  <Button onClick={() => setRender({ Adminppal: false, usersRoute: true, publicationsRoute: false, productsRoute: false, buysRoutes: false })}>
                    <PersonOutlineOutlinedIcon style={{ fontSize: 30 }} className={s.icon} />
                    <span className={` ms-1 d-none d-sm-inline ${s.text}`}>Usuarios</span>
                  </Button>
                </li>
                <li className={`pt-5 nav-item ${s.li}`}>

                  <Button onClick={() => setRender({ Adminppal: false, usersRoute: false, publicationsRoute: false, productsRoute: true, buysRoutes: false })}>
                    <StoreMallDirectoryIcon style={{ fontSize: 30 }} className={s.icon} />
                    <span className={` ms-1 d-none d-sm-inline ${s.text}`}>Productos</span>
                  </Button>
                </li>
                <li className={`pt-5 nav-item ${s.li}`}>

                  <Button onClick={() => setRender({ Adminppal: false, usersRoute: false, productsRoute: false, publicationsRoute: false, buysRoutes: true })}>
                    <ListAltIcon style={{ fontSize: 30 }} className={s.icon} />
                    <span className={` ms-1 d-none d-sm-inline ${s.text}`}>Compras</span>
                  </Button>
                </li>
                <li className={`pt-5 nav-item ${s.li}`}>

                  <Button onClick={() => setRender({ Adminppal: false, usersRoute: false, publicationsRoute: true, productsRoute: false, buysRoutes: false })}>
                    <Inventory2OutlinedIcon style={{ fontSize: 30 }} className={s.icon} />
                    <span className={` ms-1 d-none d-sm-inline ${s.text}`}>Publicaciones</span>
                  </Button>
                </li>
                <p className={`pt-5 fs-4 d-none d-sm-inline ${s.title}`}>PERFIL</p>
                <li className={` pt-5 nav-item ${s.li}`}>
                  <Link className={s.link} to='/'>
                    <LogoutIcon style={{ fontSize: 30 }} className={s.icon} />
                    <span className={` ms-1 d-none d-sm-inline ${s.text}`}>SALIR</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Container padre que tiene todo al lado del dashboard */}
        <div className='col-10 row'>
          <div className='row'>
            <div className={`${!render.Adminppal ? 'd-none' : 'd-flex'} col-12 text-dark mt-4 `}>
              <div className={`col-3 px-3 ${s.widget}`}>
                <Widgets type='user' cantidadUsers={cantidadUsers} cantidadNewUsers={cantidadNewUsers()} />
              </div>
              <div className='col-3 px-3'>
                <Widgets type='publications' cantidadPublications={cantidadPublications} publicationsNoIsBanned={publicationsNoIsBanned} />
              </div>
              <div className='col-3 px-3'>

                <Widgets type='products' cantidadProducts={cantidadProducts} />
              </div>
              <div className='col-3 px-3'>
                <Widgets type='balance' cantidadBuys={cantidadBuys} totalBuys={totalBuys()} cantidadLastBuys={cantidadLastBuys()} />
              </div>
            </div>
          </div>

          {/* <div className={`${!render.Adminppal ? 'd-none' : 'd-block'} col-12 text-dark mt-4`}>
            <TableAdmin />
          </div> */}

          <div className={`col-12 ${render.publicationsRoute ? ' d-block' : 'd-none'}`}>
            <PublicationsAdmin token={token} publications={publications} />
          </div>

          <div className={`col-12 ${render.usersRoute ? ' d-block' : 'd-none'}`}>
            <UserAdmin token={token} users={users} userProv={userProv} />
          </div>
          <div className={`col-12 ${render.productsRoute ? ' d-block' : 'd-none'}`}>
            <div className='text-secondary shadow-sm p-3 mb-5 bg-white rounded'> <h2>VARIETALES</h2></div>

            <ProductsAdmin />
          </div>

          <div className={`col-12 ${render.buysRoutes ? ' d-block' : 'd-none'}`}>
            <BuysAdmin buys={buys} />
            {/* <div> <h3>COMPRAS</h3></div>
            <DataTableBuys buys={buys} />
            <ProductsCharts /> */}
          </div>

          {/* <div className={`${!render.Adminppal ? 'col-12 col-xl-6' : 'col-12 col-xl-6'}`}>
            <Chart />
          </div> */}

          <div className={`${!render.Adminppal ? 'd-none' : 'col-12 pt-5 d-flex'}`}>
            {/* <Featured /> */}
            <div className={`col-6 border border-2  bg-white p-3 shadow-lg p-3 mb-5 bg-body rounded ${s.profitChart}`}>
              <BuyProfitsChart />
            </div>
            <div className=' col-6 border border-2  bg-white p-3 shadow-lg p-3 mb-5 bg-body rounded'>
              <UsersByProvincesChart userProv={userProv} />
            </div>
          </div>

          {/* <div className='ultimasCompras'>
            Ultimas Compras
          // </div> */}

        </div>
        {/* Fin Container padre que tiene todo al lado del dashboard */}

      </div>

    </div>

  )
}

export default AdminDashboard

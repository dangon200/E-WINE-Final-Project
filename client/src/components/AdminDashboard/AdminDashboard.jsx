import React, { useState, useEffect } from 'react'
import s from './AdminDashboard.module.css'
import Widgets from '../Widgets/Widgets.jsx'
import Featured from '../Featured/Featured.jsx'
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
  const cantidadProducts = products.length
  const token = cookies.get('TOKEN')
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

  const publicationsFilter = publications.filter((e) => e.isBanned === false)
  const publicationsNoIsBanned = publicationsFilter.length
  const cantidadBuys = buys.length

  const totalBuys = () => {
    let cont = 0
    for (let i = 0; i < buys.length; i++) {
      cont += buys[i].totalAmount
    } return cont
  }

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
    !token && history.push('/register')
  }, [token, history])

  useEffect(() => {
    dispatch(getPublicationsAdm())
    dispatch(getBuys())
    dispatch(getUsers())
    dispatch(getProducts())
    dispatch(usersByProvinces())
  }, [])//eslint-disable-line

  const [render, setRender] = useState({
    Adminppal: false,
    usersRoute: false,
    publicationsRoute: false,
    productsRoute: true,
    buysRoutes: false
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
                  <Button onClick={() => setRender({ Adminppal: true, usersRoute: false, publicationsRoute: false, productsRoute: false, buysRoutes: false })}> <span className={s.text}>Tablero</span> </Button>
                </li>
                <p className={s.title}>LISTA</p>
                <li className={s.li}>
                  <PersonOutlineOutlinedIcon className={s.icon} />
                  <Button onClick={() => setRender({ Adminppal: false, usersRoute: true, publicationsRoute: false, productsRoute: false, buysRoutes: false })}><span className={s.text}>Usuarios</span> </Button>
                </li>
                <li className={s.li}>
                  <StoreMallDirectoryIcon className={s.icon} />
                  <Button onClick={() => setRender({ Adminppal: false, usersRoute: false, publicationsRoute: false, productsRoute: true, buysRoutes: false })}><span className={s.text}>Productos</span></Button>
                </li>
                <li className={s.li}>
                  <ListAltIcon className={s.icon} />
                  <Button onClick={() => setRender({ Adminppal: false, usersRoute: false, productsRoute: true, publicationsRoute: false, buysRoutes: true })}><span className={s.text}>Compras</span></Button>
                </li>
                <li className={s.li}>
                  <ListAltIcon className={s.icon} />
                  <Button onClick={() => setRender({ Adminppal: false, usersRoute: false, publicationsRoute: true, productsRoute: false, buysRoutes: false })}><span className={s.text}>Publicaciones</span></Button>
                </li>
                <p className={s.title}>PERFIL</p>
                <li className={s.li}>
                  <LogoutIcon className={s.icon} />
                  <Link className={s.link} to='/'>
                    <span className={s.text}>SALIR</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Container padre que tiene todo al lado del dashboard */}
        <div className='col-10 row'>
          <div className={`${!render.Adminppal ? 'd-none' : 'd-flex'} col-12 text-dark mt-4`}>
            <div><h2>Bienvenido a tu dashboard</h2></div>
            <Widgets type='user' cantidadUsers={cantidadUsers} cantidadNewUsers={cantidadNewUsers()} />
            <Widgets type='publications' cantidadPublications={cantidadPublications} publicationsNoIsBanned={publicationsNoIsBanned} />
            <Widgets type='products' cantidadProducts={cantidadProducts} />
            <Widgets type='balance' cantidadBuys={cantidadBuys} totalBuys={totalBuys()} cantidadLastBuys={cantidadLastBuys()} />
          </div>

          {/* <div className={`${!render.Adminppal ? 'd-none' : 'd-block'} col-12 text-dark mt-4`}>
            <TableAdmin />
          </div> */}

          <div className={`col-12 ${render.publicationsRoute ? ' d-block' : 'd-none'}`}>
            <div> <h3>PUBLICACIONES</h3></div>

            <PublicationsAdmin token={token} publications={publications} />
          </div>

          <div className={`col-12 ${render.usersRoute ? ' d-block' : 'd-none'}`}>
            <UserAdmin token={token} users={users} userProv={userProv} />
          </div>
          <div className={`col-12 ${render.productsRoute ? ' d-block' : 'd-none'}`}>
            <ProductsAdmin />
          </div>

          {/* <div className={`${!render.Adminppal ? 'col-12 col-xl-6' : 'col-12 col-xl-6'}`}>
            <Chart />
          </div> */}

          <div className={`${!render.Adminppal ? 'd-none' : 'col-6'}`}>
            <Featured />
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

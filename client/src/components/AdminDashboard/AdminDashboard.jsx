import React from 'react'
import Sidebar from '../Sidebar/Sidebar.jsx'
import s from './AdminDashboard.module.css'
import Nav from '../Nav/Nav.jsx'
import Widgets from '../Widgets/Widgets.jsx'
import Featured from '../Featured/Featured.jsx'
import Chart from '../Chart/Chart.jsx'
import TableAdmin from '../TableAdmin/TableAdmin.jsx'

function AdminDashboard () {
  return (
    <div className={`container-fluid ${s.div}`}>
      <div>
        <Nav />
      </div>
      <div className={`row ${s.div2}`}>
        <div className='text-white col-2 d-flex flex-column align-items-center align-items-sm-start min-vh-100 h-100 d-inline-block height: 100px'>
          <Sidebar />
        </div>
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

  )
}

export default AdminDashboard

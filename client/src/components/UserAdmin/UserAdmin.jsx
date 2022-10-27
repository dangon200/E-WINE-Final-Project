import React from 'react'
import Datatable from '../Datatable/Datatable'
import UsersBannedChart from '../UsersCharts/UsersBannedChart'
import UsersBarChart from '../UsersCharts/UsersBarChart'
import UsersByProvincesChart from '../UsersCharts/UsersByProvincesChart'
import s from './UserAdmin.module.css'

function UserAdmin ({ users, userProv }) {
  return (
    <div className={`container-fluid px-0 ${s.div}`}>
      <div className={`row ${s.div2}`}>
        <div className='col-6 w-50'>
          <UsersBarChart users={users} />
        </div>
        <div className='w-50'>
          <UsersBannedChart users={users} />
        </div>
        <div className='w-75'>
          <UsersByProvincesChart userProv={userProv} />
        </div>
        <div className='h-75'>
          <Datatable users={users} />
        </div>
      </div>
    </div>
  )
}

export default UserAdmin

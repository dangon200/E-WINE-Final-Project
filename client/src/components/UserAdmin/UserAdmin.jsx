import React from 'react'
import Datatable from '../Datatable/Datatable'
import UsersBannedChart from '../UsersCharts/UsersBannedChart'
import UsersBarChart from '../UsersCharts/UsersBarChart'
import UsersByProvincesChart from '../UsersCharts/UsersByProvincesChart'

function UserAdmin ({ users, userProv }) {
  return (
    <div>
      <div>
        <Datatable users={users} />
      </div>
      <div>
        <UsersBarChart users={users} />
      </div>
      <div>
        <UsersBannedChart users={users} />
      </div>
      <div>
        <UsersByProvincesChart userProv={userProv} />
      </div>
    </div>
  )
}

export default UserAdmin

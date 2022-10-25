import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { bannedUser, getUsers } from '../../store/actions/actions'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Nombre usuario', width: 130 },
  { field: 'email', headerName: 'email', width: 130 },
  { field: 'isBanned', headerName: 'Banneado', width: 70 },
  { field: 'isSommelier', headerName: 'Sommelier', sortable: false, width: 70 },
  { field: 'balance', headerName: 'Balance', type: 'number', sortable: false, width: 70 },
  { field: 'date', headerName: 'date', sortable: false, width: 100 }

]

export default function Datatable (props) {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const userDetail = useSelector(state => state.userDetail)
  // const { users } = props
  const rows = users.map(u => { return { id: u.id, username: u.username, email: u.email, region: u.region, isBanned: u.isBanned, isSommelier: u.isSommelier, balance: u.balance, date: u.createdAt } }
  )
  const handleBanned = (id, isBanned, createdAt) => {
    console.log('Entre al handleBanned')
    console.log(createdAt)
    dispatch(bannedUser(id, isBanned))
  }
  const actionColumn = [{
    field: 'action',
    headerName: 'Action',
    width: 900,
    renderCell: (params) => {
      // console.log(params)
      return (
        <div className='w'>
          <button type='button' className='btn btn-outline-danger' onClick={() => handleBanned(params.row.id, params.row.isBanned, params.row.createdAt)}>
            {
              params.row.isBanned ? <div>Habilitar</div> : <div>Bannear</div>
            }
          </button>
        </div>
      )
    }
  }]
  useEffect(() => { dispatch(getUsers())}, [userDetail]) //eslint-disable-line
  return (

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>

  )
}

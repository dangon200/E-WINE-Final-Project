import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { bannedUser, getUsers, sommelierUser, adminUser } from '../../store/actions/actions'
import { useHistory } from 'react-router-dom'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'Nombre usuario', width: 120 },
  { field: 'email', headerName: 'email', width: 130 },
  { field: 'isBanned', headerName: 'Banneado', width: 50 },
  { field: 'isSommelier', headerName: 'Sommelier', sortable: false, width: 50 },
  { field: 'isAdmin', headerName: 'Admin', width: 50 },
  { field: 'balance', headerName: 'Balance', type: 'number', sortable: false, width: 70 },
  { field: 'date', headerName: 'Fecha ingreso', sortable: false, width: 50 },
  { field: 'region', headerName: 'Region', sortable: true, width: 50 }

]

export default function Datatable (props) {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const userDetail = useSelector(state => state.userDetail)
  const userSommelier = useSelector(state => state.userSommelier)
  const userDetail2 = useSelector(state => state.userDetail2)
  const { token } = props
  const history = useHistory()
  // const { users } = props
  const rows = users.map(u => { return { id: u.id, username: u.username, email: u.email, region: u.region, isBanned: u.isBanned, isSommelier: u.isSommelier, isAdmin: u.isAdmin, balance: u.balance, date: u.createdAt.slice(0, 10) } }
  )
  const handleBanned = (id, isBanned, createdAt) => {
    console.log('Entre al handleBanned')
    console.log(createdAt)
    if (!token) {
      history.push('/')
    } else {
      dispatch(bannedUser(id, isBanned))
    }
  }
  const handleSommelier = (id, isSommelier, createdAt) => {
    console.log('Entre al handleSommelier')
    console.log(createdAt)
    if (!token) {
      history.push('/')
    } else {
      dispatch(sommelierUser(id, isSommelier))
    }
  }
  const handleAdmin = (id, isAdmin, createdAt) => {
    console.log('Entre al handleAdmin')
    console.log(createdAt)
    if (!token) {
      history.push('/')
    } else {
      dispatch(adminUser(id, isAdmin))
    }
  }
  const actionColumn = [{
    field: 'action',
    headerName: 'Action',
    width: 210,
    renderCell: (params) => {
      // console.log(params)
      return (
        <div className='w'>
          <button type='button' className='btn btn-outline-danger' onClick={() => handleBanned(params.row.id, params.row.isBanned, params.row.createdAt)}>
            {
              params.row.isBanned ? <div>Habilitar</div> : <div>Bannear</div>
            }
          </button>
          <button type='button' className='btn btn-outline-danger' onClick={() => handleSommelier(params.row.id, params.row.isSommelier, params.row.createdAt)}>
            {
              params.row.isSommelier ? <div>Verificado</div> : <div>Verificar</div>
            }
          </button>
          <button type='button' className='btn btn-outline-danger' onClick={() => handleAdmin(params.row.id, params.row.isAdmin, params.row.createdAt)}>
            {
              params.row.isAdmin ? <div>Dehabilitar Admin</div> : <div>Hacer Admin</div>
            }
          </button>
        </div>
      )
    }
  }]
  useEffect(() => { dispatch(getUsers())}, [userDetail, userSommelier, userDetail2]) //eslint-disable-line
  return (
    <div>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  )
}

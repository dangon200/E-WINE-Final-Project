import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { bannedPublication, getPublicationsAdm } from '../../store/actions/actions'
import { useHistory } from 'react-router-dom'

// ({
//     id: r.id,
//     title: r.title,              +
//     price: r.price,
//     count: r.count,
//     image: r.image,
//     description: r.description,
//     name: r.product.name,        +
//     type: r.product.type,        +
//     varietal: r.product.varietal,
//     cellar: r.product.cellar,
//     img: r.product.img,
//     origin: r.product.origin,
//     isBanned: r.isBanned
// })

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Título', width: 130 },
  { field: 'name', headerName: 'Producto', width: 130 },
  { field: 'type', headerName: 'Tipo', width: 70 },
  { field: 'varietal', headerName: 'Varietal', sortable: false, width: 70 },
  { field: 'origin', headerName: 'Origen', width: 70 },
  { field: 'description', headerName: 'Descripción', width: 170 },
  { field: 'isBanned', headerName: 'isBanned', width: 170 }

]

export default function Datatable (props) {
  const dispatch = useDispatch()
  const publications = useSelector(state => state.publicationsAdm)
  const publicationBanned = useSelector(state => state.publicationBanned)
  const { token } = props
  const history = useHistory()

  // const { users } = props
  const rows = publications.map(p => { return { id: p.id, title: p.title, name: p.name, type: p.type, varietal: p.varietal, description: p.description, origin: p.origin, isBanned: p.isBanned } }
  )
  const handleBanned = (id, isBanned) => {
    console.log('Entre al handleBanned')
    console.log(id)
    if (!token) {
      history.push('/')
    } else {
      dispatch(bannedPublication(id, isBanned))
    }
  }
  const actionColumn = [{
    field: 'action',
    headerName: 'Action',
    width: 900,
    renderCell: (params) => {
      // console.log(params)
      return (
        <div className='w'>
          <button type='button' className='btn btn-outline-danger' onClick={() => handleBanned(params.row.id, params.row.isBanned)}>
            {
                params.row.isBanned ? <div>Habilitar</div> : <div>Bannear</div>
              }
          </button>
        </div>
      )
    }
  }]
  useEffect(() => { dispatch(getPublicationsAdm()) }, [publicationBanned]) //eslint-disable-line
  return (

    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        className='fs-5 bg-white'
        initialState={{
          sorting: {
            sortModel: [{ field: 'id', sort: 'asc' }]
          }
        }}
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>

  )
}

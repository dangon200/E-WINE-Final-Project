import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { getBuys } from '../../store/actions/actions'

// {
//     "buyId": "50ccd5cc-82d9-438e-b0dd-0e5eed383a53",
//     "currency": "ars",
//     "paymentMethod": "card",
//     "totalAmount": 1050000,
//     "userId": "2a97e8cb-8fd0-49a3-9d77-ba241f0a6530",
//     "createdAt": "2022-10-24T02:32:30.991Z"
//   },

const columns = [
  { field: 'id', headerName: 'ID', width: 300 },
  { field: 'currency', headerName: 'Divisa', width: 70 },
  { field: 'totalAmount', headerName: 'Monto Total', width: 80 },
  { field: 'userId', headerName: 'ID usuario', width: 300 },
  { field: 'createdAt', headerName: 'Fecha', sortable: false, width: 100 }
]

export default function Datatable (props) {
  const dispatch = useDispatch()
  const buys = useSelector(state => state.buys)

  const rows = buys.map(b => { return { id: b.buyId, currency: b.currency, userId: b.userId, totalAmount: b.totalAmount, createdAt: b.createdAt.slice(0, 10) } }
  )

  useEffect(() => { dispatch(getBuys()) }, []) //eslint-disable-line
  return (

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        className='fs-5 bg-white'
        initialState={{
          sorting: {
            sortModel: [{ field: 'id', sort: 'asc' }]
          }
        }}
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>

  )
}

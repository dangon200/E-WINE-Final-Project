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
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'currency', headerName: 'Divisa', width: 130 },
  { field: 'totalAmount', headerName: 'Monto Total', width: 130 },
  { field: 'userId', headerName: 'ID usuario', width: 150 },
  { field: 'createdAt', headerName: 'Fecha', sortable: false, width: 130 }
]

export default function Datatable (props) {
  const dispatch = useDispatch()
  const buys = useSelector(state => state.buys)

  const rows = buys.map(b => { return { id: b.buyId, currency: b.currency, userId: b.userId, totalAmount: b.totalAmount, createdAt: b.createdAt.slice(0, 10) } }
  )

  useEffect(() => { dispatch(getBuys()) }, [buys]) //eslint-disable-line
  return (

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>

  )
}

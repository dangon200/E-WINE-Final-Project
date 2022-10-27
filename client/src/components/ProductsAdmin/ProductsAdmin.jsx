import React, { useState, useEffect } from 'react'
import { getVarietals } from '../../store/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Varietal', width: 130 }
]
function ProductsAdmin () {
  const dispatch = useDispatch()
  const varietals = useSelector(state => state.users)
  const rows = varietals.map(e => { return { id: e.id, name: e.name } })
  useEffect(() => {
    dispatch(getVarietals())
  })
  return (

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default ProductsAdmin

import React, { useEffect } from 'react'

import { getVarietals } from '../../store/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid'
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Varietal', width: 200 }

]

function TableVarietalAdmin () {
  const dispatch = useDispatch()
  const varietals = useSelector(state => state.allVarietals)
  const rows = varietals.map(e => { return { id: varietals.indexOf(e), name: e } })
  useEffect(() => {
    dispatch(getVarietals())
  }, []) // eslint-disable-line
  return (
    <div>
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          className='fs-5 bg-white'
          initialState={{
            sorting: {
              sortModel: [{ field: 'id', sort: 'asc' }]
            }
          }}
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default TableVarietalAdmin

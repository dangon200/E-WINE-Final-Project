import React from 'react'

import s from './List.module.css'
import { Datatable } from '../Datatable/Datatable'

function List () {
  return (
    <div className={`container-fluid ${s.div}`}>

      <Datatable />
    </div>
  )
}

export default List

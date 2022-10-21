import React from 'react'
import Nav from '../Nav/Nav'
import Sidebar from '../Sidebar/Sidebar'
import s from './List.module.css'
import { Datatable } from '../Datatable/Datatable'

function List () {
  return (
    <div className={`container-fluid ${s.div}`}>
      <div>
        <Nav />
      </div>
      <div className={`row ${s.div2}`}>
        <div className='text-white col-2 d-flex flex-column align-items-center align-items-sm-start min-vh-100 h-100 d-inline-block height: 100px'>
          <Sidebar />
        </div>
      </div>
      <Datatable />
    </div>
  )
}

export default List

import React from 'react'
import { Link } from 'react-router-dom'

function Error404 () {
  return (
    <div>
      <h1>Error 404: Esta página no existe</h1>
      <Link to='/home'>volver a la tienda</Link>
    </div>
  )
}

export default Error404

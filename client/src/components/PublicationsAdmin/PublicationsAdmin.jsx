import React from 'react'
import DatatablePublications from '../DatatablePublications/DatatablePublications.jsx'

function PublicationsAdmin ({ publications, token }) {
  return (
    <div>
      <div class='text-secondary shadow-sm p-3 mb-5 bg-white rounded'> <h3>PUBLICACIONES</h3></div>
      <div>
        <DatatablePublications token={token} publications={publications} />
      </div>
    </div>
  )
}

export default PublicationsAdmin

import React from 'react'
import DatatablePublications from '../DatatablePublications/DatatablePublications.jsx'

function PublicationsAdmin ({ publications }) {
  return (
    <div>
      <div>
        <DatatablePublications publications={publications} />
      </div>
    </div>
  )
}

export default PublicationsAdmin

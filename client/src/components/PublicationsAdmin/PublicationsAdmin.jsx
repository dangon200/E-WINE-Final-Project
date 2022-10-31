import React from 'react'
import DatatablePublications from '../DatatablePublications/DatatablePublications.jsx'

function PublicationsAdmin ({ publications, token }) {
  return (
    <div>
      <div>
        <DatatablePublications token={token} publications={publications} />
      </div>
    </div>
  )
}

export default PublicationsAdmin

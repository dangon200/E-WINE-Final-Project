import React from 'react'
import Datatable from '../Datatable/Datatable'
import UsersBannedChart from '../UsersCharts/UsersBannedChart'
import UsersBarChart from '../UsersCharts/UsersBarChart'
// import UsersByProvincesChart from '../UsersCharts/UsersByProvincesChart'
// import s from './UserAdmin.module.css'
import { Container, Row, Col } from 'react-bootstrap'

function UserAdmin ({ users, userProv, token }) {
  return (
    <Container className='bg-white mr-5'>
      <Row className='text-secondary shadow-sm p-3 mb-5 bg-light rounded'> <h2>USUARIOS</h2></Row>
      <Row className='mb-3'>
        <Col className='border border-2 m-3 bg-light'>
          <UsersBarChart users={users} />
        </Col>
        <Col className='border border-2 m-3 bg-light'>
          <UsersBannedChart users={users} />
        </Col>
      </Row>
      <Row>
        <Col className='text-secondary border border-2 bg-light'>
          <h2>Todos los usuarios</h2>
          <Datatable token={token} users={users} />
        </Col>
      </Row>

    </Container>
  )
}

export default UserAdmin

// import React from 'react'
// import Datatable from '../Datatable/Datatable'
// import UsersBannedChart from '../UsersCharts/UsersBannedChart'
// import UsersBarChart from '../UsersCharts/UsersBarChart'
// import UsersByProvincesChart from '../UsersCharts/UsersByProvincesChart'
// import s from './UserAdmin.module.css'

// function UserAdmin ({ users, userProv, token }) {
//   return (
//     <div className={`container-fluid px-0 ${s.div}`}>
//       <div className={`row ${s.div2}`}>
//         <div className={`col-6 w-50 ${s.chart}`}>
//           <UsersBarChart users={users} />
//         </div>
//         <div className='w-50'>
//           <UsersBannedChart users={users} />
//         </div>
//         <div className='w-50'>
//           <UsersByProvincesChart userProv={userProv} />
//         </div>
//         <div className='h-50'>
//           <Datatable token={token} users={users} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UserAdmin

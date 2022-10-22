import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import s from './userProfile.module.css'

export default function UserProfile () {
  return (
    <div className='grid h-100'>
      <Container fluid style={{ height: '100vh' }}>
        <Row className='grid h-100 bg-grey bg-opacity-25'>
          <Col className='col-auto pt-5 rounded'>
            <Sidebar />
          </Col>
          <Col style={{ color: '#EEEEEE' }} className='bg-light text-dark pt-5 d-flex-column justify-content-center'>
            <Row className='m-auto w-75 pt-5' id={s.grid}>
              {/* <table>
                <thead>
                  <tr>
                    <th className='pb-3'>
                      Datos de cuenta
                    </th>
                    <th className='pb-3 text-decoration-none'>
                      <Link className='text-decoration-none' to='/formEditUser'>
                        Modificar datos de cuenta
                      </Link>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Usuario</td>
                    <td>juana.64</td>
                  </tr>
                  <tr>
                    <td>E-mail</td>
                    <td>juana.64@gmail.com</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </table> */}
              <Row className='d-flex text-start w-75 mb-5'>
                <h1>Mis datos</h1>
              </Row>
              <Row className='w-75 fs-4 d-flex justify-content-center align-items-center'>
                <Col className='d-flex justify-content-start'>
                  <h2>Datos de la cuenta</h2>
                </Col>
                {/* <Col className='d-flex justify-content-end'>
                  <Link className='text-decoration-none' to='/formEditUser'>
                    Modificar datos de cuenta
                  </Link>
                </Col> */}
              </Row>
              <Container>
                <Table responsive className='w-75 text-dark bg-secondary bg-opacity-25 mt-4 fs-4 rounded-4' size='lg'>
                  {/* <thead>
                  <tr>
                    <th colSpan={3} className='pb-3'>
                      Datos de cuenta
                      <Link className='text-decoration-none' to='/formEditUser'>
                        Modificar datos de cuenta
                      </Link>
                    </th>
                  </tr>
                </thead> */}
                  <tbody className={s.firstTd}>
                    <tr>
                      <td style={{ 'padding-left': '10px' }}>Usuario</td>
                      <td style={{ 'padding-right': '10px' }} className={s.secTd}>mark.65</td>
                    </tr>
                    <tr>
                      <td style={{ 'padding-left': '10px' }}>E-mail</td>
                      <td style={{ 'padding-right': '10px' }} className={s.secTd}>mark.65@gmail.com</td>
                    </tr>
                    <tr>
                      <td style={{ 'padding-left': '10px' }}>Domicilio</td>
                      <td style={{ 'padding-right': '10px' }} className={s.secTd}>Corrientes 123</td>
                    </tr>
                    <tr>
                      <td style={{ 'padding-left': '10px' }}>Telefono</td>
                      <td style={{ 'padding-right': '10px' }} className={s.secTd}>47326875</td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
              <Row className='fs-4 d-flex justify-content-center align-items-center pt-3'>
                <Col className='d-flex justify-content-start'>
                  <Link className='text-decoration-none' to='/formEditUser'>
                    Modificar datos de cuenta
                  </Link>
                </Col>
              </Row>
              <Table responsive className='w-75 text-dark bg-secondary bg-opacity-25 mt-4 fs-4 rounded-4' size='lg'>
                <tbody className={s.Td}>
                  <tr>
                    <td style={{ 'padding-left': '10px' }}>Usuario</td>
                    <td style={{ 'padding-right': '10px' }} className={s.secTd}>mark.65</td>
                  </tr>
                  <tr>
                    <td style={{ 'padding-left': '10px' }}>E-mail</td>
                    <td style={{ 'padding-right': '10px' }} className={s.secTd}>mark.65@gmail.com</td>
                  </tr>
                  <tr>
                    <td style={{ 'padding-left': '10px' }}>Domicilio</td>
                    <td style={{ 'padding-right': '10px' }} className={s.secTd}>Corrientes 123</td>
                  </tr>
                  <tr>
                    <td style={{ 'padding-left': '10px' }}>Telefono</td>
                    <td style={{ 'padding-right': '10px' }} className={s.secTd}>47326875</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

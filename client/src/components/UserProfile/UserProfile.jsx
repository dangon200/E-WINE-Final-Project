import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import s from './userProfile.module.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { updateProfileImage, getUserById } from '../../store/actions/actions'
import { useEffect } from 'react'

export default function UserProfile () {
  const user = useSelector(state => state.user)
  const compras = useSelector(state => state.buys)
  const reviews = useSelector(state => state.reviewUser)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserById(user.id))
  }, [compras, reviews])
  const handleChange = async (e) => {
    const reader = new FileReader()
    reader.addEventListener('load', function () {
      document.getElementById('image').src = reader.result
    })
    reader.readAsDataURL(e.target.files[0])

    const cloudName = 'dfq27ytd2'
    const preset = 'cpnushlf'
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`

    const formData = new FormData()
    formData.append('upload_preset', preset)
    formData.append('file', e.target.files[0])

    const send = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log(send)
    const urlImage = send.data.secure_url
    dispatch(updateProfileImage(user.id, urlImage))
  }
  return (
    <div>
      <Container fluid style={{ height: '100vh' }}>
        <Row className='grid h-100'>
          <Col className={`col-auto pt-5 min-vh-100 rounded ${s.sidebar}`}>
            <Sidebar />
          </Col>
          <Col className={`${s.container}`}>
            <Row className='m-auto w-75' id={s.grid}>
              <Row className={`d-flex mb-5 ${s.title}`}>
                <h1 className='d-flex w-100'>Mis datos</h1>
              </Row>
              <Row className={`fs-4 ${s.datos}`}>
                <Col className={s.h2}>
                  <h2>Datos de la cuenta</h2>
                </Col>
              </Row>
              <Container className={s.dataContainer}>
                <div className={s.imageContainer}>
                  <img id='image' className={s.image} src={user.image ? user.image : 'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png'} alt='profile' />
                  <input type='file' className={s.input} id='input' onChange={handleChange} />
                  <button className={s.btn} onClick={() => document.getElementById('input').click()}>Cambiar foto de perfil</button>
                </div>
                <Table responsive className={s.table} size='lg'>
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
                      <td style={{ 'padding-right': '10px' }} className={s.secTd}>{user.username}</td>
                    </tr>
                    <tr>
                      <td style={{ 'padding-left': '10px' }}>Nivel</td>
                      <td style={{ 'padding-right': '10px' }} className={s.secTd}>{user.buyLevel}</td>
                    </tr>
                    <tr>
                      <td style={{ 'padding-left': '10px' }}>E-mail</td>
                      <td style={{ 'padding-right': '10px' }} className={s.secTd}>{user.email}</td>
                    </tr>
                    <tr>
                      <td style={{ 'padding-left': '10px' }}>Domicilio</td>
                      <td style={{ 'padding-right': '10px' }} className={s.secTd}>{user.region !== 'null' ? user.region : <span>Aún no ha registrado una dirección</span>} </td>
                    </tr>
                    <tr>
                      <td style={{ 'padding-left': '10px' }}>Teléfono</td>
                      <td style={{ 'padding-right': '10px' }} className={s.secTd}>{user.phone ? user.phone : <span>Aún no ha registrado un teléfono</span>}</td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
              <Row className='fs-3 d-flex justify-content-center align-items-center pt-3'>
                <Col className='d-flex justify-content-start'>
                  <Link className='text-decoration-none' to='/formEditUser'>
                    Cambiar contraseña
                  </Link>
                </Col>
              </Row>
              {/* <Table responsive className={s.table2} size='lg'>
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
              </Table> */}
            </Row>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

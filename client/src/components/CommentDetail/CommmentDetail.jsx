import React from 'react'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import { Tabs } from 'react-bootstrap/'
// import style from './ComentDetail.module.css'
import CommentCard from './CommentCard'
import s from './CommentDetail.module.css'

export default function CommentDetail (props) {
  const Comentarios = props.comment
  const reviews = props.reviews
  return (
    <Container className='mt-4 bg-body shadow-lg' fluid>
      <Tabs
        defaultActiveKey='Comments'
        className='fs-1'
      >
        <Tab eventKey='ComentSom' title='Sommelier'>
          {reviews?.map(r => (

            <div className={s.container} key={r.id}>
              <h5 className={s.text}>"mmmmmmmmmm... {r.text}"</h5>
              <h6 className={s.username}>{r.username} - Sommelier</h6>
            </div>

          ))}
        </Tab>
        <Tab eventKey='ComentariosGral' title='Más Opiniones'>
          {Array.isArray(Comentarios) && Comentarios.map((comentario, idx) => {
            return <CommentCard key={idx} comentario={comentario} />
          })}
        </Tab>
        {/* Agregar mas en caso de ser necesario */}
        {/* <Tab eventKey='contact' title='Contact'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quam, provident aliquid deserunt perspiciatis aspernatur, facilis dolore minus nesciunt dicta vel! At odio amet quos illum impedit cumque facere hic!
        </Tab> */}
      </Tabs>
    </Container>
  )
}

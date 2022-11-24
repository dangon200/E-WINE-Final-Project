import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import { Tabs } from 'react-bootstrap/'
import CommentCard from './CommentCard'
import s from './CommentDetail.module.css'

export default function CommentDetail (props) {
  const Comentarios = props.reviewsBuy || []
  const reviews = props.sommelier || []
  return (
    <Container className='mt-4 bg-body shadow-lg' fluid>
      <Tabs
        defaultActiveKey='Comments'
        className='fs-1'
      >
        <Tab eventKey='ComentSom' title='Sommelier'>
          {reviews?.map(r => (

            <div className={s.container} key={r.id}>
              <h5 className={s.text}>"{r.text}"</h5>
              <h6 className={s.username}>{r.username} - Sommelier</h6>
            </div>

          ))}
        </Tab>
        <Tab eventKey='ComentariosGral' title='Más Opiniones'>
          {typeof Comentarios === 'string'
            ? Comentarios
            : Comentarios.map((comentario, idx) => {
              return <CommentCard key={idx} comentario={comentario} />
            })}
        </Tab>
      </Tabs>
    </Container>
  )
}

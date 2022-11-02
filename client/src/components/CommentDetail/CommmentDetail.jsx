import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import { Tabs } from 'react-bootstrap/'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import CommentCard from './CommentCard'
export default function CommentDetail (props) {
  const Comentarios = props.comment
  return (
    <Container className='mt-4 bg-body shadow-lg' fluid>
      <Tabs
        defaultActiveKey='Comments'
        className='fs-1'
      >
        <Tab eventKey='ComentSom' title='Sommelier'>
          <Row>
            <Col className='text-start fs-1 mt-5 mb-5 ms-5'>
              <Stack direction='vertical' gap={5}>
                <div />
              </Stack>
            </Col>
            <Col className='text-start fs-1 mt-5 mb-5 ms-5'>
              <Stack direction='vertical' gap={5}>
                <br />
              </Stack>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey='ComentariosGral' title='Más Opiniones'>
          {Array.isArray(Comentarios) && Comentarios.map((comentario, idx) => {
            return <CommentCard key={idx} comentario={comentario} />
          })}
        </Tab>
      </Tabs>
    </Container>
  )
}

import React, { useState, useContext } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
/* import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col' */
import Row from 'react-bootstrap/Row'
/* import Form from 'react-bootstrap/Form' */

import { useSelector, useDispatch } from 'react-redux'

import { addQuestion } from '../../store/actions/actions'
import Question from '../Question/Question'

import style from './Preguntas.module.css'
import { SocketContext } from '../../context/socket'

export default function Preguntas ({ questions, publication }) {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [question, setQuestion] = useState('')
  const socket = useContext(SocketContext)

  return (
    <Container fluid className='bg-white shadow-lg m-auto rounded mt-5'>
      {user && user.id !== publication.userId &&
        <div className={style.questionsHeader}>
          <div className={style.inputQuestion}>
            <input id='question' className={style.input} type='text' placeholder='Escriba su pregunta...' value={question} onChange={(e) => setQuestion(e.target.value)} />
            <input
              className={style.inputBtn} type='submit' value='Preguntar' onClick={(e) => {
                e.preventDefault()
                if (question === '') {
                  document.getElementById('question').focus()
                } else {
                  dispatch(addQuestion({
                    userId: user.id,
                    publicationId: publication.id,
                    text: question
                  }))
                  socket.emit('sendQuestion', {
                    senderName: user.username,
                    receiverId: publication.userId,
                    publicationTitle: publication.title,
                    text: question
                  })
                  setQuestion('')
                }
              }}
            />
          </div>
        </div>}
      <Accordion flush>
        <Accordion.Item eventKey='0'>
          <Accordion.Header> <h4 className='text-muted' style={{ fontFamily: 'var(--font-family-1)' }}>Preguntas y Respuestas</h4></Accordion.Header>
          <Accordion.Body>
            {typeof questions === 'string'
              ? <Row className='fs-4 ms-1'>{questions}</Row>
              : questions.map(r => (
                <Question key={r.id} question={r} publication={publication} user={user} />
              ))}
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </Container>
  )
}

/* if (question === '') {
  document.getElementById('question').focus()
} else {
  dispatch(addQuestion({
    userId: user.id,
    publicationId: publication.id,
    text: question
  }))
  setQuestion('')
} */

/* value={question} onChange={(e) => setQuestion(e.target.value) */

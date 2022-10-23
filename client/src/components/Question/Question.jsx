import React, { useState } from 'react'

import style from './Question.module.css'

import { addAnswer } from '../../store/actions/actions'
import { useDispatch } from 'react-redux'

function Question (props) {
  const [input, showInput] = useState(false)
  const [answer, setAnswer] = useState('')
  const dispatch = useDispatch()

  const showFields = () => {
    showInput(!input)
  }

  return (
    <div key={props.question.id} className={style.questions}>
      <div className={style.questionContainer}>
        <div className={style.question}>
          <p className={style.username}>{props.question.username}</p>
          <p className={style.text}>{props.question.text}</p>
        </div>
        {!props.question.answer && props.user.id === props.publication.userId && props.user ? <p className={style.more} onClick={() => showFields()}>+</p> : null}
      </div>
      {input &&
        <div className={style.questionsHeader}>
          <div className={style.inputQuestion}>
            <input id='answer' className={style.input} type='text' placeholder='Escriba su respuesta...' value={answer} onChange={(e) => setAnswer(e.target.value)} />
            <input
              className={style.inputBtn} type='submit' value='Responder' onClick={(e) => {
                e.preventDefault()
                if (answer === '') {
                  document.getElementById('answer').focus()
                } else {
                  dispatch(addAnswer({
                    publicationId: props.publication.id,
                    answer
                  }, props.question.id))
                  setAnswer('')
                  showFields()
                }
              }}
            />
          </div>
        </div>}
      {props.question.answer &&

        <p className={style.answer}>{props.question.answer}</p>}
    </div>
  )
}

export default Question

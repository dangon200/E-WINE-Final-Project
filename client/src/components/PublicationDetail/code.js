{ /* <div className={style.questionsContainer}>
  {user && user.id !== publication.userId &&
    <div className={style.questionsHeader}>
      <h2>Preguntale al vendedor</h2>
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
              setQuestion('')
            }
          }}
        />
      </div>
    </div>}
  {typeof questions === 'string'
    ? <p className={style.message}>{questions}</p>
    : questions.map(r => (
      <Question key={r.id} question={r} publication={publication} user={user} />
    ))}

</div> */ }

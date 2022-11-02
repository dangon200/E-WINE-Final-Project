// import react from 'react'
import { ImGlass } from 'react-icons/im'
import style from './CommentCard.module.css'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

export default function CommentCard (props) {
  const { createdAt, username, stars, text } = props.comentario
  return (
    <Container className='mt-2 bg-body shadow-lg' fluid>
      <Stack direction='horizontal' gap={5}>
        <div className={style.div1}>{username}</div>
        <div className={style.div2}>
          {[...Array(stars)].map((star, i) => {
            return (
              <label key={Math.random()}>
                <ImGlass
                  size={10}
                  color='#610a10'
                />
              </label>
            )
          })}
        </div>
      </Stack>
      <div class='row'>
        <div className={style.span} class='col-8'>{text}</div>
        <div className={style.div3} class='col-4'>{createdAt.toString().slice(0, 10)}</div>
      </div>
    </Container>
  )
}

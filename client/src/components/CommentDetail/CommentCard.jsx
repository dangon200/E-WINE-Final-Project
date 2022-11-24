// import react from 'react'
import { ImGlass } from 'react-icons/im'
// import style from './CommentCard.module.css'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
// import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

export default function CommentCard (props) {
  const { username, stars, text, image } = props.comentario
  /* const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  const formatoFecha = (fecha) => {
    fecha = fecha?.slice(0, 10).split('-')
    const dia = parseInt(fecha[2])
    const mes = meses[parseInt(fecha[1]) - 1]
    const año = fecha[0]
    return `${dia} de ${mes} del ${año}`
  } */
  return (
    <Container className='mt-3 bg-body shadow-lg' fluid>
      <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
        <ListItem direction='horizontal'>
          <ListItemAvatar>
            <Avatar sx={{ width: 64, height: 64 }} alt='Image' src={image} />
          </ListItemAvatar>
          <ListItemText
            class='m-2'
            primary={
              <Stack direction='horizontal' gap={3}>
                <div>
                  <Typography
                    sx={{ display: 'flex' }}
                    class='fs-2'
                    align='left'
                    size={10}
                    component='div'
                    variant='h5'
                  >{username}
                  </Typography>
                </div>
                <div>{[...Array(stars)].map((star, i) => {
                  return (
                    <label key={i}>
                      <ImGlass
                        size={16}
                        color='#610a10'
                      />
                    </label>
                  )
                })}
                </div>
              </Stack>
            }
            secondary={
              <>
                <Typography
                  sx={{ display: 'flex' }}
                  component='span'
                  variant='h5'
                >
                  {text}
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </Container>
  )
}

/* <Container className='mt-2 bg-body shadow-lg' fluid>
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
        </Container> */

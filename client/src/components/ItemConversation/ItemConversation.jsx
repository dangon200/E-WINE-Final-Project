import React from 'react'
import style from './ItemConversation.module.css'

import { format, register } from 'timeago.js'

register('es_ES', (number, index, totalSec) => [
  ['justo ahora', 'ahora mismo'],
  ['hace %s segundos', 'en %s segundos'],
  ['hace 1 minuto', 'en 1 minuto'],
  ['hace %s minutos', 'en %s minutos'],
  ['hace 1 hora', 'en 1 hora'],
  ['hace %s horas', 'in %s horas'],
  ['hace 1 dia', 'en 1 dia'],
  ['hace %s dias', 'en %s dias'],
  ['hace 1 semana', 'en 1 semana'],
  ['hace %s semanas', 'en %s semanas'],
  ['1 mes', 'en 1 mes'],
  ['hace %s meses', 'en %s meses'],
  ['hace 1 año', 'en 1 año'],
  ['hace %s años', 'en %s años']
][index])
const timeago = timestamp => format(timestamp, 'es_ES')

function ItemConversation ({ message, own, currentUser, friendId, conversations }) {
  let url = ''
  for (let x = 0; x < conversations.length; x++) {
    for (let y = 0; y < conversations[x].users.length; y++) {
      if (conversations[x].users[y].id === friendId) {
        url = conversations[x].users[y].image
      }
    }
  }

  return (
    <div className={own ? style.messageOwn : style.message}>
      <div className={style.messageTop}>
        {own && <img className={style.messageImage} src={currentUser.image ? currentUser.image : 'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png'} alt='' />}
        {!own && <img className={style.messageImage} src={url || 'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png'} alt='' />}
        <p className={own ? style.messageTextOwn : style.messageText}>{message.text}</p>
      </div>
      <div className={style.messageBottom}>{timeago(message.createdAt)}</div>
    </div>
  )
}

export default ItemConversation

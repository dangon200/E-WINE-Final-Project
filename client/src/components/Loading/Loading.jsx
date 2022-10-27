import React from 'react'
import s from './Loading.module.css'

export default function Loading () {
  return (
    <div className={s.content}>
      <img className={s.gif} src='https://media.discordapp.net/attachments/1029457851929862193/1030501456748478524/wine-animation.gif' alt='Loading gif' />
    </div>
  )
}

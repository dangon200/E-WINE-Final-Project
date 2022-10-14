import React from 'react'
import s from './button.module.css'
import { Link } from 'react-router-dom'

function Button (props) {
  const { content, link, type } = props
  if (!link && type) {
    return (
      <button type='submit' className={s.btn}>
        {content}
      </button>
    )
  }
  return (
    <>
      <Link to={link}>
        <button className={s.btn}>
          {content}
        </button>
      </Link>
    </>
  )
}

export default Button

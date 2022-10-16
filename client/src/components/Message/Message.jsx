import React from 'react'

import styles from './Message.module.css'

import Loading from '../Loading/Loading'

function Message (props) {
  return (
    <div className={styles.globalContainer}>
      <Loading />
      {props.message}
    </div>
  )
}

export default Message

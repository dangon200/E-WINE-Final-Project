import React from 'react'

import styles from './Message.module.css'

function Message (props) {
  return (
    <div className={styles.globalContainer}>{props.message}</div>
  )
}

export default Message

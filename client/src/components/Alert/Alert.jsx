import React from 'react'

import styles from './Alert.module.css'

function Alert (props) {
  return (
    <div className={styles.alert}>
      {props.message}
    </div>
  )
}

export default Alert

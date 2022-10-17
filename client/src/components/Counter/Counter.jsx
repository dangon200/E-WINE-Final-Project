import React, { useState } from 'react'
import style from './counter.module.css'

export default function Counter (props) {
  const [count, setCount] = useState(props.countFromPub)

  const updateCount = (param) => {
    if (param === 'rest' && count > 1) setCount(count - 1)
    if (param === 'add') setCount(count + 1)
  }
  return (
    <div className={style.pedido}>
      <button onClick={() => updateCount('rest')}> - </button>{count}<button onClick={() => updateCount('add')}> + </button>
    </div>
  )
}

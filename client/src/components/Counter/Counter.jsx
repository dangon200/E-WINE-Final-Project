import React, { useState } from 'react'
import style from './counter.module.css'
// import { BsFillPlusCircleFill, BsDashCircleFill } from 'react-icons/bs'

export default function Counter (props) {
  const [count, setCount] = useState(props.countFromPub)

  const updateCount = (param) => {
    if (param === 'rest' && count > 1) setCount(count - 1)
    if (param === 'add') setCount(count + 1)
  }
  return (
    <div className={style.pedido}>
      <div className={style.counter}>
        <button className={style.buttonMasMenos} onClick={() => updateCount('rest')}>{/* <BsDashCircleFill size={20} /> */}-</button>{count}<button className={style.buttonMasMenos} onClick={() => updateCount('add')}>{/* <BsFillPlusCircleFill size={20} /> */} +</button>
      </div>
    </div>
  )
}

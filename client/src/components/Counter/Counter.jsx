import React, { useEffect, useState } from 'react'
import style from './counter.module.css'
import { BsFillPlusCircleFill, BsDashCircleFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addCarrito } from '../../store/actions/actions'

export default function Counter (props) {
  const [count, setCount] = useState(props.countFromPub)
  const dispatch = useDispatch()
  const { id, price, title, image, name } = props

  const updateCount = (param, id) => {
    console.log(param, id, window.localStorage[id])
    if (param === 'rest' && count > 1) setCount(count - 1)
    if (param === 'add') setCount(count + 1)
  }

  useEffect(() => {
    window.localStorage[id] = JSON.stringify({ ...JSON.parse(window.localStorage[id]), count })
    dispatch(addCarrito({ id, price, title, image, name, count }))
    console.log(price, count)
  }, [count])// eslint-disable-line
  return (
    <div className={style.pedido}>
      <button className={style.buttonMasMenos} onClick={() => updateCount('rest', id)}><BsDashCircleFill size={20} /></button>{count}<button className={style.buttonMasMenos} onClick={() => updateCount('add', id)}><BsFillPlusCircleFill size={20} /></button>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import style from './counter.module.css'
// import { BsFillPlusCircleFill, BsDashCircleFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addCarrito } from '../../store/actions/actions'
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai'

export default function Counter (props) {
  const [count, setCount] = useState(props.count)
  const dispatch = useDispatch()
  const { id, price, title, image, name, stock } = props

  const updateCount = (param, id) => {
    console.log(param, id, window.localStorage[id])
    if (param === 'rest' && count > 1) setCount(count - 1)
    if (param === 'add' && count < stock) setCount(count + 1)
  }

  useEffect(() => {
    window.localStorage[id] = JSON.stringify({ ...JSON.parse(window.localStorage[id]), count })
    dispatch(addCarrito({ id, price, title, image, name, count, stock }))
  }, [count]) // eslint-disable-line
  return (
    <div className={style.pedido}>
      <button className={style.buttonMasMenos} onClick={() => updateCount('rest', id)}>
        <AiOutlineMinusSquare size={20} />
      </button>
      <span className='px-3 fs-3'>{count}</span>
      <button className={style.buttonMasMenos} onClick={() => updateCount('add', id)}>
        <AiOutlinePlusSquare size={20} />
      </button>
    </div>
  )
}

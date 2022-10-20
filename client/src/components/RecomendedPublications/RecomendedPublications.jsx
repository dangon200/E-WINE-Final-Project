import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecomendedPublications } from '../../store/actions/actions'
import Card from '../Card/Card'
import style from './recomendedPublications.module.css'

export default function RecomendedPublications (props) {
  const dispatch = useDispatch()
  const recomendedPublication = useSelector((state) => state.recomendedPublication)
  const { type, varietal, origin } = props
  console.log(type, varietal, origin)
  useEffect(() => {
    dispatch(getRecomendedPublications(type, varietal, origin))
  }, [dispatch, type, varietal, origin])
  return (
    <div className={style.container}>
      <div className={style.title}><h1>Recomendado para vos</h1></div>
      <div className={style.cards}>
        {Array.isArray(recomendedPublication) && recomendedPublication.length > 0
          ? recomendedPublication.slice(0, 3).map(p => {
            return (
              <Card
                id={p.id}
                title={p.title}
                name={p.name}
                image={p.image}
                price={p.price.toLocaleString('es-MX')}
                key={p.id}
              />
            )
          })
          : null}
      </div>
    </div>
  )
}

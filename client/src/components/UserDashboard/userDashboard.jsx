import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getByPublication } from '../../store/actions/actions'
/* import { getRecomendedPublications } from '../../store/actions/actions'
import Card from '../Card/Card' */
import style from './recomendedPublications.module.css'

export default function DashboardUser () {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)

  useEffect(() => {
    dispatch(getByPublication())
  }, [dispatch, favorites])

  return (
    <div className={style.container} />
  )
}

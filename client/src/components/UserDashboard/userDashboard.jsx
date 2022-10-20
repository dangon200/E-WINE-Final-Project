import { useDispatch, useSelector } from 'react-redux'
import { getRecomendedPublications } from '../../store/actions/actions'
import Card from '../Card/Card'
import style from './recomendedPublications.module.css'

export default function DashboardUser (props) {
  return (
    <div className={style.container} />
  )
}

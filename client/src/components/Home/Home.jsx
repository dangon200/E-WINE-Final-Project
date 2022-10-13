// import { style } from './home.module.css'
import { useEffect } from 'react'
import { getPublications, getProducts } from '../../store/actions/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function Home () {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const publications = useSelector(state => state.publications)
  useEffect(() => {
    dispatch(getProducts())
    dispatch(getPublications())
  }, [dispatch])
  console.log(products)
  console.log(publications)
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

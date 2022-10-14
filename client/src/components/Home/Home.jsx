import style from './home.module.css'
import { useEffect, useState } from 'react'
import { getPublications, getProducts } from '../../store/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card'
import Pagination from '../pagination/Pagination'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

export default function Home () {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const publications = useSelector(state => state.publications)
  const [page, setPage] = useState(1)
  const productsPerPage = 4
  const lastProductPerPage = page * productsPerPage
  const firstProductPerPage = lastProductPerPage - productsPerPage
  const currentPageProducts = publications.slice(firstProductPerPage, lastProductPerPage)

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getPublications())
  }, [dispatch])
  console.log(products)
  console.log(publications)

  function pagination (num) {
    setPage(num)
  }

  function paginationBef () {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  function paginationAft () {
    if (page < 2) {
      setPage(page + 1)
    }
  }

  return (
    <div>
      <h1>Home</h1>
      <div className={style.divPagination}>
        <button onClick={() => paginationBef()}><MdOutlineKeyboardArrowLeft className={style.buttonLeft} /></button>
        <Pagination
          publications={publications.length}
          productsPerPage={productsPerPage}
          pagination={pagination}
          page={page}
        />
        <button onClick={() => paginationAft()}><MdOutlineKeyboardArrowRight className={style.buttonRight} /></button>
      </div>
      <div className={style.containerProducts}>
        {currentPageProducts && currentPageProducts.map((p) => {
          return (
            <section className={style.sectionCards} key={p.id}>
              <Link to={`/product/${p.id}`}>
                <Card
                  name={p.title}
                  image={p.image}
                  price={p.price}
                  key={p.id}
                />
              </Link>
            </section>
          )
        })}
      </div>
    </div>
  )
}

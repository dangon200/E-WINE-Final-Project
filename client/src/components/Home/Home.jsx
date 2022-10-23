import style from './home.module.css'
import { useEffect, useState } from 'react'
import { getPublications, getProducts } from '../../store/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card'
import Pagination from '../pagination/Pagination'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Filters from '../Filters/Filters.jsx'
import SearchBar from '../SearchBar/SearchBar'
import Message from '../Message/Message'
import Footer from '../Footer/Footer'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
//  import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home () {
  const dispatch = useDispatch()
  // const products = useSelector(state => state.products)
  const publications = useSelector(state => state.publications)
  /* const error = useSelector(state => state.error) */
  const [page, setPage] = useState(1)
  const productsPerPage = 4
  const lastProductPerPage = page * productsPerPage
  const firstProductPerPage = lastProductPerPage - productsPerPage
  const currentPageProducts = publications.slice(firstProductPerPage, lastProductPerPage)

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getPublications())
  }, [dispatch])
  // console.log(products)
  // console.log(publications)

  const pages = []
  for (let i = 1; i <= Math.ceil(publications.length / productsPerPage); i++) {
    pages.push(i)
  }

  function pagination (num) {
    setPage(num)
  }

  function paginationBef () {
    setPage(page - 1)
  }

  function paginationAft () {
    setPage(page + 1)
  }

  return (
    <div className={style.globalContainer}>
      <div className={style.searchFilter}>
        <div className={style.filtersContainer}>
          <SearchBar />
          <Filters setPage={setPage} />
        </div>
      </div>
      {typeof publications !== 'string' &&
        <div className={style.divPagination}>
          {page !== 1 ? <div onClick={() => paginationBef()}><MdOutlineKeyboardArrowLeft className={style.buttonLeft} /></div> : null}
          <Pagination
            publications={publications.length}
            productsPerPage={productsPerPage}
            pagination={pagination}
            page={page}
          />
          {page !== pages.length && publications.length ? <div onClick={() => paginationAft()}><MdOutlineKeyboardArrowRight className={style.buttonRight} /></div> : null}
        </div>}
      <Row className={style.filter_products}>
        {/* <Col>
          <nav className={style.navFilters}>
            <div className={style.Filters}>
              <Filters setPage={setPage} />
            </div>
          </nav>
        </Col> */}
        <Col className={style.containerProducts}>
          {/* <div className={style.containerProducts}> */}
          {/* <div className={style.Filters}>
            FILTRAR
            <Filters />
          </div> */}
          {typeof publications !== 'string'
            ? currentPageProducts.map((p) => {
              return (
                <section className={style.sectionCards} key={p.id}>

                  <Card
                    id={p.id}
                    title={p.title}
                    name={p.name}
                    image={p.image}
                    price={p.price.toLocaleString('es-MX')}
                    key={p.id}
                  />

                </section>
              )
            })
            : <Message message={publications} />}
        </Col>
      </Row>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  )
}

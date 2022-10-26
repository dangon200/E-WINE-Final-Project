import style from './home.module.css'
import { useEffect, useState } from 'react'
import { getPublications, getProducts } from '../../store/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card'
import Pagination from '../pagination/Pagination'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Filters from '../Filters/Filters.jsx'
// import SearchBar from '../SearchBar/SearchBar'
import Message from '../Message/Message'
import Footer from '../Footer/Footer'
import image1 from '../../utils/images/vinos2-unsplash.jpg'
import image3 from '../../utils/images/vinos4-unsplash.jpg'
import Image from 'react-bootstrap/Image'
import Nav from '../Nav/Nav'
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
      <header className={style.header}>
        E-WINE
      </header>
      <nav>
        <Nav />
      </nav>
      <section>
        <Image
          className={style.image}
          src={image1}
          alt='image1'
        />
      </section>
      <div className={style.searchFilter}>
        <div className={style.filtersContainer}>
          {/* <SearchBar /> */}
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

      <div className={style.containerProducts}>
        {typeof publications !== 'string'
          ? currentPageProducts.map((p) => {
            return (
              <section className={style.sectionCards} key={p.id}>
                <div>
                  <Card
                    id={p.id}
                    title={p.title}
                    name={p.name}
                    image={p.image}
                    price={p.price}
                    key={p.id}
                  />
                </div>
              </section>
            )
          })
          : <Message message={publications} />}
      </div>
      <section className='mx-5 h-50'>
        <Image
          className={style.image2}
          src={image3}
          alt='image3'
        />
      </section>
      <div className={style.containerProducts}>
        {typeof publications !== 'string'
          ? currentPageProducts.map((p) => {
            return (
              <section className={style.sectionCards} key={p.id}>
                <div>
                  <Card
                    id={p.id}
                    title={p.title}
                    name={p.name}
                    image={p.image}
                    price={p.price}
                    key={p.id}
                  />
                </div>
              </section>
            )
          })
          : <Message message={publications} />}
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  )
}

import style from './home.module.css'
import { useEffect, useState, useContext } from 'react'
import { getPublications, getProducts, addNotification, setOnlineUsers } from '../../store/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card'
import Pagination from '../pagination/Pagination'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Filters from '../Filters/Filters.jsx'
import SearchBar from '../SearchBar/SearchBar'
import Message from '../Message/Message'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import vinos2 from '../../utils/images/vinos2-unsplash.jpg'
import { SocketContext } from '../../context/socket'

//  import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home () {
  const dispatch = useDispatch()
  const publications = useSelector(state => state.publications)
  /* const error = useSelector(state => state.error) */
  const [page, setPage] = useState(1)
  const productsPerPage = 8
  const lastProductPerPage = page * productsPerPage
  const firstProductPerPage = lastProductPerPage - productsPerPage
  const currentPageProducts = publications.slice(firstProductPerPage, lastProductPerPage)

  const socket = useContext(SocketContext)
  const user = useSelector(state => state.user)

  useEffect(() => {
    if (user) {
      socket.emit('addUser', user.id)
    }
  }, [user])

  useEffect(() => {
    socket.on('getFavorite', data => {
      console.log(data)
      dispatch(addNotification(data))
    })
    socket.on('getQuestion', data => {
      console.log(data)
      dispatch(addNotification(data))
    })
    socket.on('getBuy', data => {
      console.log(data)
      dispatch(addNotification(data))
    })
    socket.on('getSendDelivery', data => {
      console.log(data)
      dispatch(addNotification(data))
    })
    socket.on('getReceiveDelivery', data => {
      console.log(data)
      dispatch(addNotification(data))
    })
  }, [dispatch, socket])

  useEffect(() => {
    user &&
    socket.on('getUsers', users => {
      dispatch(setOnlineUsers(users))
    })
  }, [dispatch, user, socket])

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
        <img className={style.sectionImage} src={vinos2} alt='vinos' />
      </section>
      <div className={style.searchFilter}>
        <div className={style.filtersContainer}>
          <SearchBar setPage={setPage} className={style.searchBar} />
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
      <div className={`${style.containerProducts}`}>
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
                    userId={p.userId}
                    key={p.id}
                    count={p.count}
                    socket={socket}
                    stock={p.count}
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

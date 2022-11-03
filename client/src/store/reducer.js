// import data from '../dataExample.json'

const initialState = {
  allPublications: [],
  publications: [],
  publicationsAdm: [],
  publicationBanned: {},
  products: [],
  allProducts: [],
  detailPublication: {},
  detailProduct: {},
  favorites: [],
  carrito: [],
  publicationsUserFavorites: [],
  recomendedPublication: [],
  user: '',
  users: [],
  userDetail: {},
  userSommelier: {},
  buy: {},
  buys: [],
  sales: [],
  questions: [],
  reviewBuys: [],
  reviewPuntaje: [],
  usersByProvinces: {},
  allVarietals: [],
  detailVarietal: {},
  userDetail2: {},
  login: true,
  itemsDetail: [],
  reviewUser: [],
  notifications: [],
  onlineUsers: [],
  popularProduts: [],
  reviewsPublication: [],
  allReviews: [],
  paymentAmount: ''
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_PUBLICATIONS':
      return { ...state, allPublications: action.payload, publications: action.payload, error: action.payload }
    case 'GET_BY_ID_PUBLICATION':
      return { ...state, detailPublication: action.payload }
    case 'POST_PUBLICATION':
      return { ...state, detailPublication: action.payload }
    case 'GET_PRODUCTS':
      return { ...state, allProducts: action.payload, products: action.payload }
    case 'GET_PRODUCTS_REVIEWS':
      return { ...state, products: action.payload }
    case 'GET_BY_ID_PRODUCT':
      return { ...state, detailProduct: action.payload }
    case 'POST_PRODUCT':
      return { ...state, detailProduct: action.payload }
    case 'POST_REVIEW':
      return { ...state, products: action.payload }
    case 'SEARCH_PRODUCT_BY_NAME':
      return { ...state, detailProduct: action.payload }
    case 'FILTER_PUBLICATIONS':
      return { ...state, publications: action.payload }
    case 'CLEAR_FILTER':
      return { ...state, publications: state.allPublications }
    case 'GET_FAVORITES_ID':
      return { ...state, favorites: action.payload }
    case 'GET_PUBLICATIONS_USERFAVORITES':
      return { ...state, publicationsUserFavorites: [...state.publicationsUserFavorites, action.payload] }
    case 'REMOVE_PUBLICATIONS_USERFAVORITES':
      return { ...state, publicationsUserFavorites: [...state.publicationsUserFavorites.filter(p => p.id !== action.payload)] }
    case 'ADD_FAVORITE':
      return { ...state, favorites: action.payload }
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: action.payload }
    case 'ADD_CARRITO':
      return { ...state, carrito: [...state.carrito.filter(p => p.id !== action.payload.id), action.payload].sort((a, b) => parseInt(a.price) - parseInt(b.price)) }
    case 'REMOVE_CARRITO':
      return { ...state, carrito: state.carrito.filter(item => item.id !== action.payload) }
    case 'CLEAR_CARRITO':
      return { ...state, carrito: [], buy: {} }
    case 'RECOMENDED_PUBLICATIONS':
      return { ...state, recomendedPublication: action.payload }
    case 'LOGIN_USER':
      return { ...state, user: action.payload }
    case 'LOGOUT_USER':
      return { ...state, user: '' }
    case 'POST_STRIPE':
      return { ...state, buy: action.payload }
    case 'GET_QUESTIONS':
      return { ...state, questions: action.payload }
    case 'ADD_QUESTION':
      return { ...state, questions: action.payload }
    case 'ADD_ANSWER':
      return { ...state, questions: action.payload }
    case 'RENDER_MODAL_LOGIN':
      return { ...state, login: !state.login }
    case 'GET_USERS':
      return { ...state, users: action.payload }
    case 'GET_USER_BUYS':
      return { ...state, buys: action.payload }
    case 'GET_ALL_BUYS':
      return { ...state, buys: action.payload }
    case 'GET_USER_SALES':
      return { ...state, sales: action.payload }
    case 'GET_DELIVERY_STATUS':
      return { ...state, sales: action.payload }
    case 'GET_USER_BANNED':
      return { ...state, userDetail: action.payload }
    case 'GET_PUBLICATIONS_ALL':
      return { ...state, publicationsAdm: action.payload }
    case 'GET_PUBLICATION_BANNED':
      return { ...state, publicationBanned: action.payload }
    case 'GET_USER_SOMMELIER':
      return { ...state, userSommelier: action.payload }
    case 'GET_USER_PROVINCES':
      return { ...state, usersByProvinces: action.payload }
    case 'GET_ALL_VARIETALS':
      return { ...state, allVarietals: action.payload }
    case 'POST_VARIETALS':
      return { ...state, allVarietals: action.payload }
    case 'ADD_REVIEWBUY':
      return { ...state, reviewBuys: action.payload }
    case 'GET_REVIEWBUY_ID':
      return { ...state, reviewPuntaje: action.payload }
    case 'GET_REVIEWBUYS_ID':
      return { ...state, reviewBuys: action.payload }
    case 'GET_USER_ADMIN':
      return { ...state, userDetail2: action.payload }
    case 'GET_ITEMS_DETAIL':
      return { ...state, itemsDetail: action.payload }
    case 'GET_POPULAR_PRODUCTS':
      return { ...state, popularProduts: action.payload }
    case 'UPDATE_PROFILE_PICTURE':
      return { ...state, user: action.payload }
    case 'GET_USERBY_ID':
      return { ...state, user: action.payload }
    case 'GET_REVIEW_BYUSER':
      return { ...state, reviewUser: action.payload }
    case 'ADD_NOTIFICATION':
      return { ...state, notifications: Array.from(new Set([action.payload, ...state.notifications])) }
    case 'CLEAR_NOTIFICATIONS':
      return { ...state, notifications: [] }
    case 'SET_ONLINE_USERS':
      return { ...state, onlineUsers: action.payload }
    case 'REVIEWS_PUBLICATIONS':
      return { ...state, reviewsPublication: action.payload }
    case 'SET_PAYMENT_AMOUNT':
      return { ...state, paymentAmount: action.payload }
    case 'GET_REVIEWS':
      return { ...state, allReviews: action.payload }
    default:
      return { ...state }
  }
}

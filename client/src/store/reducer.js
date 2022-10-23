// import data from '../dataExample.json'

const initialState = {
  allPublications: [],
  publications: [],
  products: [],
  allProducts: [],
  detailPublication: {},
  detailProduct: {},
  favorites: [],
  carrito: [],
  recomendedPublication: [],
  user: '',
  buy: {},
<<<<<<< HEAD
  questions: []
=======
  login: true
>>>>>>> 0b8750e89561c40014f0494cea6f446195071f5c
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
    case 'GET_BY_ID_PRODUCT':
      return { ...state, detailProduct: action.payload }
    case 'POST_PRODUCT':
      return { ...state, detailProduct: action.payload }
    case 'SEARCH_PRODUCT_BY_NAME':
      return { ...state, detailProduct: action.payload }
    case 'FILTER_PUBLICATIONS':
      return { ...state, publications: action.payload }
    case 'CLEAR_FILTER':
      return { ...state, publications: state.allPublications }
    case 'GET_FAVORITES_ID':
      return { ...state, favorites: action.payload }
    case 'ADD_FAVORITE':
      return { ...state, favorites: action.payload }
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: action.payload }
    case 'ADD_CARRITO':
      return { ...state, carrito: [...state.carrito.filter(p => p.id !== action.payload.id), action.payload].sort((a, b) => parseInt(a.price) - parseInt(b.price)) }
    case 'REMOVE_CARRITO':
      return { ...state, carrito: state.carrito.filter(item => item.id !== action.payload) }
    case 'RECOMENDED_PUBLICATIONS':
      return { ...state, recomendedPublication: action.payload }
    case 'LOGIN_USER':
      return { ...state, user: action.payload }
    case 'LOGOUT_USER':
      return { ...state, user: '' }
    case 'POST_STRIPE':
<<<<<<< HEAD
      return { ...state, buy: action.payload }
    case 'GET_QUESTIONS':
      return { ...state, questions: action.payload }
    case 'ADD_QUESTION':
      return { ...state, questions: action.payload }
    case 'ADD_ANSWER':
      return { ...state, questions: action.payload }

=======
      return { ...state, compra: action.payload }
    case 'RENDER_MODAL_LOGIN':
      return { ...state, login: !state.login }
>>>>>>> 0b8750e89561c40014f0494cea6f446195071f5c
    default:
      return { ...state }
  }
}

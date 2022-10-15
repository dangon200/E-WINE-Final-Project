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
  error: ''
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
    case 'ORDER_PUBLICATIONS':
      return { ...state, publications: action.payload }
    case 'FILTER_VARIETAL':
      return { ...state, publications: action.payload, allPublications: action.payload }
    case 'FILTER_TYPE':
      return { ...state, publications: action.payload }
    case 'FILTER_ORIGIN':
      return { ...state, publications: action.payload }
    case 'ADD_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.payload] }
    case 'REMOVE_FAVORITES':
      return { ...state, favorites: state.favorites.filter(fav => fav !== action.payload) }
    case 'ADD_CARRITO':
      return { ...state, carrito: [...state.carrito, action.payload] }
    case 'REMOVE_CARRITO':
      return { ...state, carrito: state.carrito.filter(item => item !== action.payload) }
    default:
      return { ...state }
  }
}

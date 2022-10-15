import axios from 'axios'
const urlApi = 'https://e-winespf.herokuapp.com'

export function getPublications () {
  return async function (dispatch) {
    try {
      const api = await axios.get(`${urlApi}/publications`)
      return dispatch({
        type: 'GET_PUBLICATIONS',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getByPublication (id) {
  return async function (dispatch) {
    try {
      const api = await axios.get(`${urlApi}/publications/${id}`)
      return dispatch({
        type: 'GET_BY_ID_PUBLICATION',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function postPublication (data) {
  return async function (dispatch) {
    try {
      const api = await axios.post(`${urlApi}/publications`, data)
      return dispatch({
        type: 'POST_PUBLICATION',
        Headers: { 'content-type': 'application/json' },
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getProducts () {
  return async function (dispatch) {
    try {
      const api = await axios.get(`${urlApi}/products`)
      return dispatch({
        type: 'GET_PRODUCTS',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getByIdProduct (id) {
  return async function (dispatch) {
    try {
      const api = await axios.get(`${urlApi}/products/${id}`)
      return dispatch({
        type: 'GET_BY_ID_PRODUCT',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function postProduct (data) {
  return async function (dispatch) {
    try {
      const api = await axios.post(`${urlApi}/products`, data)
      return dispatch({
        type: 'POST_PRODUCT',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// pending
export const searchByNameProduct = (name) => {
  return async function (dispatch) {
    return fetch(`${urlApi}/products?name=${name}`)
      .then((respuesta) => respuesta.json())
      .then((infoProductName) => {
        dispatch({ type: 'SEARCH_PRODUCT_BY_NAME', payload: infoProductName })
      })
  }
}

// Favorites

export const addFavorites = (id) => {
  return {
    type: 'ADD_FAVORITES',
    payload: id
  }
}

export const removeFavorites = (id) => {
  return {
    type: 'REMOVE_FAVORITES',
    payload: id
  }
}

// CARRITO

export const addCarrito = (id) => {
  return {
    type: 'ADD_CARRITO',
    payload: id
  }
}

export const removeCarrito = (id) => {
  return {
    type: 'REMOVE_CARRITO',
    payload: id
  }
}

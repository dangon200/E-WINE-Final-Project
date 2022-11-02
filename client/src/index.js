import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './App.css'

import { Provider } from 'react-redux'
import store from './store/index'

import { BrowserRouter } from 'react-router-dom'

import { SocketContext, socket } from './context/socket'

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <SocketContext.Provider value={socket}>
        <App className='App' />
      </SocketContext.Provider>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

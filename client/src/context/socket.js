import socketio from 'socket.io-client'
import React from 'react'

export const socket = socketio.connect('https://websocketpf.herokuapp.com/')
export const SocketContext = React.createContext()

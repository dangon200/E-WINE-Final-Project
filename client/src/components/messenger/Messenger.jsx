import React, { useState, useEffect, useRef } from 'react'
import ChatOnline from '../ChatOnline/ChatOnline'
import Conversations from '../Conversations/Conversations'
import ItemConversation from '../ItemConversation/ItemConversation'
import style from './Messenger.module.css'
import axios from 'axios'

import { io } from 'socket.io-client'

import { useSelector } from 'react-redux'

function Messenger () {
  const user = useSelector(state => state.user)
  const [conversations, setConversations] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const scrollRef = useRef()
  const socket = useRef()
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])

  useEffect(() => {
    socket.current = io('https://websocketpf.herokuapp.com/')
    socket.current.on('getMessage', data => {
      setArrivalMessage({
        userId: data.userId,
        text: data.text,
        createdAt: Date.now()
      })
    })
    socket.current.on('getConversation', data => {
      setConversations(prev => [data.data, ...prev])
    })
  }, [conversations])

  useEffect(() => {
    const includesId = (userId) => {
      for (let x = 0; x < currentChat?.users.length; x++) {
        if (currentChat.users[x].id === userId) return true
      }
      return false
    }
    arrivalMessage && includesId(arrivalMessage.userId) &&
    setMessages(prev => [...prev, arrivalMessage])
  }, [arrivalMessage, currentChat])

  useEffect(() => {
    user &&
    socket.current.emit('addUser', user.id)
    socket.current.on('getUsers', users => {
      setOnlineUsers(users)
    })
  }, [user])

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`https://e-winespf.herokuapp.com/conversations/user/${user?.id}`)
        setConversations(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getConversations()
  }, [user.id])

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`https://e-winespf.herokuapp.com/messages/${currentChat?.id}`)
        setMessages(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getMessages()
  }, [currentChat])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const message = {
      conversationId: currentChat.id,
      userId: user.id,
      text: newMessage
    }

    const receiver = currentChat.users.find(u => u.id !== user.id)

    socket.current.emit('sendMessage', {
      userId: user.id,
      receiverId: receiver.id,
      text: newMessage
    })

    try {
      const res = await axios.post('https://e-winespf.herokuapp.com/messages', message)
      setMessages([...messages, res.data])
      setNewMessage('')
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages])

  return (
    <div className={style.messenger}>
      <div className={style.chatMenu}>
        <div className={style.chatMenuWrapper}>
          {conversations.map(c => (
            <div key={c.id} onClick={() => setCurrentChat(c)}>

              <Conversations key={c.id} conversation={c} currentUser={user} currentChat={currentChat} />
            </div>
          )
          )}
        </div>
      </div>
      <div className={style.chatBox}>
        <div className={style.chatBoxWrapper}>
          {currentChat
            ? (
              <>
                <div id='chat' className={style.chatBoxTop}>
                  {messages.map(m => (
                    <div key={m.id} ref={scrollRef}>
                      <ItemConversation message={m} own={m.userId === user.id} />
                    </div>))}
                </div>
                <div className={style.chatBoxBottom}>
                  <input className={style.chatMessageInput} type='text' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder='Escriba su mensaje...' />
                  <button className={style.chatSubmitButton} onClick={handleSubmit}>Enviar</button>
                </div>
              </>)
            : <span className={style.noConversationText}>Abre un conversacion para empezar!</span>}
        </div>
      </div>
      <div className={style.chatOnline}>
        <div className={style.chatOnlineWrapper}>
          <ChatOnline onlineUsers={onlineUsers} currentId={user.id} setCurrentChat={setCurrentChat} conversations={conversations} setConversations={setConversations} socket={socket} />
        </div>
      </div>
    </div>
  )
}

export default Messenger

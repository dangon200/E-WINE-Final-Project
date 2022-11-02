import React, { useState, useEffect, useRef, useContext } from 'react'
import ChatOnline from '../ChatOnline/ChatOnline'
import Conversations from '../Conversations/Conversations'
import ItemConversation from '../ItemConversation/ItemConversation'
import style from './Messenger.module.css'
import axios from 'axios'
import SidebarMessenger from '../SidebarMessenger/SidebarMessenger'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
/* import { io } from 'socket.io-client' */

import { useSelector } from 'react-redux'
import { SocketContext } from '../../context/socket'

function Messenger () {
  const user = useSelector(state => state.user)
  const [conversations, setConversations] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const scrollRef = useRef()
  /*  const socket = useRef() */
  const socket = useContext(SocketContext)
  const [arrivalMessage, setArrivalMessage] = useState(null)
  /* const [onlineUsers, setOnlineUsers] = useState([]) */
  const onlineUsers = useSelector(state => state.onlineUsers)

  /*   useEffect(() => {
    /* socket.current = io('https://websocketpf.herokuapp.com/')
    socket.current = io('http://localhost:8900')
  }, [socket]) */

  useEffect(() => {
    socket.on('getMessage', data => {
      setArrivalMessage({
        userId: data.userId,
        text: data.text,
        createdAt: Date.now()
      })
    })
    socket.on('getConversation', data => {
      setConversations(prev => [data.data, ...prev])
    })
  }, [])

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
    const getConversations = async () => {
      try {
        const res = await axios.get(`https://e-winespf.herokuapp.com/conversations/user/${user.id}`)
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
        if (currentChat) {
          const res = await axios.get(`https://e-winespf.herokuapp.com/messages/${currentChat.id}`)
          setMessages(res.data)
        }
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

    socket.emit('sendMessage', {
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
      <div className={`col-auto my-4 mx-4 rounded-5 ${style.sidebar} `}>
        <SidebarMessenger />
      </div>
      <div className={style.chatMenu}>
        <div className={style.chatMenuWrapper}>
          <p className={style.messages}>Messages</p>
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
          {/* <nav className='p-4 bg-secondary bg-opacity-25 text-dark fs-4'>
            Hola
          </nav> */}
          {currentChat
            ? (
              <>
                <div id='chat' className={style.chatBoxTop}>
                  {messages.map(m => (
                    <div key={m.id} ref={scrollRef}>
                      <ItemConversation message={m} own={m.userId === user.id} currentUser={user} friendId={m.userId} conversations={conversations} />
                    </div>))}
                </div>
                <div className={style.chatBoxBottom}>
                  <input
                    className={style.chatMessageInput} type='text' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder='Escriba su mensaje...'
                  />
                  <button className={style.chatSubmitButton} onClick={handleSubmit}><FiSend /></button>
                </div>
              </>)
            : <div className='d-flex flex-column justify-content-center align-items-center gap-4'><BsFillChatDotsFill size={50} color='#91091E' /><span className={style.noConversationText}>Abre un conversacion para empezar!</span></div>}
        </div>
      </div>
      <div className={style.chatOnline}>
        <div className={style.chatOnlineWrapper}>
          <h2 style={{ color: '#484D55' }} className='fw-semibold'>Lista de sommeliers</h2>
          <ChatOnline onlineUsers={onlineUsers} currentId={user.id} setCurrentChat={setCurrentChat} conversations={conversations} setConversations={setConversations} socket={socket} />
        </div>
      </div>
    </div>
  )
}

export default Messenger

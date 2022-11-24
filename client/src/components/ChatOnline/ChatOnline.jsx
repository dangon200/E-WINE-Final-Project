import React, { useEffect, useState } from 'react'
import style from './ChatOnline.module.css'
import axios from 'axios'
// const urlApi = 'http://localhost:3001'
const urlApi = 'https://e-winespf.herokuapp.com'

function ChatOnline ({ onlineUsers, currentId, setCurrentChat, conversations, setConversations, socket }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${urlApi}/users/filter/${currentId}`)
        setUsers(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getUsers()
  }, [currentId])

  const isOnline = (user) => {
    for (let x = 0; x < onlineUsers.length; x++) {
      if (onlineUsers[x].userId === user.id) return true
    }
    return false
  }

  const isInConversations = (conversation) => {
    for (let x = 0; x < conversations.length; x++) {
      if (conversations[x].id === conversation.id) return true
    }

    return false
  }

  const handleClick = async (user) => {
    try {
      const res = await axios.get(`${urlApi}/conversations/find/${currentId}/${user.id}`)
      console.log(res.data)
      setCurrentChat(res.data)

      if (!isInConversations(res.data)) {
        socket.current.emit('sendConversation', {
          userId: currentId,
          receiverId: user.id,
          data: res.data
        })
        setConversations([...conversations, res.data])
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={style.chatOnline}>
      {users.map(user => (
        <div className={style.chatOnlineFriend} key={user.id} onClick={() => handleClick(user)}>
          <div className={style.chatOnlineImgContainer}>
            <img className={style.chatOnlineImg} src={user.image ? user.image : 'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png'} alt='' />
            <div className={isOnline(user) ? style.chatOnlineBadge : style.chatOfflineBadge} />
          </div>
          <span className={style.chatOnlineName}>{user.username}</span>
        </div>
      ))}
    </div>
  )
}

export default ChatOnline

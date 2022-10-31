/* import axios from 'axios'
import React, { useState, useEffect } from 'react' */
import style from './Conversations.module.css'

function Conversations ({ conversation, currentUser, currentChat }) {
  /* const [user, setUser] = useState(null) */
  const friend = conversation.users.find(u => u.id !== currentUser.id)
  /*   useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3002/user/${friend.id}`)
        console.log(res.data)
        setUser(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getUser()
  }, [conversation, currentUser]) */

  return (
    <div className={currentChat?.id === conversation.id ? style.conversationActive : style.conversation}>
      <img className={style.conversationImage} src={friend?.image ? friend.image : 'https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png'} alt='' />
      <span className={style.conversationName}>{friend?.username}</span>
    </div>
  )
}

export default Conversations

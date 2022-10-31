import { useSelector } from 'react-redux'
// import Button from 'react-bootstrap/esm/Button'

export default function NavProfile () {
  const user = useSelector(state => state.user)
  return (
    <div className='d-flex flex-row '>
      <div>
        {user.username}
      </div>
      <div>
        <img src={user.image} alt={user.image} />
      </div>
    </div>
  )
}

import useEffect from 'react'
import jwtdecode from 'jwt-decode'
import Cookies from 'universal-cookie'
import { useDispatch } from 'react-redux'
import { loginUser, getFavorites } from '../../store/actions/actions'
// const urlApi = 'http://localhost:3001'
const urlApi = 'https://e-winespf.herokuapp.com'

export default function GoogleBtn () {
  const cookies = new Cookies()
  const dispatch = useDispatch()

  function handleCallbackResponse (response) {
    const userObject = jwtdecode(response.credential)
    fetch(`${urlApi}/users/email/` + userObject.email)
      .then(res => res.json())
      .then(data => {
        if (!data) {
          fetch(`${urlApi}/users/`, {
            method: 'POST',
            body: JSON.stringify({
              email: userObject.email,
              password: 'password',
              region: 'null',
              username: userObject.name,
              image: userObject.picture
            }),
            headers: {
              'Content-type': 'application/json'
            },
            credentials: 'include'
          })

            .then((res) => res.json())
            .then((data) => {
              console.log(data)
            })
        }
        fetch(`${urlApi}/users/login`, {
          method: 'POST',
          body: JSON.stringify({
            email: userObject.email,
            password: 'password'
          }),
          headers: {
            'Content-type': 'application/json'
          },
          credentials: 'include'
        })

          .then((res) => res.json())
          .then((data) => {
            if (typeof data !== 'string') {
              cookies.set('TOKEN', data, {
                path: '/'
              })
              dispatch(loginUser(data.user))
              dispatch(getFavorites(data.user.id))
              setSuccess(true)
              setTimeout(() => { setSuccess(false) }, 3000)
            } else {
              setError(!err)
              setTimeout(() => {
                setError(false)
              }, 3000)
            }
          })
      }

      )
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '299866186395-evt7gful4jbfl5bctqnbp74c9a8i6h88.apps.googleusercontent.com',
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById('buttonChrome'),
      { theme: 'outline', size: 'large' }
    )
  }, [])// eslint-disable-line

  const [err, setError] = useState(false)// eslint-disable-line
  const [success, setSuccess] = useState(false)// eslint-disable-line

  return (
    <div
      className=''
      id='buttonChrome'
    />
  )
}

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
// import { Link } from 'react-router-dom'

export default function Widgets ({ type, cantidadUsers, dateUsers }) {
  let data
  // temporary
  const amount = 100
  // const diff = 20

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        cantidadUsers: cantidadUsers + ' usuarios registrados' || false,
        date: dateUsers,
        icon: <PersonOutlineOutlinedIcon className='icon' />
      }
      break
    case 'order':
      data = {
        title: 'ÓRDENES',
        isMoney: false,
        icon: <ShoppingCartOutlinedIcon className='icon' />
      }
      break
    case 'earning':
      data = {
        title: 'GANANCIAS',
        isMoney: true,
        icon: <MonetizationOnOutlinedIcon className='icon' />
      }
      break
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        icon: <AccountBalanceWalletIcon className='icon' />
      }
      break

    default:
      break
  }
  return (
    <div className='container'>
      <div className='row justify-content-between'>
        <div className='col d-flex flex-column bg-white p-5'>
          <span name='title' className='flex-column'>{data.title}</span>
          <span className='flex-column'>{data.isMoney && '$'}{amount}</span>
          <span className='flex-column'>{data.link}</span>
        </div>
        <div className='col d-flex flex-column bg-white p-5'>
          <div className='percentage'>
            <KeyboardArrowUpIcon />
            {data.cantidadUsers}
          </div>

          {data.icon}
        </div>
      </div>
    </div>
  )
}

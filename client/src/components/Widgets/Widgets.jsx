import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'

export default function Widgets ({ type }) {
  let data
  // temporary
  const amount = 100
  const diff = 20

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: <PersonOutlineOutlinedIcon className='icon' />
      }
      break
    case 'order':
      data = {
        title: 'ÓRDENES',
        isMoney: false,
        link: 'Ver todas las órdenes',
        icon: <ShoppingCartOutlinedIcon className='icon' />
      }
      break
    case 'earning':
      data = {
        title: 'GANANCIAS',
        isMoney: true,
        link: 'Ver ganancias netas',
        icon: <MonetizationOnOutlinedIcon className='icon' />
      }
      break
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'Ver detalles',
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
            {diff}%
          </div>
          {data.icon}
        </div>
      </div>
    </div>
  )
}

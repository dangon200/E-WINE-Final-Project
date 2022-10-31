import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
// import { Link } from 'react-router-dom'

export default function Widgets ({ type, cantidadUsers, dateUsers, cantidadPublications, cantidadProducts, cantidadNewUsers, publicationsNoIsBanned, cantidadBuys, totalBuys, cantidadLastBuys }) {
  let data
  // temporary
  // const amount = 100
  // const diff = 20

  switch (type) {
    case 'user':
      data = {
        title: 'USUARIOS',
        isMoney: false,
        cantidadUsers: cantidadUsers + ' usuarios registrados' || false,
        date: dateUsers,
        cantidadNewUsers: cantidadNewUsers + ' usuarios nuevos',
        icon: <PersonOutlineOutlinedIcon className='icon' />
      }
      break
    case 'publications':
      data = {
        title: 'PUBLICACIONES',
        isMoney: false,
        cantidadUsers: cantidadPublications + ' publicaciones a la fecha' || false,
        publicationsNoIsBanned: publicationsNoIsBanned + ' publicaciones no Banned',
        icon: <ShoppingCartOutlinedIcon className='icon' />
      }
      break
    case 'products':
      data = {
        title: 'PRODUCTOS',
        isMoney: true,
        cantidadUsers: cantidadProducts + ' productos',
        icon: <MonetizationOnOutlinedIcon className='icon' />
      }

      break
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        cantidadUsers: cantidadBuys + ' compras realizadas',
        totalBuys: totalBuys + ' dinero en transacciones',
        cantidadLastBuys: cantidadLastBuys + ' nuevas compras',
        icon: <AccountBalanceWalletIcon className='icon' />
      }
      break
    default:
      break
  }
  return (
    <div className='container border border-dark border-2 w-10'>
      <div className='row justify-content-between'>
        <div className=''>
          <span name='title' className='flex-column'>{data.title}</span>
          {/* <span className='flex-column'>{data.isMoney && '$'}{'35'}</span> */}
          <span className='flex-column'>{data.link}</span>
        </div>
        <div className='col d-flex flex-column bg-white p-5'>
          <div className='percentage'>
            <KeyboardArrowUpIcon />
            {data.cantidadUsers}
            <br />
            {data.cantidadNewUsers}
            {data.publicationsNoIsBanned}
            {data.totalBuys}
            <br />
            {data.cantidadLastBuys}
          </div>

          {data.icon}
        </div>
      </div>
    </div>

  // <div className='container'>
  //   <div className='row justify-content-between'>
  //     <div className='col d-flex flex-column bg-white p-5'>
  //       <span name='title' className='flex-column'>{data.title}</span>
  //       <span className='flex-column' />
  //       <span className='flex-column'>{data.link}</span>
  //     </div>
  //     <div className='col d-flex flex-column bg-white p-5'>
  //       <div className='percentage'>
  //         <KeyboardArrowUpIcon />
  //         {data.cantidadUsers}
  //       </div>

  //       {data.icon}
  //     </div>
  //   </div>
  // </div>
  )
}

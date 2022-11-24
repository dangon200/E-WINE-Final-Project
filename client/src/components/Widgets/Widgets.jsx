// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import s from './Widgets.module.css'
// import { Link } from 'react-router-dom'

export default function Widgets ({ type, cantidadUsers, dateUsers, cantidadPublications, cantidadProducts, cantidadNewUsers, publicationsNoIsBanned, cantidadBuys, totalBuys, cantidadLastBuys }) {
  let data
  // temporary
  // const amount = 100
  // const diff = 20

  switch (type) {
    case 'user':
      data = {
        title: 'Usuarios',
        isMoney: false,
        cantidadUsers: cantidadUsers + ' total',
        date: dateUsers,
        cantidadNewUsers: cantidadNewUsers + ' nuevos',
        icon: <PersonOutlineOutlinedIcon style={{ fontSize: 50 }} className={s.icon} />
      }
      break
    case 'publications':
      data = {
        title: 'Publicaciones',
        isMoney: false,
        cantidadUsers: cantidadPublications + ' total' || false,
        publicationsNoIsBanned: publicationsNoIsBanned + ' Activo',
        icon: <ShoppingCartOutlinedIcon style={{ fontSize: 50 }} className={s.icon} />
      }
      break
    case 'products':
      data = {
        title: 'Productos',
        isMoney: true,
        cantidadUsers: cantidadProducts + ' total',
        icon: <MonetizationOnOutlinedIcon style={{ fontSize: 50 }} className={s.icon} />
      }

      break
    case 'balance':
      data = {
        title: 'Balance',
        isMoney: true,
        cantidadUsers: cantidadBuys + ' total',
        totalBuys: '$ ' + totalBuys,
        cantidadLastBuys: cantidadLastBuys + ' esta semana',
        icon: <AccountBalanceWalletIcon style={{ fontSize: 50 }} className={s.icon} />
      }
      break
    default:
      break
  }
  return (
    <div className='container-fluid w-10 '>
      <div className={`row card info-card sales-card ${s.card}`}>
        <div className='col-12 card-body'>
          <div className=''>
            <h3 name='title' className={`card-title ${s.title}`}>{data.title}</h3>
            {/* <span className='flex-column'>{data.isMoney && '$'}{'35'}</span> */}
            <span className='flex-column'>{data.link}</span>
          </div>
          <div className='d-flex justify-content-center '>
            <div className='col-3 flex-column justify-content-center py-5'>
              {data.icon}
              <h4 className={s.ppal}>
                {data.cantidadUsers}
              </h4>
            </div>
            <div className='pt-5 ps-5 justify-content-end'>

              <div className={` px-4  fw-bold ${s.datos}`}>
                <InfoOutlinedIcon style={{ fontSize: 25 }} />
                <div className={s.masDatos}>
                  {data.cantidadNewUsers}
                  {data.publicationsNoIsBanned}
                  {data.totalBuys}
                </div>
              </div>
              <div className={s.sec}>
                {data.cantidadLastBuys}
              </div>
            </div>

          </div>
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

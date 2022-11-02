import React, { useEffect } from 'react'
import s from './Charts.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../../store/actions/actions'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
)

function UsersBannedChart () {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  const usersBanned = users.filter(e => e.isBanned === true)
  const usersNotBanned = users.filter(e => e.isBanned === false)
  const dataGraphic = () => {
    return ({
      labels: ['Usuarios Baneados', 'Usuarios Habilitados'],
      datasets: [
        {
          label: 'Usuarios Habilitados/Banneados',
          data: [usersBanned.length, usersNotBanned.length],
          borderColor: ['rgb(42, 157, 143,1)',
            'rgba(244, 162, 97,1)'],
          backgroundColor: ['rgb(42, 157, 143,0.2)',
            'rgba(244, 162, 97,0.2)']
        }
      ]
    })
  }
  useEffect(() => { dispatch(getUsers()) }, []) //eslint-disable-line
  return (
    <div className={`container-fluid px-0 ${s.div}`}>
      <div className={`row justify-content-center ${s.div2}`}>
        <h2>Usuarios Habilitados/Baneados</h2>
        <div className='w-50 h-50 d-flex justify-content-end'>
          <Doughnut
            data={dataGraphic()}
          />
        </div>
      </div>
    </div>
  )
}

export default UsersBannedChart

// ESTO ES SI QUIERO QUE SE RENDERICE CUANDO CLICK EN EL BOTÓN

// import React, { useState, useEffect } from 'react'
// import s from './Charts.module.css'
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   ArcElement,
//   Legend
// } from 'chart.js'
// import { Doughnut } from 'react-chartjs-2'
// import { useSelector, useDispatch } from 'react-redux'
// import { getUsers } from '../../store/actions/actions'

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   ArcElement,
//   Legend
// )

// function UsersBannedChart () {
//   const users = useSelector(state => state.users)
//   const dispatch = useDispatch()
//   const [chartData, setChartData] = useState({
//     datasets: []
//   })

//   const usersBanned = users.filter(e => e.isBanned === true)
//   const usersNotBanned = users.filter(e => e.isBanned === false)
//   const dataGraphic = () => {
//     setChartData({
//       labels: ['Usuarios Habilitados', 'Usuarios Baneados'],
//       datasets: [
//         {
//           label: 'Usuarios Habilitados/Banneados',
//           data: [usersBanned.length, usersNotBanned.length],
//           borderColor: ['rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)'],
//           backgroundColor: ['rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)']
//         }
//       ]
//     })
//   }
//   useEffect(() => { dispatch(getUsers()) }, []) //eslint-disable-line
//   return (
//     <div className={`container-fluid px-0 ${s.div}`}>
//       <div className={`row justify-content-center ${s.div2}`}>
//         <h2>Usuarios Habilitados/Baneados</h2>
//         <div className='d-grid gap-2 d-md-block'>
//           <button type='button' className='btn btn-info' onClick={() => dataGraphic()}>Ver el grafico</button>
//         </div>
//         <div className='w-50 h-50 d-flex justify-content-end'>
//           <Doughnut
//             data={chartData}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UsersBannedChart

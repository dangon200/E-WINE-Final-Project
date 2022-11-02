import React, { useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { usersByProvinces } from '../../store/actions/actions'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)
// function isBigEnough(value) {
//   return value >= 10;
// }

// const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// // filtered is [12, 130, 44]

function UsersByProvincesChart () {
  const dispatch = useDispatch()
  const users = useSelector(state => state.usersByProvinces)
  const provincias = Object.keys(users)
  const usuarios = Object.values(users)

  useEffect(() => { dispatch(usersByProvinces()) }, [dispatch]) //eslint-disable-line

  const ChartData = () => {
    return ({
      labels: provincias,
      datasets: [
        {
          label: 'Cantidad de usuarios por Provincia',
          data: usuarios,
          borderColor: 'rgb(42, 157, 143,1)',
          backgroundColor: 'rgb(42, 157, 143,0.2)'
        }
      ]
    })
  }

  const ChartOptions = ({
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Cantidad de usuarios por Provincia'
      }
    }
  })

  return (
    <div>
      <h2>Usuarios nuevos por provincia</h2>
      <div className='w-100 h-100 d-flex justify-content-end'>
        <Bar options={ChartOptions} data={ChartData()} />
      </div>
    </div>
  )
}

export default UsersByProvincesChart

// import React, { useState, useEffect } from 'react'
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js'
// import { Bar } from 'react-chartjs-2'
// import { useDispatch, useSelector } from 'react-redux'
// import { usersByProvinces } from '../../store/actions/actions'

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// )
// // function isBigEnough(value) {
// //   return value >= 10;
// // }

// // const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// // // filtered is [12, 130, 44]

// function UsersByProvincesChart () {
//   const dispatch = useDispatch()
//   const users = useSelector(state => state.usersByProvinces)
//   const provincias = Object.keys(users)
//   const usuarios = Object.values(users)

//   const [chartData, setChartData] = useState({
//     datasets: []
//   })
//   const [chartOptions, setChartOptions] = useState({})
//   function handleSort () {
//     console.log(users)
//     console.log(provincias)
//     console.log(usuarios)
//     setChartData({
//       labels: provincias,
//       datasets: [
//         {
//           label: 'Cantidad de usuarios por Provincia',
//           data: usuarios,
//           borderColor: 'rgb(53, 162, 235)',
//           backgroundColor: 'rgba(53, 162, 235, 0.4)'
//         }
//       ]
//     })
//     setChartOptions({
//       responsive: true,
//       plugins: {
//         legend: {
//           position: 'top'
//         },
//         title: {
//           display: true,
//           text: 'Cantidad de usuarios por Provincia'
//         }
//       }
//     })
//   }
//   useEffect(() => { dispatch(usersByProvinces()) }, [dispatch]) //eslint-disable-line
//   return (
//     <div>
//       <h2>Usuarios nuevos por provincia</h2>
//       <button type='button' className='btn btn-info' onClick={() => handleSort()}>Ver el grafico </button>
//       <div className='w-75 d-flex justify-content-end'>

//         <Bar options={chartOptions} data={chartData} />
//       </div>
//     </div>
//   )
// }

// export default UsersByProvincesChart

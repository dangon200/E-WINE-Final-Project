import React, { useState } from 'react'
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
// import { useDispatch, useSelector } from 'react-redux'
// import { getUsers } from '../../store/actions/actions'

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

function UsersBarChart ({ users }) {
  // const dispatch = useDispatch()
  // const users = useSelector(state => state.users)
  const fecha = new Date()
  const hoy = fecha.getDate() // devuelve el día del mes en el que estamos (1-31).
  const mesActual = fecha.getMonth() + 1 // El método getMonth() devuelve el mes de la fecha especificada. Un punto a tener en cuenta acerca del método getMonth() es que devuelve valores indexados (0-11) donde el 0 es enero y el 11 es diciembre. Por tanto, añadiéndole 1 normalizamos el valor del mes.
  //   const añoActual = fecha.getFullYear()
  const lastMonth = users.map(e => { return parseInt(e.createdAt.slice(5, 7)) })
  const mesAhora = lastMonth.filter(e => e === mesActual)
  const mesAnterior = lastMonth.filter(e => e === mesActual - 1)
  const segMesAnterior = lastMonth.filter(e => e === mesActual - 2)
  const terMesAnterior = lastMonth.filter(e => e === mesActual - 3)
  const cuarMesAnterior = lastMonth.filter(e => e === mesActual - 4)
  const quinMesAnterior = lastMonth.filter(e => e === mesActual - 5)
  const sexMesAnterior = lastMonth.filter(e => e === mesActual - 6)
  // ULTIMAS 4 SEMANAS
  const days = users.map(e => { if(parseInt(e.createdAt.slice(5, 7)) === mesActual) return parseInt(e.createdAt.slice(8, 10)) }) //eslint-disable-line
  const firstWeek = days.filter(e => e < 8)
  const secondWeek = days.filter(e => e > 7 && e < 15)
  const thirdWeek = days.filter(e => e > 14 && e < 22)
  const fourthWeek = days.filter(e => e > 21 && e < 32)
  // ULTIMA SEMANA
  const week = users.map(e => { if(parseInt(e.createdAt.slice(5, 7)) === mesActual && parseInt(e.createdAt.slice(8, 10)) < hoy + 1  && parseInt(e.createdAt.slice(8, 10)) > hoy - 7 ) return parseInt(e.createdAt.slice(8, 10)) }) //eslint-disable-line
  const today = week.filter(e => e === hoy)
  const yesterday = week.filter(e => e === hoy - 1)
  const beforeYesterday = week.filter(e => e === hoy - 2)
  const threeDaysAgo = week.filter(e => e === hoy - 3)
  const fourDaysAgo = week.filter(e => e === hoy - 4)
  const fiveDaysAgo = week.filter(e => e === hoy - 5)
  const sixDaysAgo = week.filter(e => e === hoy - 6)

  const datitos = [sexMesAnterior.length, quinMesAnterior.length, cuarMesAnterior.length, terMesAnterior.length, segMesAnterior.length, mesAnterior.length, mesAhora.length]
  const datitosSemana = [firstWeek.length, secondWeek.length, thirdWeek.length, fourthWeek.length]
  const datitosDia = [sixDaysAgo.length, fiveDaysAgo.length, fourDaysAgo.length, threeDaysAgo.length, beforeYesterday.length, yesterday.length, today.length]

  // estado local inicial con valores en cero
  const [chartData, setChartData] = useState({
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: 'Cantidad de usuarios',
        data: [0],
        borderColor: 'rgb(42, 157, 143,1)',
        backgroundColor: 'rgb(42, 157, 143,0.2)'
      }
    ]
  })

  // estado local de chartOpsions
  const [chartOptions, setChartOptions] = useState({})

  // filtros acá___________________________________________________
  function handleSort (e) {
    // console.log(days)
    // console.log(mesAnterior)
    if (e.target.value === 'meses') {
      setChartData({
        labels: [mesActual - 6, mesActual - 5, mesActual - 4, mesActual - 3, mesActual - 2, mesActual - 1, mesActual],
        datasets: [
          {
            label: 'Cantidad de usuarios nuevos por semana en el mes',
            data: datitos,
            borderColor: 'rgb(42, 157, 143,1)',
            backgroundColor: 'rgb(42, 157, 143,0.2)'
          }
        ]
      })
      setChartOptions({
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Cantidad de usuarios nuevos por semana en el mes'
          }
        }
      })
    }
    if (e.target.value === 'semana') {
      setChartData({
        labels: ['1° Semana', '2° Semana', '3° Semana', '4° Semana'],
        datasets: [
          {
            label: 'Cantidad de usuarios en el último mes',
            data: datitosSemana,
            borderColor: 'rgb(42, 157, 143,1)',
            backgroundColor: 'rgb(42, 157, 143,0.2)'
          }
        ]
      })
      setChartOptions({
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Cantidad de usuarios en el último mes'
          }
        }
      })
    }
    if (e.target.value === 'dias') {
      console.log(week)
      setChartData({
        labels: [hoy - 6, hoy - 5, hoy - 4, hoy - 3, hoy - 2, hoy - 1, hoy],
        datasets: [
          {
            label: 'Cantidad de usuarios en la última semana',
            data: datitosDia,
            borderColor: 'rgb(42, 157, 143,1)',
            backgroundColor: 'rgb(42, 157, 143,0.2)'
          }
        ]
      })
      setChartOptions({
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Cantidad de usuarios en la última semana'
          }
        }
      })
    }
  }
  // useEffect(() => { dispatch(getUsers()) }, []) //eslint-disable-line
  return (
    <div>
      <h2>Usuarios nuevos por periodo de tiempo</h2>
      <select onChange={e => handleSort(e)}>
        <option value=''>Elja un valor</option>
        <option value='meses'>6 meses</option>
        <option value='semana'>1 mes</option>
        <option value='dias'>7 días</option>
      </select>

      <Bar options={chartOptions} data={chartData} />
    </div>
  )
}

export default UsersBarChart

// import React, { useState } from 'react'
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
// // import { useDispatch, useSelector } from 'react-redux'
// // import { getUsers } from '../../store/actions/actions'

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

// function UsersBarChart ({ users }) {
//   // const dispatch = useDispatch()
//   // const users = useSelector(state => state.users)
//   const fecha = new Date()
//   const hoy = fecha.getDate() // devuelve el día del mes en el que estamos (1-31).
//   const mesActual = fecha.getMonth() + 1 // El método getMonth() devuelve el mes de la fecha especificada. Un punto a tener en cuenta acerca del método getMonth() es que devuelve valores indexados (0-11) donde el 0 es enero y el 11 es diciembre. Por tanto, añadiéndole 1 normalizamos el valor del mes.
//   //   const añoActual = fecha.getFullYear()
//   const lastMonth = users.map(e => { return parseInt(e.createdAt.slice(5, 7)) })
//   const mesAhora = lastMonth.filter(e => e === mesActual)
//   const mesAnterior = lastMonth.filter(e => e === mesActual - 1)
//   const segMesAnterior = lastMonth.filter(e => e === mesActual - 2)
//   const terMesAnterior = lastMonth.filter(e => e === mesActual - 3)
//   const cuarMesAnterior = lastMonth.filter(e => e === mesActual - 4)
//   const quinMesAnterior = lastMonth.filter(e => e === mesActual - 5)
//   const sexMesAnterior = lastMonth.filter(e => e === mesActual - 6)
//   // ULTIMAS 4 SEMANAS
//   const days = users.map(e => { if(parseInt(e.createdAt.slice(5, 7)) === mesActual) return parseInt(e.createdAt.slice(8, 10)) }) //eslint-disable-line
//   const firstWeek = days.filter(e => e < 8)
//   const secondWeek = days.filter(e => e > 7 && e < 15)
//   const thirdWeek = days.filter(e => e > 14 && e < 22)
//   const fourthWeek = days.filter(e => e > 21 && e < 32)
//   // ULTIMA SEMANA
//   const week = users.map(e => { if(parseInt(e.createdAt.slice(5, 7)) === mesActual && parseInt(e.createdAt.slice(8, 10)) < hoy + 1  && parseInt(e.createdAt.slice(8, 10)) > hoy - 7 ) return parseInt(e.createdAt.slice(8, 10)) }) //eslint-disable-line
//   const today = week.filter(e => e === hoy)
//   const yesterday = week.filter(e => e === hoy - 1)
//   const beforeYesterday = week.filter(e => e === hoy - 2)
//   const threeDaysAgo = week.filter(e => e === hoy - 3)
//   const fourDaysAgo = week.filter(e => e === hoy - 4)
//   const fiveDaysAgo = week.filter(e => e === hoy - 5)
//   const sixDaysAgo = week.filter(e => e === hoy - 6)

//   const datitos = [sexMesAnterior.length, quinMesAnterior.length, cuarMesAnterior.length, terMesAnterior.length, segMesAnterior.length, mesAnterior.length, mesAhora.length]
//   const datitosSemana = [firstWeek.length, secondWeek.length, thirdWeek.length, fourthWeek.length]
//   const datitosDia = [sixDaysAgo.length, fiveDaysAgo.length, fourDaysAgo.length, threeDaysAgo.length, beforeYesterday.length, yesterday.length, today.length]

//   const [chartData, setChartData] = useState({
//     datasets: []
//   })
//   const [chartOptions, setChartOptions] = useState({})
//   function handleSort (e) {
//     // console.log(days)
//     // console.log(mesAnterior)
//     if (e.target.value === 'meses') {
//       setChartData({
//         labels: [mesActual - 6, mesActual - 5, mesActual - 4, mesActual - 3, mesActual - 2, mesActual - 1, mesActual],
//         datasets: [
//           {
//             label: 'Cantidad de usuarios nuevos por semana en el mes',
//             data: datitos,
//             borderColor: 'rgb(53, 162, 235)',
//             backgroundColor: 'rgba(53, 162, 235, 0.4)'
//           }
//         ]
//       })
//       setChartOptions({
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'top'
//           },
//           title: {
//             display: true,
//             text: 'Cantidad de usuarios nuevos por semana en el mes'
//           }
//         }
//       })
//     }
//     if (e.target.value === 'semana') {
//       setChartData({
//         labels: ['1° Semana', '2° Semana', '3° Semana', '4° Semana'],
//         datasets: [
//           {
//             label: 'Cantidad de usuarios en el último mes',
//             data: datitosSemana,
//             borderColor: 'rgb(53, 162, 235)',
//             backgroundColor: 'rgba(53, 162, 235, 0.4)'
//           }
//         ]
//       })
//       setChartOptions({
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'top'
//           },
//           title: {
//             display: true,
//             text: 'Cantidad de usuarios en el último mes'
//           }
//         }
//       })
//     }
//     if (e.target.value === 'dias') {
//       console.log(week)
//       setChartData({
//         labels: [hoy - 6, hoy - 5, hoy - 4, hoy - 3, hoy - 2, hoy - 1, hoy],
//         datasets: [
//           {
//             label: 'Cantidad de usuarios en la última semana',
//             data: datitosDia,
//             borderColor: 'rgb(53, 162, 235)',
//             backgroundColor: 'rgba(53, 162, 235, 0.4)'
//           }
//         ]
//       })
//       setChartOptions({
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'top'
//           },
//           title: {
//             display: true,
//             text: 'Cantidad de usuarios en la última semana'
//           }
//         }
//       })
//     }
//   }
//   // useEffect(() => { dispatch(getUsers()) }, []) //eslint-disable-line
//   return (
//     <div>
//       <h2>Usuarios nuevos por periodo de tiempo</h2>
//       <select onChange={e => handleSort(e)}>
//         <option value=''>Elja un valor</option>
//         <option value='meses'>6 meses</option>
//         <option value='semana'>1 mes</option>
//         <option value='dias'>7 días</option>
//       </select>

//       <Bar options={chartOptions} data={chartData} />
//     </div>
//   )
// }

// export default UsersBarChart

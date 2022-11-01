
import React, { useEffect } from 'react'
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
import { useSelector, useDispatch } from 'react-redux'
import { getBuys } from '../../store/actions/actions'
import { Doughnut } from 'react-chartjs-2'

// los registro para que no me traiga todos los de la libreria
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
)

function BuyProfitsChart () {
  // traigo el estado de buys
  const buys = useSelector(state => state.buys)
  const dispatch = useDispatch()
  // creo estado local --- solo si quiero que se muestre cuando oprimo botón
  // const [chartData, setChartData] = useState({ datasets: [] })

  useEffect(() => { dispatch(getBuys()) }, []) //eslint-disable-line

  // total dinero en compras a la fecha
  const buysTotal = () => {
    let cont = 0
    for (let i = 0; i < buys.length; i++) {
      cont += buys[i].totalAmount
    } return cont * 97 / 100
  }
  const buysProfits = () => {
    let cont = 0
    for (let i = 0; i < buys.length; i++) {
      cont += buys[i].totalAmount
    } return cont * 3 / 100
  }

  const dataGraphic = () => {
    return ({
      labels: ['Total Transacciones', 'Ganancias'],
      datasets: [
        {
          label: 'Total Transacciones',
          data: [buysTotal(), buysProfits()],
          borderColor: ['rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'],
          backgroundColor: ['rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)']
        }
      ]
    })
  }

  return (
    <div>
      <div><h3>GANANCIAS POR COMPRAS</h3></div>
      <div className='w-50 h-50'>
        <Doughnut
          data={dataGraphic()}
        />
      </div>
    </div>
  )
}

export default BuyProfitsChart

// ESTO ES SI QUIERO QUE SE RENDERICE CUANDO CLICK EN EL BOTÓN

// import React, { useState, useEffect } from 'react'
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
// import { useSelector, useDispatch } from 'react-redux'
// import { getBuys } from '../../store/actions/actions'
// import { Doughnut } from 'react-chartjs-2'

// // los registro para que no me traiga todos los de la libreria
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   ArcElement,
//   Legend
// )

// function BuyProfitsChart () {
//   // traigo el estado de buys
//   const buys = useSelector(state => state.buys)
//   const dispatch = useDispatch()
//   // creo estado local
//   const [chartData, setChartData] = useState({ datasets: [] })

//   useEffect(() => { dispatch(getBuys()) }, []) //eslint-disable-line

//   // total dinero en compras a la fecha
//   const buysTotal = () => {
//     let cont = 0
//     for (let i = 0; i < buys.length; i++) {
//       cont += buys[i].totalAmount
//     } return cont * 97 / 100
//   }
//   const buysProfits = () => {
//     let cont = 0
//     for (let i = 0; i < buys.length; i++) {
//       cont += buys[i].totalAmount
//     } return cont * 3 / 100
//   }

//   const dataGraphic = () => {
//     setChartData({
//       labels: ['Total Transacciones', 'Ganancias'],
//       datasets: [
//         {
//           label: 'Total Transacciones',
//           data: [buysTotal(), buysProfits()],
//           borderColor: ['rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)'],
//           backgroundColor: ['rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)']
//         }
//       ]
//     })
//   }

//   return (
//     <div>
//       <button onClick={() => dataGraphic()}>Ver el grafico</button>
//       <div className='w-50 h-50'>
//         <Doughnut
//           data={chartData}
//         />
//       </div>
//     </div>
//   )
// }

// export default BuyProfitsChart

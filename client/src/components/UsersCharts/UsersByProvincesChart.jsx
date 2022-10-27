import React, { useState, useEffect } from 'react'
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

  const [chartData, setChartData] = useState({
    datasets: []
  })
  const [chartOptions, setChartOptions] = useState({})
  function handleSort () {
    console.log(users)
    console.log(provincias)
    console.log(usuarios)
    setChartData({
      labels: provincias,
      datasets: [
        {
          label: 'Cantidad de usuarios nuevos por semana en el mes',
          data: usuarios,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.4)'
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
  useEffect(() => { dispatch(usersByProvinces()) }, [dispatch]) //eslint-disable-line
  return (
    <div>
      <h1>Usuarios nuevos por provincia</h1>
      <button onClick={() => handleSort()}>Ver el grafico </button>

      <Bar options={chartOptions} data={chartData} />
    </div>
  )
}

export default UsersByProvincesChart

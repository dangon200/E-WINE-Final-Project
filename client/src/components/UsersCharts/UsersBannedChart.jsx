import React, { useState, useEffect } from 'react'
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
  const [chartData, setChartData] = useState({
    datasets: []
  })

  const usersBanned = users.filter(e => e.isBanned === true)
  const usersNotBanned = users.filter(e => e.isBanned === false)
  const dataGraphic = () => {
    setChartData({
      labels: ['Usuarios Habilitados', 'Usuarios Baneados'],
      datasets: [
        {
          label: 'Usuarios Habilitados/Banneados',
          data: [usersBanned.length, usersNotBanned.length],
          borderColor: ['rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'],
          backgroundColor: ['rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)']
        }
      ]
    })
  }
  useEffect(() => { dispatch(getUsers()) }, []) //eslint-disable-line
  return (
    <div>
      <button onClick={() => dataGraphic()}>Ver el grafico</button>
      <div className='w-50 h-50'>
        <Doughnut
          data={chartData}
        />
      </div>
    </div>
  )
}

export default UsersBannedChart

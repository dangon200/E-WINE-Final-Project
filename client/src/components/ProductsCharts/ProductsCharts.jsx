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
import { popularProducts } from '../../store/actions/actions'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function ProductsCharts () {
  const dispatch = useDispatch()
  // me traigo el state de popularProduts
  const produts = useSelector(state => state.popularProduts)
  const productos = Object.keys(produts)
  const cantidadCompras = Object.values(produts)

  useEffect(() => { dispatch(popularProducts()) }, [dispatch]) //eslint-disable-line

  const ChartData = () => {
    return ({
      labels: productos,
      datasets: [
        {
          label: 'Cantidad de ventas',
          data: cantidadCompras,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.4)'
        }
      ]
    })
  }

  return (
    <div>
      <h2>Productos mas vendido</h2>
      <Bar options={ChartData()} data={ChartData()} />
    </div>
  )
}

export default ProductsCharts

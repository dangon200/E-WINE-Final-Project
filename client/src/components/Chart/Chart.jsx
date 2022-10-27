import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
// import s from './Chart.module.css'

function Chart () {
  const data = [
    {
      name: 'Enero',
      total: 4000
    },
    {
      name: 'Febrero',
      total: 3000
    },
    {
      name: 'Marzo',
      total: 2000
    },
    {
      name: 'Abril',
      total: 2780
    },
    {
      name: 'Mayo',
      total: 1890
    },
    {
      name: 'Junio',
      total: 2390
    },
    {
      name: 'Julio',
      total: 3490
    }
  ]
  return (
    <div className='d-flex'>
      <div className='title'>últimos 6 meses</div>
      <ResponsiveContainer width='100%' aspect={2 / 1}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>

          </defs>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Area type='monotone' dataKey='total' stroke='#8884d8' fillOpacity={1} fill='url(#total)' />
        </AreaChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Chart

import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function ChartCard({ title = 'Chart' }) {
  const data = {
    labels: Array.from({length: 12}, (_,i)=>`W${i+1}`),
    datasets: [
      {
        label: 'Users',
        data: Array.from({length:12}, ()=>Math.floor(Math.random()*100)+20),
        fill: false,
        tension: 0.3,
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: { legend: { display: false } }
  }

  return (
    <div className="bg-white p-4 rounded shadow border">
      <h3 className="text-sm font-medium mb-3">{title}</h3>
      <div className="h-44">
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

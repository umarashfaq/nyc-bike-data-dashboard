import React from 'react'
import Paper from 'material-ui/Paper'
import { PieChart, Pie, Sector, Cell, Legend } from 'recharts'

const COLORS = ['#00C49F', '#CCC', '#FF8042', '#0088FE']
const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy  + radius * Math.sin(-midAngle * RADIAN)
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const CurrentUsageViewInner = props => {
  const {capacity, num_bikes_available, stations, selectedStation, onChangeSelectedStation} = props
  const pieChartData = [{name: 'Available', value: num_bikes_available}, {name: 'Not Available', value: capacity - num_bikes_available}]
  
  return <Paper>
    <div style={{padding: 15}}>
      <div className="row">
        <div className="col-lg-6">
          <h2>Current Usage</h2>
        </div>
        <div className="col-lg-6">
          <select style={{marginTop: 15}} value={selectedStation} onChange={onChangeSelectedStation}>
            <option>All stations</option>
            {Object.values(stations).map(({station_id, name}) => <option value={station_id}>{name}</option>)}
          </select>
        </div>
      </div>
      <div className="row">
        <PieChart width={720} height={400}>
          <Pie
            data={pieChartData} 
            cx={360} 
            cy={120} 
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120} 
            fill="#8884d8"
          >
          {
            pieChartData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
          </Pie>
          <Legend/>
        </PieChart>
      </div>
    </div>
  </Paper>
}

export default CurrentUsageViewInner

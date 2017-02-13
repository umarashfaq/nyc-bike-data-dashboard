// src
import styles from './HistoricalUsageViewInner.less'

// libs
import React from 'react'
import Paper from 'material-ui/Paper'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const HistoricalUsageViewInner = props => {
  const {usage, stations, selectedStation, onChangeSelectedStation} = props
  const lineChartData = usage
    .map((num_bikes_available, index) => ({name: `T - ${index}`, bikesAvailable: num_bikes_available}))
    .reverse()
  
  return <div className={styles.root}>
    <Paper>
      <div style={{padding: 15}}>
        <div className="row">
          <div className="col-lg-6">
            <h2>Historical Usage</h2>
          </div>
          <div className="col-lg-6">
            <select style={{marginTop: 15}} value={selectedStation} onChange={onChangeSelectedStation}>
              <option>All stations</option>
              {Object.values(stations).map(({station_id, name}) => <option value={station_id}>{name}</option>)}
            </select>
          </div>
        </div>
        <div className="row">
          <LineChart width={720} height={300} data={lineChartData}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey="bikesAvailable" stroke="#8884d8" activeDot={{r: 8}}/>
          </LineChart>
        </div>
      </div>
    </Paper>
  </div>
}

export default HistoricalUsageViewInner

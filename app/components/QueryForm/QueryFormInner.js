// src
import styles from './QueryFormInner.less'

// libs
import React from 'react'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const QueryFormInner = props => {
  const {stations, fields: {
    station_id, distance
  }, handleSubmit, onSubmit, submitting} = props
  const fnSubmit = handleSubmit(onSubmit)
  
  return <Paper>
    <form className={styles.container} onSubmit={fnSubmit}>
      <h2>Filter Stations</h2>
      <label>Station</label><br/>
      <select {...station_id} disabled={submitting}>
        {stations.map(({station_id, name}) => <option key={station_id} value={station_id}>{name}</option>)}
      </select>
      <TextField floatingLabelText="Distance (in kilometers)" fullWidth {...distance} disabled={submitting}/>
      <RaisedButton label="Apply Filter" primary disabled={submitting} onClick={fnSubmit}/>
    </form>
  </Paper>
}

export default QueryFormInner
